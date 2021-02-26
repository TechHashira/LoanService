import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('LoanService')
    .setDescription('The LoanService description.... TODO: Add Description')
    .setVersion('1.0')
    .addTag('Loan')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('SERVER_PORT'));
}
bootstrap();
