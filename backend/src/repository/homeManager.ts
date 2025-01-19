import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { userhome, user } from '@prisma/client';

export class HomeManager {
    private _userhomeRepo: BaseRepository<userhome>;

    constructor() {
        this._userhomeRepo = new BaseRepository<userhome>(prisma.userhome, 'UserHomeId');
    }

    public async userHomeList(): Promise<userhome[]> {
        return await this._userhomeRepo.getAll();
    }

    public async getUserhomeByUserId(id: number): Promise<userhome | null> {
        return await this._userhomeRepo.get(id);
    }

    public async createUserhome(u: userhome): Promise<{ code: ErrorCode; message: string }> {
        const result = await this._userhomeRepo.create(u);

        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error creating account' };
        }

        return { code: ErrorCode.Success, message: 'Home successfully created' };
    }

    public async updateUserhome(u: userhome): Promise<{ code: ErrorCode; message: string }> {
        if (!u.UserId) {
            return { code: ErrorCode.BadRequest, message: 'UserId is required and cannot be null' };
        }
    
        const existingUserhome = await this.getUserhomeByUserId(u.UserId);
        if (!existingUserhome) {
            return { code: ErrorCode.NotFound, message: 'Userhome not found' };
        }
    
        const updatedUserhome = {
            ...existingUserhome,
            ...u,
        };
    
        const result = await this._userhomeRepo.update(u.UserHomeId, updatedUserhome);
    
        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error updating home' };
        }
    
        return { code: ErrorCode.Success, message: 'Updating successful' };
    }
    
}