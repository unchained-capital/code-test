import { Module } from "@nestjs/common";
import { TodoService } from "./services/todo.service";
import { TodoEntity } from "../db/entities/TodoEntity";
import { TypeOrmModule } from "@nestjs/typeorm";
import {TodoController} from "./controllers/todo.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
