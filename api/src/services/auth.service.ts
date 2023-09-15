import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IAuthService } from "./interfaces/auth.interface";
import { IUserService } from "./interfaces/user.interface";
import { Inject, Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class AuthService implements IAuthService {
    @Inject('UserService')
    userService: IUserService


    login(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        throw new Error("Method not implemented.");
    }
    register(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        throw new Error("Method not implemented.");
    }

}
