import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {createDBOptions} from "./typeorm.config";
import {AppConfigModule} from "../config/app-config.module";
import {LoggerModule} from "../logger/logger.module";
import {ConfigService} from "../config/config.service";

@Module({
    imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [AppConfigModule],
            inject: [ConfigService],
            useFactory: createDBOptions,
        }),
        LoggerModule,
    ],
})
export class DatabaseModule {
}
