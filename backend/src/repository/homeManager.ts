import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { userhome, user } from '@prisma/client';

export class HomeManager {
    private _userhomeRepo: BaseRepository<userhome>;

    constructor() {
        this._userhomeRepo = new BaseRepository<userhome>(prisma.userhome, 'UserHomeId');
    }

    public async createUserhome(u: userhome): Promise<{ code: ErrorCode; message: string }> {
        const result = await this._userhomeRepo.create(u);

        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error creating account' };
        }

        return { code: ErrorCode.Success, message: 'Home successfully created' };
    }
}