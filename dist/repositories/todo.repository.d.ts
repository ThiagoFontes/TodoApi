import { DefaultCrudRepository } from '@loopback/repository';
import { Todo, TodoRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: DbDataSource);
}
