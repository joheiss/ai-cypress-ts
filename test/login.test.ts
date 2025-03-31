import { loadJsonFile } from "../cypress/support/utilities/read-json-file";
import { test } from "@jest/globals";

test("Should accept correct credentials and reject invalid credentials", () => {
    const creds = loadJsonFile<Credential[]>("./cypress/fixtures/creds-test.json");

    for (const credential of creds) {

    }
});