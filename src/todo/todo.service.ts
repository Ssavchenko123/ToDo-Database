import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateTaskDto } from './dto/create-task.dto';
import { ReplaceTaskDto } from './dto/replace-task.dto';
import { ReplaceCheckboxDto } from './dto/replace-checkbox.dto';

import { Task } from './todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}
  async deleteCompletedTasks(): Promise<string> {
    await this.taskModel.destroy({
      where: { isChecked: true },
    });
    return 'completed tasks deleted ';
  }
  async deleteTask(id: number): Promise<string> {
    await this.taskModel.destroy({
      where: { id },
    });
    return 'Task deleted';
  }

  getTasks(): Promise<Task[]> {
    return this.taskModel.findAll({
      attributes: ['id', 'taskText', 'isChecked'],
      order: [['CreatedAt', 'ASC']],
    });
  }

  createNewTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(createTaskDto);
  }

  async replaceTask(id: number, updateTaskDto: ReplaceTaskDto): Promise<Task> {
    const [edit, [editedTask]] = await this.taskModel.update(
      { taskText: updateTaskDto.taskText, isChecked: updateTaskDto.isChecked },
      { where: { id }, returning: true },
    );
    if (edit === 0) {
      throw new NotFoundException('no tasks?');
    }
    return editedTask;
  }

  async replaceTaskCheckbox(
    updateCheckboxDto: ReplaceCheckboxDto,
  ): Promise<string> {
    await this.taskModel.update(
      { isChecked: updateCheckboxDto.isChecked },
      { where: { isChecked: !updateCheckboxDto.isChecked } },
    );
    return 'Update Checkbox';
  }
}
