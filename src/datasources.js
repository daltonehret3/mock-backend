let datasources = {};

const applyDatasources = (incomingData) => {
    incomingData.forEach(source => {
        datasources[source] = []
    });
};

const getDatasources = () =>
    datasources;

export { applyDatasources, getDatasources };
