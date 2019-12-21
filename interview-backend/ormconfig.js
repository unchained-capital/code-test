"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { NestFactory } = require("@nestjs/core");
const {ConfigService} = require('./dist/config/config.service');
const { AppConfigModule } = require("./dist/config/app-config.module");
const { createDBOptions } = require("./dist/db/typeorm.config");

async function getConfig() {
  const app = await NestFactory.create(AppConfigModule);
  const configService = app.get(ConfigService);
  return {
    ...await createDBOptions(configService, null),
    cli: {
      migrationsDir: ['./src/db/migrations/'],
    },
  };
}

module.exports = getConfig();
