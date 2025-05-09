import fs from 'node:fs';

import yaml from 'js-yaml';

export const readYamlFile = (yamlRoute) => {
    try {
        const fileContents = fs.readFileSync(yamlRoute, 'utf8');
        const data = yaml.load(fileContents);

        console.log(data);
        return data;
    } catch (error) {
       console.log({error});
    }
};
