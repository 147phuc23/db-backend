import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:false,    logger: ['error', 'warn', 'log', 'debug'],
  });
  await app.listen(3000);
}
bootstrap();
