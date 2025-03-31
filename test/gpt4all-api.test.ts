import { createCompletion, loadModel } from "gpt4all";
import { test, expect } from "@jest/globals";
import * as fs from "fs";

test.only("should return a response from OpenAI", async () => {
  const url = "http://localhost:4891/v1/chat/completions";
  const payload = {
    model: "Llama 3 8B Instruct",
    messages: [
      {
        role: "user",
        content: "What is Chat-GPT?",
      },
    ],
  };
  const response = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => {
    console.log("*** Response from GPT4ALL");
    console.log(res);
    expect(res.status).toBe(200);
    return res.json();
  });

  console.log(response);
  expect(response).toBeDefined();
  expect(response.choices[0].message).toBeDefined();
  console.log(response.choices[0].message);
  expect(response.choices[0].message.content.length).toBeGreaterThan(0);
  console.log(response.choices[0].message.content);
  // expect(result.content.length).toBeGreaterThan(0);
  // fs.writeFileSync("./test/output/gpt4all_output.md", result.content);
}, 30000);
