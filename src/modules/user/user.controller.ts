import { Controller, Get, Session, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    /**
    * DOCU: Endpoint for initiating Google OAuth 2.0 authentication <br>
    * Triggered by / <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf UserController
    * @author Cesar
    */
    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth() {
    }

    /**
    * DOCU: Endpoint for handling Google OAuth 2.0 authentication callback <br>
    * Triggered by /auth/google/callback <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf UserController
    * @author Cesar
    */
    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req, @Res() res) {
        req.session.user = req.user;
        return this.userService.googleLogin(req, res);
    }

    /**
    * DOCU: Endpoint for logging out the user <br>
    * Triggered by / <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf UserController
    * @author Cesar
    */
    @Get()
    logout(@Req() req, @Res() res) {
        /* This will clear the login session */
        req.logout();
        /* This will destroy the session */
        req.session.destroy()
        /* Redirecting the user to the notes page after successful logout */
        return res.redirect('http://localhost:3000/notes');
    }
}
