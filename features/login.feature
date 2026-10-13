@login
Feature: Login flow

Background: 
	Given I navigate to the application login page

    @smoke
    Scenario: Successful login with valid credentials
    When I enter valid credentials and submit
    Then I should see the product catalog page

