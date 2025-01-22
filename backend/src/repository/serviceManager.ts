import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { userhome, user, userservice } from '@prisma/client';

export class ServiceManager {
    private readonly _userServicerRepo: BaseRepository<userservice>;

    constructor() {
        this._userServicerRepo = new BaseRepository<userservice>(prisma.userservice, 'UserServiceId');
    }

    public async userServiceList(): Promise<userservice[]> {
        return await this._userServicerRepo.getAll();
    }
    
    public async getUserServiceById(id: number): Promise<userservice | null> {
        return await this._userServicerRepo.get(id);
    }

    public async getUserServiceByUserId(userId: number): Promise<userservice[] | null> {
        return await this._userServicerRepo._table.findFirst({
            where: { UserId: userId }
        });
    }

    public async createUserServices(u: userservice): Promise<{ code: ErrorCode; message: string }> {
        const result = await this._userServicerRepo.create(u);

        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error creating Services' };
        }

        return { code: ErrorCode.Success, message: 'Home Services created' };
    }

    public async updateUserServices(us: userservice): Promise<{ code: ErrorCode; message: string }> {
        const existUserService = await this.getUserServiceById(us.UserServiceId);
        if (!existUserService) {
            return { code: ErrorCode.NotFound, message: 'Userhome not found' };
        }

        existUserService.UserId = us.UserId;
        existUserService.Title = us.Title;
        existUserService.Description = us.Description;
        existUserService.SkillsImgIcon1 = us.SkillsImgIcon1;
        existUserService.SkillsImgIcon2 = us.SkillsImgIcon2;
        existUserService.SkillsImgIcon3 = us.SkillsImgIcon3;
        existUserService.SkillsImgIcon4 = us.SkillsImgIcon4;
        existUserService.SkillsImgIcon5 = us.SkillsImgIcon5;

        const result = await this._userServicerRepo.update(us.UserServiceId, existUserService);

        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error updating Services' };
        }

        return { code: ErrorCode.Success, message: 'Services updated' };
    }

    public async deleteUserService(id: number): Promise<{ code: ErrorCode; message: string }> {
        const result = await this._userServicerRepo.delete(id);
        
        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error deleting Services' };
        }

        return { code: ErrorCode.Success, message: `ServiceId ${id} deleted` };
    }

}