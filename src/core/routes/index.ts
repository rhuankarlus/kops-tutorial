import AppRoute from './route.interface';
import HelloWorldRoute from './hello-world.route';

const appRoutes: AppRoute[] = [
    HelloWorldRoute.instance(),
];

export default appRoutes.map(appRoute => appRoute.getRoutes()).flat();
