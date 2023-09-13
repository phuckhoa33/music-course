import { Request, Response } from "express";

export interface IUserService {
    getAll(res: Response): void;
    getById(req: Request, res: Response): void;
    getByEmail(req: Request, res: Response): void;
    getByRoleId(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}