import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { getDbConnectionOptions, runDbMigrations } from 'src/shared/utils';

const port = process.env.PORT || 4000;
console.log(port);

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
    // {
    //   // logger: Boolean(process.env.ENABLELOGGING),
    //   // logger: console,
    // },
  );
  console.log(`Server started running on http://localhost:${port}`);

  /**
   * Helmet can help protect your app from some well-known
   * web vulnerabilities by setting HTTP headers appropriately.
   * Generally, Helmet is just a collection of 12 smaller
   * middleware functions that set security-related HTTP headers
   *
   * https://github.com/helmetjs/helmet#how-it-works
   */
  // app.use(helmet());

  console.log(`Server started running on http://localhost:${port}`);
  app.enableCors();

  // /**
  //  * we need this because "cookie" is true in csrfProtection
  //  */
  // app.use(cookieParser());

  // app.use(csurf({ cookie: true }));

  /**
   * To protect your applications from brute-force attacks
   */
  // app.use(
  //   new rateLimit({
  //     windowMs: 15 * 60 * 1000,
  //     max: 100,
  //   }),
  // );

  /**
   * Apply validation for all inputs globally
   */
  console.log(`Server started running on http://localhost:${port}`);
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * Strip away all none-object existing properties
       */
      whitelist: true,
      /***
       * Transform input objects to their corresponding DTO objects
       */
      transform: true,
    }),
  );

  console.log(`Server started running on http://localhost:${port}`);
  /**
   * Run DB migrations
   */
  await runDbMigrations();

  await app.listen(port);
  console.log(`Server started running on http://localhost:${port}`);

  // Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
