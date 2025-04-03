import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { Prompt } from "./cypress/support/prompts/prompt";
import { OpenAiHelper } from "./cypress/support/helpers/openai-helper";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // handle environment variables
      const apiKey = process.env.OPENAI_API_KEY;
      config.env.openAiApiKey = apiKey;
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        },
        askOpenAI(prompt: Prompt) {
          const openAiHelper = new OpenAiHelper(process.env.OPENAI_API_KEY);
          return openAiHelper.generateText(prompt);
        },
      });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
