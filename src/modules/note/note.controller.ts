import { Body, Controller, Delete, Get, Param, Post, Put, Session, Req, Res, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './schemas/note.schema';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';

@Controller('notes')
export class NoteController {
    constructor(private noteService: NoteService) {}

    /**
    * DOCU: Function to find and get all the notes. <br>
    * Triggered by /notes <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteController
    * @author Cesar
    */
    @Get()
    @Render('index')
    async getAllNotes(@Session() session, @Res() res): Promise<{ notes: Note[], user_session: any }> {
        const user_session = session.user;

        const notes = await this.noteService.findAll();
        return { notes, user_session };
    }

    /**
    * DOCU: Function to find a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteController
    * @author Cesar
    */
    @Get('/:id')
    async getNoteById(@Param('id') id: string): Promise<Note> {
        return this.noteService.findById(id);
    }

    /**
    * DOCU: Function to create a note. <br>
    * Triggered by /notes <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteController
    * @author Cesar
    */
    @Post()
    @UsePipes(ValidationPipe)
    async createNote(@Body() note: CreateNoteDTO, @Session() session): Promise<Note> {
        const { title, content } = note;
        const note_data = {
            title,
            content,
            created_by: session.user.email
        }
        return this.noteService.createNote(note_data);
    }

    /**
    * DOCU: Function to update a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteController
    * @author Cesar
    */
    @Post('/:id')
    @UsePipes(ValidationPipe)
    async updateNote(
        @Param('id') id: string,
        @Body() note: UpdateNoteDTO): Promise<Note> {
        
        return this.noteService.updateById(id, note);
    }

    /**
    * DOCU: Function to delete a note using note id. <br>
    * Triggered by /notes/:id <br>
    * Last updated at: January 18, 2024
    * @async
    * @function
    * @memberOf NoteController
    * @author Cesar
    */
    @Post('/delete/:id')
    async deleteNote(@Param('id') id: string): Promise<Note> {
        return this.noteService.deleteById(id);
    }
    
}
