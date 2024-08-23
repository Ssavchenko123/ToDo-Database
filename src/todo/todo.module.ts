import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Task } from './todo.model';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
