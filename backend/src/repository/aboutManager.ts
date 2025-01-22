import { BaseRepository } from './baseRepository';
import { ErrorCode } from '../utils/utilities';
import prisma from '../config/dbConfig';
import { userhome, user, userabout } from '@prisma/client';

export class AboutManager {
    private readonly _aboutRepository: BaseRepository<userabout>;
    constructor() {
        this._aboutRepository = new BaseRepository<userabout>(prisma.userabout, 'UserAboutId');
    }

    public async getAboutById(id: number): Promise<userabout | null> {
        return await this._aboutRepository.get(id);
    }
    public async listAbout(): Promise<userabout[]> {
        return await this._aboutRepository.getAll()
    }
    
    public async getAboutByUserId(id: number): Promise<userabout[]> {
        return await this._aboutRepository._table.findFirst({ where: { UserId: id } });
    }

    public async createAbout(u: userabout): Promise<{ code: ErrorCode; message: string }> {
        const result = await this._aboutRepository.create(u);

        if (result.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error creating account' };
        }

        return { code: ErrorCode.Success, message: 'About successfully created' };
    }

    public async updateAbout(u: userabout): Promise<{ code: ErrorCode; message: string }> {
        const existingAbout = await this.getAboutById(u.UserAboutId);
        if (!existingAbout) {
            return { code: ErrorCode.NotFound, message: 'Userhome not found' };
        }

        existingAbout.ImgAbout1 = u.ImgAbout1;
        existingAbout.ImgAbout2 = u.ImgAbout2;
        existingAbout.ImgAbout3 = u.ImgAbout3;
        existingAbout.UserId = u.UserId;

        const updateAbout = await this._aboutRepository.update(u.UserAboutId, existingAbout);

        if (updateAbout.code !== ErrorCode.Success) {
            return { code: ErrorCode.InternalError, message: 'Error updating about page.' };
        }

        return { code: ErrorCode.Success, message: 'Userhome successfully updated' };
    }
}
