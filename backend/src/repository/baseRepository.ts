import { IBaseRepository } from '../contract/ibaseRepository';
import { ErrorCode } from '../utils/utilities';

export class BaseRepository<T> implements IBaseRepository<T> {
  public _table: any;
  public primaryKey: string; 

  constructor(model: any, primaryKey = 'id') {
    this._table = model;
    this.primaryKey = primaryKey;
  }

  async create(t: T): Promise<{ code: ErrorCode; message: string }> {
    try {
      await this._table.create({
        data: t,
      });
      return { code: ErrorCode.Success, message: 'Success' };
    } catch (error) {
      return {
        code: ErrorCode.InternalError,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async update(id: number | string, t: T): Promise<{ code: ErrorCode; message: string }> {
    try {
      const existingObj = await this._table.findFirst({ where: { [this.primaryKey]: id } });
      if (!existingObj) {
        return { code: ErrorCode.Error, message: 'Object not found' };
      }

      await this._table.update({
        where: { [this.primaryKey]: id },
        data: t,
      });
      return { code: ErrorCode.Success, message: 'Updated' };
    } catch (error) {
      return {
        code: ErrorCode.InternalError,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async delete(id: number | string): Promise<{ code: ErrorCode; message: string }> {
    try {
      const existingObj = await this._table.findFirst({ where: { [this.primaryKey]: id } });
      if (!existingObj) {
        return { code: ErrorCode.NotFound, message: 'Object not found' };
      }

      await this._table.delete({
        where: { [this.primaryKey]: id },
      });

      return { code: ErrorCode.Success, message: 'Deleted' };
    } catch (error) {
      return {
        code: ErrorCode.InternalError,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async get(id: number | string): Promise<T | null> {
    return await this._table.findFirst({
      where: { [this.primaryKey]: id },
    });
  }

  async getAll(): Promise<T[]> {
    return await this._table.findMany();
  }
}
