import { NestFactory, } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
import * as path from 'path';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  /* session */
  app.use(
    session({
      secret: 'dsadsd23213fdf341ssd2',
      resave: false,
      saveUninitialized: true,
    }),
  );

  /* assets */
  app.use(express.static(path.join(__dirname, 'assets')));

  /* views */
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  
  /* ejs engine */
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
