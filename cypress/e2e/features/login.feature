Feature: Automate the nopCommerce Website


Scenario: Log in as a valid user 
    Given Open wbsite by hit url
    When Click on login button
    And type your email
    And type your password
    Then click on register button
    Then verify the text

    
Scenario: Log in as a invalid user 
    Given Open wbsite by using url
    When Click on loginn button
    And type a invalid email
    And type a invalid password
    Then click on login button
    Then verify the error message

