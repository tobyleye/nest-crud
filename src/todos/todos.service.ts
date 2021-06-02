import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  create(createTodoDto) {
    const todo = new Todo();
    todo.todo = createTodoDto.todo;
    todo.completed = createTodoDto.completed;
    return this.todosRepository.save(todo);
  }

  findAll() {
    return this.todosRepository.find();
  }

  markAsComplete(id: number) {
    return this.todosRepository.update(id, { completed: true });
  }
}
