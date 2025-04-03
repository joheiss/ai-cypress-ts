import OpenAI from "openai";
import { test, expect } from "@jest/globals";
import * as fs from "fs";
import { OpenAiHelper } from "../cypress/support/helpers/openai-helper";

test.skip("should return a response from OpenAI", async () => {
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    instructions:
      "You are a software test engineer and you prepare a testplan for the web pages of an IAM (Identity and Access Management) system",
    input: "Please prepare the testplan for the IAM web pages.",
  });

  console.log(response.output_text);
  expect(response.output_text.length).toBeGreaterThan(0);
  fs.writeFileSync("./test/output/openai_testplan.md", response.output_text);
}, 60000);

test.only("should return a completion response from OpenAI", async () => {
  const openAiHelper = new OpenAiHelper();
  const prompt = openAiHelper.getPromptByKey("IAM use cases");
  const reply = await openAiHelper.generateTextFromChat(prompt);

  console.log(reply);
  expect(reply.length).toBeGreaterThan(0);
}, 60000);
