"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoController = class TodoController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo) {
        return this.todoRepository.create(todo);
    }
    async count(where) {
        return this.todoRepository.count(where);
    }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async findToday() {
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        return this.todoRepository.find({
            where: {
                reminder: {
                    between: [
                        todayDate.toISOString(),
                        new Date(todayDate.setHours(23, 59, 0, 0)).toISOString()
                    ]
                }
            }
        });
    }
    async findWeek() {
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        return this.todoRepository.find({
            where: {
                reminder: {
                    between: [
                        todayDate.toISOString(),
                        new Date(todayDate.setDate(todayDate.getDate() - (todayDate.getDay() - 7))).toISOString()
                    ]
                }
            }
        });
    }
    async findMonth() {
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        return this.todoRepository.find({
            where: {
                reminder: {
                    between: [
                        todayDate.toISOString(),
                        new Date(todayDate.setMonth(todayDate.getMonth() + 1)).toISOString()
                    ]
                }
            }
        });
    }
    async updateAll(todo, where) {
        return this.todoRepository.updateAll(todo, where);
    }
    async findById(id) {
        return this.todoRepository.findById(id);
    }
    async updateById(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/todos', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, {
                    title: 'NewTodo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    rest_1.get('/todos/count', {
        responses: {
            '200': {
                description: 'Todo model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "count", null);
__decorate([
    rest_1.get('/todos', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Todo))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "find", null);
__decorate([
    rest_1.get('/todos/today', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findToday", null);
__decorate([
    rest_1.get('/todos/week', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findWeek", null);
__decorate([
    rest_1.get('/todos/month', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findMonth", null);
__decorate([
    rest_1.patch('/todos', {
        responses: {
            '200': {
                description: 'Todo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Todo, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/todos/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findById", null);
__decorate([
    rest_1.patch('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateById", null);
__decorate([
    rest_1.put('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteById", null);
TodoController = __decorate([
    __param(0, repository_1.repository(repositories_1.TodoRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map