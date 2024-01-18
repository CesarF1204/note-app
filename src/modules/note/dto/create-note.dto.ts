import { IsNotEmpty } from "class-validator";

/* Defining a Data Transfer Object (DTO) class for creating a new note */
export class CreateNoteDTO {
    /* Applying the 'IsNotEmpty' validation decorator to ensure the 'title' is not empty */
    @IsNotEmpty() readonly title: string;
    @IsNotEmpty() readonly content: string;
    readonly created_by: string;
}