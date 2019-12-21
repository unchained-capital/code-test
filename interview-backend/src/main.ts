import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "./app.module";
import {ConfigService} from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);
  const logger = app.get(Logger);
  const port = config.get("PORT") || 5000;
  logger.log(port, "ApplicationPort");
  await app.listen(port);
}

bootstrap();
