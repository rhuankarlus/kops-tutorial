import { Server } from "@hapi/hapi";
import HapiPino from 'hapi-pino';

import Config from '../config';
import routes from './routes';

export const initServer = async () => {
    const server: Server = new Server({
        port: 3000
    });

    await server.register({
        plugin: HapiPino,
        options: {
          prettyPrint: Config.system.env !== 'production',
          redact: ['req.headers.authorization']
        }
    });

    server.route(routes);
    await server.start();
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
