import { Module } from "@nestjs/common";
import { TodoService } from "./services/todo.service";
import { TodoEntity } from "../db/entities/TodoEntity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity])
  ],
  providers: [TodoService],
})
export class TodoModule {}
