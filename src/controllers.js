export const applyControllers = (app, routeDefs) => {
    const routes = [];

    const parentRoutes = Object.keys(routeDefs);

    parentRoutes.forEach(route => {
        const element = routeDefs[route];
        const children = Object.keys(element);

        children.forEach(child => {
            const method = child;

            const routeInfo = {
                ...element[child],
                method,
                route: route + element[child].route,
            };

            routes.push(routeInfo);
        });
    });

    console.log({routes});
};

