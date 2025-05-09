import fs from 'node:fs';

import yaml from 'js-yaml';

export const readYamlFile = () => {
    try {
        const fileContents = fs.readFileSync('./mock.yml', 'utf8');
        const data = yaml.load(fileContents);

        console.log(data);
        return data;
    } catch (error) {
       console.log({error});
    }
};
