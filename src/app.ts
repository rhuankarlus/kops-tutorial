import { MongoClient } from 'mongodb';

import { initServer } from './core/server';
import Config from './config';

MongoClient.connect(Config.database.url, function(err, client) {
    if (err) {
        console.error('Error while trying to connect to the database');
        process.exit(1);
    }

    console.info("Connected successfully to database");
    console.info('Initializing app...');
    initServer();

    client.close();
});
