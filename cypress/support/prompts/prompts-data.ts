import { Prompt } from "./prompt";

export const prompts: {
  [key: string]: Prompt;
} = {
  "IAM use cases": {
    instructions:
      "You are a software test engineer and you prepare a testplan for the web pages of an IAM (Identity and Access Management) system",
    input: "Please prepare the testplan for the IAM web pages.",
  },
  "Gherkin scenarios for ContactUs form": {
    instructions: `
    Feature: Contact Us form functionality
    
    Write Gherkin scenarios for testing a Contact Us form with the following details:
    - The form contains input fields: 'First Name', 'Last Name', 'Email Address', and 'Comments'.
    - All fields are mandatory.
    - The 'SUBMIT' button submits the form.
    - The 'RESET' button clears all fields.
    - The email address must be valid and contain an '@' symbol.
    - A success message is displayed for valid submissions: 'Thank You for your Message'.
    - Error messages:
      - 'Error: Invalid email address'
      - 'Error: All fields are required'.
      `,
    input: `
    For each scenario:
    1. Start with 'Given I am on the Contact Us form.'
    2. Include explicit steps for filling fields, clicking buttons, and validating messages.
    
    Generate scenarios for:
    1. Valid form submission.
    2. Missing fields.
    3. Invalid email address.
    4. Using the 'RESET' button.

    Do not use code formatting tags like "gherkin". Output plain Gherkin syntax only.
    `,
  },
  "Gherkin scenario for API testing": {
    instructions: `
    Generate a Gherkin scenario for testing the {api_name} API. The scenarios should:
    - Be concise and focus only on the API status
    - Include minimal steps.
    - Base URL is: https://goal-tracker-api.onrender.com/
    - The end point is /status

    Example cases to consider:
    - Successful request; reponse will contain 'OPERATIONAL'
    `,
    input: `
    Do not use code formatting tags like "gherkin". Output plain Gherkin syntax only.
    `,
  },
};
