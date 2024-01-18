import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    /* Constructor to initialize the Google OAuth 2.0 authentication strategy */
    constructor(){
        super({
            clientID: '900176444085-cj4tnntens6ht90g4vq2dv9h5i2jdihd.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile']
        });
    }

    /* Implementation of the validate method to handle user profile data after authentication */
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile;

        /* Creating a user object with extracted information */
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }

        /* Calling the 'done' callback to complete the authentication process */
        done(null, user)
    }
}