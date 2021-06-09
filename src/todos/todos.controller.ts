import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  retriveTodos() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() createTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Post(':id/complete')
  complete(@Param('id') id: number) {
    return this.todosService.markAsComplete(id);
  }

  @Delete()
  async delete(@Param('id') id: number) {
    await this.todosService.delete(id);
    return 'OK';
  }
}
