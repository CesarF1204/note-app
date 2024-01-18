import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    /* Constructor to initialize the Google OAuth 2.0 authentication strategy */
    constructor(private readonly configService: ConfigService){
        super({
            clientID: configService.get<string>('CLIENT_ID'),
            clientSecret: configService.get<string>('CLIENT_SECRET'),
            callbackURL: configService.get<string>('CALLBACK_URL'),
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