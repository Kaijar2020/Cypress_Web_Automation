import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

/*===============================================
   Log in as a valid User
=================================================*/

Given("Open wbsite by hit url", () => {
   cy.visit(data.B_URL);
   cy.wait(data.oneSecond)
});

When("Click on login button",()=>{
   cy.xpath(locator.loGin).click()
   cy.wait(data.threeSecond)
});

When("type your email",()=>{

   cy.xpath(locator.emAil).type("abc@gmail.com")
   cy.wait(data.twoSecond)
   

});

When("type your password",()=>{
   cy.xpath(locator.pass).type("123456")
   cy.wait(data.twoSecond)
});

Then("click on register button",()=>{
   cy.xpath(locator.loginButton).click()
});

Then("verify the text",()=>{
   cy.xpath(locator.textVerify).should('have.text', 'Welcome to our store')
});

/*===============================================
   Log in as a invalid User
=================================================*/

Given("Open wbsite by using url", () => {
   cy.visit(data.B_URL);
   cy.wait(data.oneSecond)
});

When("Click on loginn button",()=>{
   cy.xpath(locator.loGin).click()
   cy.wait(data.threeSecond)
});

When("type a invalid email",()=>{

   cy.xpath(locator.emAil).type("ab@gmail.com")
   cy.wait(data.twoSecond)
   

});

When("type a invalid password",()=>{
   cy.xpath(locator.pass).type("1256")
   cy.wait(data.twoSecond)
});

Then("click on login button",()=>{
   cy.xpath(locator.loginButton).click()
});

Then("verify the error message",()=>{
   cy.xpath(locator.errorMessage).should('have.text', 'Login was unsuccessful. Please correct the errors and try again.No customer account found\n')
})

/*===============================================
   Add a product(cell phone) in the cart
=================================================*/

Given("Open the website by url",()=>{
   cy.visit(data.B_URL)
   cy.wait(data.oneSecond)
});

When("Select Electronics >Cell Phone",()=>{
   cy.xpath(locator.hoverOnElectronics).click()
   cy.wait(data.twoSecond)
   cy.xpath(locator.visitCellPhone).click()
});

When("click  Add to the cart",()=>{
   cy.xpath(locator.addToCartButton).click()
});

Then("verify the text Checkout",()=>{
   cy.xpath(locator.verifyCart).should('have.text','The product has been added to your shopping cart')
   cy.wait(data.oneSecond)
})

/*======================================================
   View the product(cell phone) from the cart and remove
========================================================*/

Given("go to the cart",()=>{
   cy.visit(data.B_URL)
   //cy.xpath(locator.viewCart).click()
});

When("click on ShopingCart",()=>{
   //cy.xpath(locator.viewCart).trigger("mouseover")
   cy.xpath(locator.viewCart).click()
   cy.wait(data.twoSecond)
});

When("Go to the cart",()=>{
   cy.wait(data.twoSecond)
   cy.xpath(locator.goToCart).click({force:true})
});
When("Remove from cart",()=>{
   cy.xpath(locator.removeFromCart).click()
   cy.wait(data.twoSecond)
});
Then("verify the empty or not?",()=>{
   cy.xpath(locator.cartEmptycheck).should('have.text','\nYour Shopping Cart is empty!\n')
})

/*======================================================
   View the product(cell phone) from the cart and remove
========================================================*/

Given("Go to the nopCommerce Website",()=>{
   cy.visit(data.B_URL)
});

When("Click on Searchbar and type keyword",()=>{
   cy.xpath(locator.searchMenu).click().type("laptop")
   cy.wait(data.twoSecond)
});

When("Hit the Search button",()=>{
   cy.xpath(locator.searchButton).click()
});

Then("Show and veridy your result",()=>{
   cy.wait(data.fourSecond)
});

