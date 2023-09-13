import { IAuthService } from "../services/interfaces/auth.interface";

export class AuthController {

    constructor(
        private readonly authService: IAuthService
    ){}

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