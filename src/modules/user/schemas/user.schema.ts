import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    /* Enabling automatic timestamp generation for 'createdAt' and 'updatedAt' fields */
    timestamps: true
})

export class User {
    @Prop() first_name: string;
    @Prop() last_name: string;
    @Prop() email_address: string;
    @Prop() img_url: string;
}

export const UserSchema = SchemaFactory.createForClass(User);