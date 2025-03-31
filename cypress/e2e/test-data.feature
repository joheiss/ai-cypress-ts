Feature: Availability and correctness of test data

  Scenario: The test data for login testing is available and correct
    When I receive the test data in file "creds-test.json"
    Then I should see at least 2 lines

  Scenario: User signs in using valid credentials
    When I send "richtig@horsti.de" as a username and "richtig" as password
    Then I should see my credentials being accepted

  Scenario Outline: User signs in using invalid credentials
    When I send "<username>" as a username and "<password>" as password
    Then I should see my credentials being rejected with error message "Login attempt failed!"

    Examples:
      | username          | password |
      | richtig@horsti.de | falsch   |
      | falsch@horsti.de  | richtig  |
      | richtig@horsti.de |          |
      |                   | richtig  |
