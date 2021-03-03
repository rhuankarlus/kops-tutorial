import { ServerRoute } from '@hapi/hapi';

interface AppRoute {
    getRoutes(): ServerRoute | ServerRoute[];
}

export default AppRoute;
