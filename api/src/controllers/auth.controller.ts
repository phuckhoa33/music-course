import { Inject, Service } from "typedi";
import { IAuthService } from "../services/interfaces/auth.interface";
import "reflect-metadata";

export class AuthController {

    @Inject('AuthService')
    authService: IAuthService

    async login() {
        try {
            console.log("HELLO ");
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async register() {
        try {
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async logout() {
        try {
            
        } catch (error) {
            console.log(error);
            
        }
    }
}