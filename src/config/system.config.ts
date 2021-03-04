const { NODE_ENV } = process.env;

if (!NODE_ENV) {
    console.error('The environment was not provided')
    process.exit(1);
}

export default {
    env: NODE_ENV
};
