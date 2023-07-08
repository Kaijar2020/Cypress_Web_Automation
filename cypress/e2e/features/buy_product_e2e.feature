Feature: End to end testing to buy a product

    Background: Log in as a valid user 
        Given Open wbsite by hit url
        When Click on login button
        And type your email
        And type your password
        Then click on register button
        Then verify the text


    Scenario: Parcel Nokia Lumia cell phone
        Given Open the website by url
        When Select Electronics >Cell Phone 
        And click  Add to the cart
        Then verify the text Checkout

    Scenario: View the cart and remove product   
        Given go to the cart
        When click on ShopingCart
        And Go to the cart
        And Remove from cart
        Then verify the empty or not?