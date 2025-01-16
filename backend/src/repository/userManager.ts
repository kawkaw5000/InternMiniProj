import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { user } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserManager {
  private _userRepo: BaseRepository<user>;

  constructor() {
    this._userRepo = new BaseRepository<user>(prisma.user, 'UserId');
  }

  private generateJWT(user: user): string {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables.');
    }
  
    const payload = {
      sub: user.UserId, 
      username: user.Username,
    };
  
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { 
      expiresIn: process.env.JWT_EXPIRATION || '1h' 
    });
  
    return token;
  }

  public async getUserById(id: number): Promise<user | null> {
    if (!id) {
      throw new Error('Invalid UserId');
    }
    return await this._userRepo.get(id);
  }

  public async getUserByUsername(username: string): Promise<user | null> {
    if (!username) {
      throw new Error('Invalid username');
    }
    return await this._userRepo._table.findFirst({
      where: { Username: username },
    });
  }

  public async signUp(u: user): Promise<{ code: ErrorCode; message: string }> {
    if (!u.Username || !u.Password) {
      return { code: ErrorCode.Error, message: 'Username and password are required' };
    }

    const existingUser = await this.getUserByUsername(u.Username);

    if (existingUser) {
      return { code: ErrorCode.Error, message: 'Username already exists' };
    }
    const hashedPass = await bcrypt.hash(u.Password, 10);
  
    u.Password = hashedPass;

    const result = await this._userRepo.create(u);

    if (result.code !== ErrorCode.Success) {
      return { code: ErrorCode.InternalError, message: 'Error creating account' };
    }

    return { code: ErrorCode.Success, message: 'Account successfully created' };
  }

  public async authorize(username: string, password: string): Promise<{ code: ErrorCode; message: string; token?: string }> {
    if (!username || !password) {
      return { code: ErrorCode.Error, message: 'Username and password are required' };
    }

    const userSignIn = await this.getUserByUsername(username);

    if (!userSignIn) {
      return { code: ErrorCode.Error, message: 'Username or password incorrect' };
    }
    const isPasswordValid = await bcrypt.compare(password, userSignIn.Password as string); 

    if (!isPasswordValid) {
      return { code: ErrorCode.Error, message: 'Username or password incorrect' };
    }

    const token = this.generateJWT(userSignIn);
    
    return { code: ErrorCode.Success, message: 'Login successful', token };
  }

  public async updateUser(u: user): Promise<{ code: ErrorCode; message: string }> {
    const existingUser = await this.getUserById(u.UserId);
    if (!existingUser) {
      return { code: ErrorCode.NotFound, message: 'User not found' };
    }

    if (!u.Username || !u.Password) {
      return { code: ErrorCode.BadRequest, message: 'Username and password are required' };
    }
    
    existingUser.Username = u.Username;
    const hashedPass = await bcrypt.hash(u.Password, 10);
    existingUser.Password = hashedPass;

    const result = await this._userRepo.update(u.UserId, existingUser);

    if (result.code !== ErrorCode.Success) {
      return { code: ErrorCode.InternalError, message: 'Error updating account' };
    }

    return { code: ErrorCode.Success, message: 'Updating successful' };
  }

  public async deleteUser(id: number): Promise<{ code: ErrorCode; message: string }> {
    const result = await this._userRepo.delete(id);

    if (result.code !== ErrorCode.Success) {
      return { code: ErrorCode.InternalError, message: 'Error deleting account' };
    }

    return { code: ErrorCode.Success, message: 'User deleted successful' };
  }

  public async userList(): Promise<user[]> {
    return await this._userRepo.getAll();
  }
}
