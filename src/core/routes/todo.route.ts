import { Request, ResponseToolkit } from "@hapi/hapi";

import AppRoute from "./route.interface";

class TodoListRoute implements AppRoute {
    static instance() {
        return new TodoListRoute();
    }

    getRoutes = () => ([{
        method: 'GET',
        path: '/todos',
        handler: async ({ logger }: Request, h: ResponseToolkit) => {
            logger.info('Searching all Todos on the database');
            return 'Hello World!';
        }
    }, {
        method: 'GET',
        path: '/todos/{todoId}',
        handler: async ({ logger, params: { todoId } }: Request, h: ResponseToolkit) => {
            logger.info('Searching [%s] on the database', todoId);
            return 'Hello World!';
        }
    }, {
        method: 'PUT',
        path: '/todos',
        handler: async (request: Request, h: ResponseToolkit) => {
            request.logger.info('[%s]: Handling request.', request.path)
            return 'Hello World!';
        }
    }]);
}

export default TodoListRoute;
