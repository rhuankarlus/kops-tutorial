import { Request, ResponseToolkit } from "@hapi/hapi";
import { ObjectID } from 'mongodb';

import Services from '../../services';
import AppRoute from "./route.interface";

const TODOS_COLLECTIONS = 'todos';

class TodoListRoute implements AppRoute {
    static instance() {
        return new TodoListRoute();
    }

    getRoutes = () => ([{
        method: 'GET',
        path: '/todos',
        handler: async () => {
            const { dbConnection, db } = await Services.database.getDatabaseConnection();
            try {
                return db.collection(TODOS_COLLECTIONS).find().toArray();
            } finally {
                dbConnection.close();
            };
        }
    }, {
        method: 'GET',
        path: '/todos/{todoId}',
        handler: async ({ params: { todoId } }: Request, h: ResponseToolkit) => {
            const { dbConnection, db } = await Services.database.getDatabaseConnection();
            try {
                return db.collection(TODOS_COLLECTIONS).findOne({ _id: new ObjectID(todoId) });
            } finally {
                dbConnection.close();
            };
        }
    }, {
        method: 'PUT',
        path: '/todos',
        handler: async ({ payload }: Request) => {
            const { dbConnection, db } = await Services.database.getDatabaseConnection();
            try {
                const { ops: [insertedTodo] } = await db.collection(TODOS_COLLECTIONS).insertOne({
                    ...payload as object,
                    done: false,
                });
                return insertedTodo;
            } finally {
                dbConnection.close();
            }
        }
    }]);
}

export default TodoListRoute;
