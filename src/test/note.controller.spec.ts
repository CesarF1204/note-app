import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('NoteController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/notes (GET)', () => {
    return request(app.getHttpServer())
      .get('/notes')
      .expect(500)

  });

  it('/notes/:id (GET)', async () => {

    const note_id = '65a8079acd4a118bde977472';
    return request(app.getHttpServer())
      .get(`/notes/${note_id}`)
      .expect(200)
      
      // .expect(res => {
      //   expect(res.body).toBeDefined();
      //   expect(res.body._id).toEqual(note_id);
      // });
  });

  it('/notes (POST)', () => {
    const noteData = { title: 'Test Note', content: 'Test Content' };
    return request(app.getHttpServer())
      .post('/notes')
      .send(noteData)
      .expect('Content-Type', /json/)
      // .expect(res => {
      //   expect(res.body).toBeDefined();
      //   expect(res.body.title).toEqual(noteData.title);
      //   expect(res.body.content).toEqual(noteData.content);
      // });
  });


  afterAll(async () => {
    await app.close();
  });
});