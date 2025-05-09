import http from 'node:http';

import express from 'express';

import {readYamlFile} from './read-yaml.js';
import {applyControllers} from './controllers.js';

export const startServer = (options = {}) => {
    const {
        port = 3000,
        name,
        yamlRoute = './mock.yml',
    } = options;

    const app = express();

    app.disable('x-powered-by');

    const httpServer = http.createServer(app);

    const routes = readYamlFile(yamlRoute); 

    console.log({models: JSON.stringify(routes.models)});
    applyControllers(app, routes.rest);

    const server = httpServer.listen(port, () => {
        console.log(`${name} running on port ${port}`);
    });

    // Graceful shutdown
    process.on('_', () => {
        server.close();
    });

    return server;
};
