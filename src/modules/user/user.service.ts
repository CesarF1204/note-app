import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()

export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){}
    
    /**
    * DOCU: Endpoint for handling Google OAuth 2.0 authentication callback <br>
    * Triggered by /auth/google/callback <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf UserService
    * @author Cesar
    */
    async googleLogin(req, res) {
        /* Checking if a user object exists in the request */
        if(!req.user){
        return 'No user from google!'
        }
        
        const { firstName, lastName, picture, email } = req.user;

        /* Creating a user data object with extracted information */
        const user_data = {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            img_url: picture
        }

        /* Checking if the user already exists in the database */
        const existingUser = await this.userModel.findOne({ email_address: email });

        /* If the user doesn't exist, create a new user record in the database */
        if(!existingUser){
            await this.userModel.create(user_data);
        }
        
        /* Redirecting the user to the notes page after successful login */
        return res.redirect(`/notes`);
    }
}
