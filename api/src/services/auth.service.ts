import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IAuthService } from "./interfaces/auth.interface";
import { IUserService } from "./interfaces/user.interface";

export class AuthService implements IAuthService {
    constructor(
        private readonly userService: IUserService
    ){}


    login(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        throw new Error("Method not implemented.");
    }
    register(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        throw new Error("Method not implemented.");
    }

}

