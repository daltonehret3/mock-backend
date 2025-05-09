import fs from 'node:fs';
import yaml from 'js-yaml';

import {startServer} from './src/server.js';

const readYamlFile = () => {
    try {
        const fileContents = fs.readFileSync('./mock.yml', 'utf8');
        const data = yaml.load(fileContents);

        console.log(data);
    } catch (error) {
       console.log({error});
    }
};

//readYamlFile();
startServer({
    name: "test-mock-server",
    // yamlFile: your yaml file
}); 
