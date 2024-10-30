import { CreateTaskDto } from './task.dto';
import { UpdateTaskDto } from './task.dto';
import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    private idCounter;
    createTask(createTaskDto: CreateTaskDto, userId: number): Task;
    getTasks(userId: number): Task[];
    getTaskById(taskId: number, userId: number): Task;
    updateTask(taskId: number, updateTaskDto: UpdateTaskDto, userId: number): Task;
    deleteTask(taskId: number, userId: number): void;
}
