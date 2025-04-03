@openai
Feature: OpenAI is used to generate preliminary test artifacts.

  Scenario: Generate a preliminary test plan
    When I provide the prompt for "IAM use cases"
    # Then I can ask OpenAI and receive a response

  Scenario: Generate preliminary test cases
    When I provide the prompt for "Gherkin scenarios for ContactUs form"
    # Then I can ask OpenAI and receive a response

  Scenario: Generate preliminary test cases for an API and store it in a feature file
    When I provide the prompt for "Gherkin scenario for API testing"
    And I specify the API name "Goal Tracker API"
    # Then I can ask OpenAI and store the response in file "./test/output/openai_api.feature"
