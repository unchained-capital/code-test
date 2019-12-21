import {Body, Controller, Get, Post} from "@nestjs/common";
import {TodoService} from "../services/todo.service";
import {TodoEntity} from "../../db/entities/TodoEntity";

@Controller("/todo")
export class TodoController {

    constructor(
        private readonly _service: TodoService,
    ) {}

    @Get("/")
    async getAllTodos() {
        return await this._service.getAllTodos();
    }

    @Post("/")
    async saveTodo(
        @Body() todo: TodoEntity,
    ) {
        return await this._service.saveTodo(todo);
    }
}
