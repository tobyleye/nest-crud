import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { ItemModule } from './items/items.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ItemModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
