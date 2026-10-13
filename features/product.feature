@product
Feature: Checkout and Shopping Cart

Background: 
	Given I navigate to the application login page

    @smoke
    Scenario: Successful login, product navigation and adding item to cart
    When I enter valid credentials and submit
    Then I should see the product catalog page
    When I select an item and click on "Add to Cart"