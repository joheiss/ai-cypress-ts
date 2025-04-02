import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ExamplePage } from "../pages/example-page";


const examplePage = new ExamplePage();

Given(`I navigate to the page {string}`, (url:string) => {
  cy.visit(url);
});

Given(`I navigate to the example page`, () => {
    examplePage.navigateToExamplePage();
});

Then(`I should get a page with title containing {string}`, (title: string) => {
    examplePage.checkTitle(title);
});