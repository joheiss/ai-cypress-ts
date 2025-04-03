Feature: Contact Us form functionality

Scenario: Valid form submission
  Given I am on the Contact Us form
  When I enter "John" into the "First Name" field
  And I enter "Doe" into the "Last Name" field
  And I enter "john.doe@example.com" into the "Email Address" field
  And I enter "I am interested in your services" into the "Comments" field
  And I click the "SUBMIT" button
  Then I should see a message saying "Thank You for your Message"

Scenario: Missing fields
  Given I am on the Contact Us form
  When I enter "John" into the "First Name" field
  And I enter "Doe" into the "Last Name" field
  And I leave the "Email Address" field empty
  And I enter "I need more information" into the "Comments" field
  And I click the "SUBMIT" button
  Then I should see a message saying "Error: All fields are required"

Scenario: Invalid email address
  Given I am on the Contact Us form
  When I enter "John" into the "First Name" field
  And I enter "Doe" into the "Last Name" field
  And I enter "johndoemail.com" into the "Email Address" field
  And I enter "Please contact me soon" into the "Comments" field
  And I click the "SUBMIT" button
  Then I should see a message saying "Error: Invalid email address"

Scenario: Using the 'RESET' button
  Given I am on the Contact Us form
  When I enter "John" into the "First Name" field
  And I enter "Doe" into the "Last Name" field
  And I enter "john.doe@example.com" into the "Email Address" field
  And I enter "This is a test message" into the "Comments" field
  And I click the "RESET" button
  Then all the fields should be empty