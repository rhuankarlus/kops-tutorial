const {
    DATABASE_HOSTNAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_PORT,
    DATABASE_DB,
} = process.env;

export default {
    hostname: DATABASE_HOSTNAME,
    database: DATABASE_DB,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    port: DATABASE_PORT
};
