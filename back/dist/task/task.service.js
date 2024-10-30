"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
        this.idCounter = 1;
    }
    createTask(createTaskDto, userId) {
        const task = {
            id: this.idCounter++,
            title: createTaskDto.title,
            description: createTaskDto.description,
            completed: false,
            userId,
        };
        this.tasks.push(task);
        return task;
    }
    getTasks(userId) {
        return this.tasks.filter((task) => task.userId === userId);
    }
    getTaskById(taskId, userId) {
        const task = this.tasks.find((task) => task.id === taskId && task.userId === userId);
        if (!task)
            throw new common_1.NotFoundException('Task not found');
        return task;
    }
    updateTask(taskId, updateTaskDto, userId) {
        const task = this.getTaskById(taskId, userId);
        Object.assign(task, updateTaskDto);
        return task;
    }
    deleteTask(taskId, userId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId && task.userId === userId);
        if (taskIndex === -1)
            throw new common_1.NotFoundException('Task not found');
        this.tasks.splice(taskIndex, 1);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=task.service.js.map