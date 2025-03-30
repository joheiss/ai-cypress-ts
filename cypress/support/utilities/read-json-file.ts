import * as fs from 'fs';
import * as path from 'path';

const jsonData = JSON.parse(fs.readFileSync("./cypress/support/utilities/data.json", 'utf8'));

console.log(jsonData);
