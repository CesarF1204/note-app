import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './schemas/note.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema}]), PassportModule.register({ session: true }),],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NotesModule {}
