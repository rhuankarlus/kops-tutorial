import { initServer } from './core/server';
import Config from './config';

console.info({
    database: Config.database,
})

console.log('Initializing app...');
initServer();
