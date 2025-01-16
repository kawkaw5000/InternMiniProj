import { ErrorCode } from "../utils/utilities";

export interface IBaseRepository<T> {
    create(t: T): Promise<{ code: ErrorCode; message: string }>;
    update(id: number | string, t: T): Promise<{ code: ErrorCode; message: string }>;
    delete(id: number | string): Promise<{ code: ErrorCode; message: string }>;
    get(id: number | string): Promise<T | null>;
    getAll(): Promise<T[]>;
}
