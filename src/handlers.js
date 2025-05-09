import {getDatasources} from './datasources.js';

export const applyHandlers = (request, response, routeDatasource) => {
    const datasources = getDatasources();

    const {method} = request;

    console.log({datasources});
    console.log({routeDatasource});

    if (method === 'GET') {
        if (request.params?.id) {
            const found = datasources[routeDatasource].find(data => data.id === request.params.id);

            if (found) {
                return response.json({
                    status: 200,
                    data: found
                });
            }
            response.status(404).send(`${routeDatasource} with id ${request.params.id} Not Found`); 
        }
    }
};

