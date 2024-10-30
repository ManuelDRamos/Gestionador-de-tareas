import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './task.dto';
import { UpdateTaskDto } from './task.dto';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  createTask(createTaskDto: CreateTaskDto, userId: number): Task {
    const task: Task = {
      id: this.idCounter++,
      title: createTaskDto.title,
      description: createTaskDto.description,
      completed: false,
      userId,
    };
    this.tasks.push(task);
    return task;
  }

  getTasks(userId: number): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  getTaskById(taskId: number, userId: number): Task {
    const task = this.tasks.find(
      (task) => task.id === taskId && task.userId === userId,
    );

    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  updateTask(
    taskId: number,
    updateTaskDto: UpdateTaskDto,
    userId: number,
  ): Task {
    const task = this.getTaskById(taskId, userId);

    Object.assign(task, updateTaskDto);
    return task;
  }

  deleteTask(taskId: number, userId: number): void {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === taskId && task.userId === userId,
    );
    if (taskIndex === -1) throw new NotFoundException('Task not found');
    this.tasks.splice(taskIndex, 1);
  }
}
