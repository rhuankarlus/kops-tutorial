const {
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_DB,
    DATABASE_URL
} = process.env;

if (!DATABASE_USERNAME) {
    console.error('The database username was not found.')
    process.exit(1);
}

if (!DATABASE_PASSWORD) {
    console.error('The database password was not found.')
    process.exit(1);
}

if (!DATABASE_DB) {
    console.error('The database name was not found.')
    process.exit(1);
}

if (!DATABASE_URL) {
    console.error('The database URL was not found.')
    process.exit(1);
}

export default {
    databaseName: DATABASE_DB,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    url: DATABASE_URL
};
