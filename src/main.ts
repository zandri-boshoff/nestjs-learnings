import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // this creates a new nest application
  await app.listen(3000); // that listens on port 3000
}
bootstrap();
