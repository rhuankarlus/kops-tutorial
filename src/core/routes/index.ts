import AppRoute from './route.interface';
import HelloWorldRoute from './hello-world.route';
import TodoListRoute from './todo.route';

const appRoutes: AppRoute[] = [
    HelloWorldRoute.instance(),
    TodoListRoute.instance(),
];

export default appRoutes.map(appRoute => appRoute.getRoutes()).flat();
