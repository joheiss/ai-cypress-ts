import { Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import { OpenAiHelper } from "../helpers/openai-helper";
import { Prompt } from "../prompts/prompt";

let openAiHelper: OpenAiHelper;

Before({ tags: "@openai and not @ignore" }, () => {
  openAiHelper = new OpenAiHelper(Cypress.env("openAiApiKey"));
});

When(`I provide the prompt for {string}`, (promptKey: string) => {
  cy.wrap(openAiHelper.getPromptByKey(promptKey))
    .as("prompt")
    .should("not.be.empty");
});

When(`I specify the API name {string}`, (apiName: string) => {
  cy.get<Prompt>("@prompt").then((prompt) => {
    prompt.instructions = prompt.instructions.replaceAll("{api_name}", apiName);
  });
});

Then(`I can ask OpenAI and receive a response`, () => {
  cy.get<Prompt>("@prompt", { timeout: 60000 }).then((prompt) => {
    cy.task("askOpenAI", prompt).then((response: string) => {
      expect(response).not.empty;
      // console.log("write result to file");
      // cy.writeFile("./test/output/openai_contactus.feature", response);
    });
    // openAiHelper.generateText(prompt).then((response) => {
    //   expect(response).not.empty;
    //   cy.wrap(response).as("openai-response");
    //   cy.wait("@openai-response");
    //   cy.get("@openai-response").should("not.be.empty");
    //   cy.log("write result to file");
    //   console.log("write result to file");
    //   cy.writeFile("openai_contactus.feature", response);
    // });
  });
});

Then(
  `I can ask OpenAI and store the response in file {string}`,
  (filePath: string) => {
    cy.get<Prompt>("@prompt", { timeout: 60000 }).then((prompt) => {
      cy.task("askOpenAI", prompt).then((response: string) => {
        expect(response).not.empty;
        cy.writeFile(filePath, response);
      });
    });
  }
);
