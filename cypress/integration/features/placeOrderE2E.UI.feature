Feature: Place an Order @myStore online shopping website

    I want to be able to add 2 items to the cart and place an order

    @smoke
    Scenario: Purchase 2 items and place the order
        Given I open mystore page
        And select product
        |productName|
        |Faded Short Sleeve T-shirts|
        |Blouse|
        Then navigate to checkout

