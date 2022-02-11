Feature: Verify user

    Verifying a perticular user is present

    Scenario: Verify User
    Given I perform a get request and check status
    And verify if the fist name is "Michael"
    And verify if the email is "lindsay.ferguson@reqres.in"