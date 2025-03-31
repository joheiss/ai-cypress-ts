import { test, expect } from "@jest/globals";
import { getTodo } from "../cypress/support/utilities/rest-api-request";

test("Should get a todo from the REST API", async () => {
    const todo = await getTodo(1);
    expect(todo).toHaveProperty("userId", 1);
});