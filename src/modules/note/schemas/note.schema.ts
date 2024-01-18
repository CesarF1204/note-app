import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    /* Enabling automatic timestamp generation for 'createdAt' and 'updatedAt' fields */
    timestamps: true
})

export class Note {
    @Prop() title: string;
    @Prop() content: string;
    @Prop() created_by: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);