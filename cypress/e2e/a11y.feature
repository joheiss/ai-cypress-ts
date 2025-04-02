@a11y
Feature: Accessibility testing

  Background:
    Given I navigate to the page "https://example.cypress.io/"
    And I initialize the accessibility checks

  Scenario: Check accessibility for example page
    Then I see a page which fully conforms with accessibility rules

  Scenario: Check critical accessibility violations
    Then I find no critical accessibility violations

  Scenario: Check serious accessibility violations
    Then I find no serious accessibility violations
