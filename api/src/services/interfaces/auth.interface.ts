import { Request, Response } from "express";

export interface IAuthService {
    login(req: Request, res: Response): void;
    register(req: Request, res: Response): void;
}