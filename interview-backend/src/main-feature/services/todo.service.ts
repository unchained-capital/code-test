import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TodoEntity} from "../../db/entities/TodoEntity";
import {Repository} from "typeorm";

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoEntity)
        private readonly _repo: Repository<TodoEntity>,
    ) {
    }

    async getAllTodos() {
        return await this._repo.find();
    }
  
    async saveTodo(todo: TodoEntity) {
        return await this._repo.save(todo);
    }

}
