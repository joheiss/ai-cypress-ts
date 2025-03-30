Feature: Basic functions

  Scenario: Test example.cypress.io page
    Given I navigate to the example page
    Then I should get a page with title containing "Kitchen Sink"
