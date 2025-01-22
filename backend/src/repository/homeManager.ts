import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { userhome, user } from '@prisma/client';

export class HomeManager {
    private readonly _userhomeRepo: BaseRepository<userhome>;

    constructor() {
        this._userhomeRepo = new BaseRepository<userhome>(prisma.userhome, 'UserHomeId');
    }

    public async userHomeList(): Promise<userhome[]> {
        return await this._userhomeRepo.getAll();
    }

    public async getUserListByUserId(userId: number): Promise<user[] | null> {
        return await this._userhomeRepo._table.findFirst({
            where: { UserId: userId }
        });
    }

    public async listUserHomes(): Promise<userhome[]> {
        return await this._userhomeRepo.getAll();
    }

    public async getUserhomeById(id: number): Promise<userhome | null> {
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
        const existingUserhome = await this.getUserhomeById(u.UserHomeId);
        if (!existingUserhome) {
            return { code: ErrorCode.NotFound, message: 'Userhome not found' };
        }
    
        existingUserhome.ImgBox1 = u.ImgBox1;
        existingUserhome.ImgBox2 = u.ImgBox2;
        existingUserhome.ImgBox3 = u.ImgBox3;
        existingUserhome.ImgBox4 = u.ImgBox4;
        existingUserhome.ImgBox5 = u.ImgBox5;
        existingUserhome.ImgBox6 = u.ImgBox6;
        existingUserhome.ImgBox7 = u.ImgBox7;
        existingUserhome.ImgBox8 = u.ImgBox8;
        existingUserhome.ImgBox9 = u.ImgBox9;
        existingUserhome.ImgBox10 = u.ImgBox10;
        existingUserhome.UserId = u.UserId;
    
        const result = await this._userhomeRepo.update(u.UserHomeId, existingUserhome);
    
        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error updating home' };
        }
    
        return { code: ErrorCode.Success, message: 'Updating successful' };
    }
    
}