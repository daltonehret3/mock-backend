import {applyHandlers} from './handlers.js';
import {applyDatasources} from './datasources.js';

export const applyControllers = (app, routeDefs) => {
    const routes = [];
    const dataSources= [];
    const parentRoutes = Object.keys(routeDefs);

    parentRoutes.forEach(route => {
        const element = routeDefs[route];
        const children = Object.keys(element);

        children.forEach(child => {
            const method = child;

            const routeInfo = {
                ...element[child],
                method,
                datasource: route,
                route: route + element[child].route,
            };
            
            routes.push(routeInfo);

            if (!dataSources.find(source => source === route)) {
                dataSources.push(route);
            }
        });
    });

    applyDatasources(dataSources);

    routes.forEach(route => {
        const method = route.method.toLowerCase();

        app[method](
            `/${route.route}`,
            (req, res) => applyHandlers(req, res, route.datasource),
            // (req, resp) => {console.log({param: req.params.id}); return resp.json({status: 200});},
        );
    });
};

