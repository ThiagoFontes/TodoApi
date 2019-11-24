import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    title: string;
    description?: string;
    isDone: boolean;
    reminder?: string;
    priority?: string;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
