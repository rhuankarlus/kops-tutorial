import { Request, ResponseToolkit } from "@hapi/hapi";
import AppRoute from "./route.interface";

class HelloWorldRoute implements AppRoute {
    static instance() {
        return new HelloWorldRoute();
    }

    getRoutes = () => ({
        method: 'GET',
        path: '/hello',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'Hello World!';
        }
    });
}

export default HelloWorldRoute;
