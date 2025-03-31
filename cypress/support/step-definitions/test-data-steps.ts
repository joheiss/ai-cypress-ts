import { BeforeAll, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { IAM } from "../domain-objects/iam";
import { ValidationResult } from '../domain-objects/validation-result';
import { Credentials } from "../domain-objects/credentials";

const iam: IAM = new IAM();

When(`I receive the test data in file {string}`, (jsonFileName: string) => {
    cy.fixture(jsonFileName).then(data => cy.wrap(data).as("testData"));
});

Then(`I should see at least {int} lines`, (minLines: number) => {
    cy.get("@testData").should("have.lengthOf.at.least", minLines);
});

When(`I send {string} as a username and {string} as password`, (username: string, password: string) => {
    const credentials = { username, password };
    cy.wrap(credentials).as("credentials");
});

Then(`I should see my credentials being accepted`, () => {
    cy.get("@credentials").then((creds: any) => {
        const validationResult = iam.checkCredentials(creds);
        cy.wrap(validationResult).its("valid").should("be.true");
    });
});

Then(`I should see my credentials being rejected with error message {string}`, (errorMessage: string) => {
    cy.get("@credentials").then((creds: any) => {
        const validationResult = iam.checkCredentials(creds);
        cy.wrap(validationResult).its("valid").should("be.false");
        cy.wrap(validationResult).its("message").should("contain", errorMessage);
    });
})