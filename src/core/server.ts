import { Server } from "@hapi/hapi";

import routes from './routes';

export const initServer = async () => {
    const server: Server = new Server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
