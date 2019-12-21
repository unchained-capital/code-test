import {Module} from "@nestjs/common";
import {DatabaseModule} from "./db/database.module";
import {AppConfigModule} from "./config/app-config.module";
import {TodoModule} from "./main-feature/todo.module";

@Module({
    imports: [
        AppConfigModule,
        DatabaseModule,
        TodoModule,
    ],
})
export class AppModule {
}
