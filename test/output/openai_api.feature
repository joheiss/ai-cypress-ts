Feature: Check Goal Tracker API Status

  Scenario: Successful API status request
    Given the Goal Tracker API is available
    When I send a GET request to "https://goal-tracker-api.onrender.com/api/v1/status"
    Then the response should be 200
    And the response body should contain "OPERATIONAL"
