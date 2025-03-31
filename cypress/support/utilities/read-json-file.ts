import * as fs from 'fs';

export function loadJsonFile<T>(filePath: string): T {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

console.log(loadJsonFile("./cypress/support/utilities/data.json"));
