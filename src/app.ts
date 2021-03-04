import { initServer } from './core/server';
import Services from './services';

Services.database.getDatabaseConnection().then(({ dbConnection }) => {
    console.info("Connected successfully to database");
    console.info('Initializing app...');
    initServer();

    dbConnection.close();
})
