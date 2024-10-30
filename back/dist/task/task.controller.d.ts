import { TasksService } from './task.service';
import { CreateTaskDto } from './task.dto';
import { UpdateTaskDto } from './task.dto';
import { Task } from './task.model';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(createTaskDto: CreateTaskDto, req: any): Task;
    getTasks(req: any): Task[];
    getTaskById(id: number, req: any): Task;
    updateTask(id: number, updateTaskDto: UpdateTaskDto, req: any): Task;
    deleteTask(id: number, req: any): void;
}
