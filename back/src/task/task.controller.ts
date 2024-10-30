import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from './task.dto';
import { UpdateTaskDto } from './task.dto';
import { Task } from './task.model';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto, @Request() req): Task {
    return this.tasksService.createTask(createTaskDto, req.user.id);
  }

  @Get()
  getTasks(@Request() req): Task[] {
    return this.tasksService.getTasks(req.user.id);
  }

  @Get(':id')
  getTaskById(@Param('id') id: number, @Request() req): Task {
    const userId = req.user.id;
    return this.tasksService.getTaskById(Number(id), userId);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request() req,
  ): Task {
    const userId = req.user.id;
    return this.tasksService.updateTask(Number(id), updateTaskDto, userId);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number, @Request() req): void {
    const userId = req.user.id;
    this.tasksService.deleteTask(Number(id), userId);
  }
}
