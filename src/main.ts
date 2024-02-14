import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Enables CORS for all origins
  // Or with options
  app.use(
    cors({
      origin: 'http://localhost:4200',
    }),
  );
  await app.listen(3000);
}
bootstrap();
