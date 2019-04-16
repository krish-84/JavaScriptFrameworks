Feature: The home page login
	As a customer
	I want to login on the home page

Background:
	Given I open the home page

Scenario: Test the Title on the home page
	Then I expect to be on the home page

Scenario: Test the Title on the home page
	When I click the New In button
	Then I expect to be on the product page

