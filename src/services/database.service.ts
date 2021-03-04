import { MongoClient } from 'mongodb';

import Config from '../config';

const MAX_TRIES_TO_GET_CONNECTION = 3;

export const getDatabaseConnection = async () => {
    let tries = 1;
    let client = null;

    do {
        try {
            console.info('Trying to connect to the database.');
            client = await MongoClient.connect(Config.database.url, {
                auth: {
                    user: Config.database.username,
                    password: Config.database.password
                }
            });
        } catch(err) {
            console.error('Error while trying to connect to the database.');
            tries++;
        }
    } while(tries <= MAX_TRIES_TO_GET_CONNECTION && client === null);

    if (client === null) {
        console.error('Could not connect to the database.');
        process.exit(1);
    }

    return {
        dbConnection: client,
        db: client.db(Config.database.databaseName),
    };
};
