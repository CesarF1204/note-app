import { Module } from '@nestjs/common';
import { GoogleStrategy } from './google.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
        PassportModule.register({ defaultStrategy: 'google' }),
    ],
    controllers: [UserController],
    providers: [UserService, GoogleStrategy],
})
export class UserModule {}
