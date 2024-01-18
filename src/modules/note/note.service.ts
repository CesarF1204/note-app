import { Injectable, NotFoundException, Req, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schemas/note.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note.name)
        private noteModel: mongoose.Model<Note>
    ){}

    /**
    * DOCU: Function to find and get all the notes. <br>
    * Triggered by /notes <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteService
    * @author Cesar
    */
    async findAll(): Promise<Note[]> {
        const notes = await this.noteModel.find();
        return notes;
    }

    /**
    * DOCU: Function to find a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteService
    * @author Cesar
    */
    async findById(id: string): Promise<Note> {
        const note_found = await this.noteModel.findById(id);

        /* Check if no note_found then throw an error */
        if(!note_found) {
            throw new NotFoundException(`Note record not found. Please try again`);
        }

        return note_found;
    }

    /**
    * DOCU: Function to create a note. <br>
    * Triggered by /notes <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteService
    * @author Cesar
    */
    async createNote(note_data: Note): Promise<Note> {
        const create_note = await this.noteModel.create(note_data);
        return create_note;
    }

    /**
    * DOCU: Function to update a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteService
    * @author Cesar
    */
    async updateById(id: string, note: Note): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(id, note, {
            new: true,
            runValidators: true
        });
    }

    /**
    * DOCU: Function to delete a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteService
    * @author Cesar
    */
    async deleteById(id: string): Promise<Note> {
        return await this.noteModel.findByIdAndDelete(id);
    }
}
