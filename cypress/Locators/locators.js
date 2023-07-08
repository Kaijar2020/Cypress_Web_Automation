class locatorsPage {

 //login page locator
  loGin = "//a[contains(text(),'Log in')]"
  emAil = "//input[@id='Email']"
  pass = "//input[@id='Password']"
  loginButton = "//button[normalize-space()='Log in']"
  errorMessage = "//div[contains(text(), 'Login was unsuccessful. Please correct the errors and try again.')]"
  textVerify = "//h2[normalize-space()='Welcome to our store']"


  //buy Nokia Lumia 1020 cellPhone 

  hoverOnElectronics = "(//a[normalize-space()='Electronics'])[1]"
  visitCellPhone = "//a[contains(text(),' Cell phones')]"
  selectProduct = "(//img[@title='Show details for Nokia Lumia 1020'])[2]"
  addToCartButton = "(//button[@type='button'][normalize-space()='Add to cart'])[3]"
  verifyCart = "(//p[@class='content'])[1]"
  viewCart = "(//span[@class='cart-label'])[1]"
  goToCart = "(//button[normalize-space()='Go to cart'])[1]"
  clickOnCheckOut = "(//button[normalize-space()='Checkout'])[1]"
  checkInBox = "//input[@id='termsofservice']"
  removeFromCart = "//button[@class='remove-btn']"
  cartEmptycheck = "(//div[@class='no-data'])[1]"

  //Search by keyword
  searchMenu = "(//input[@id='small-searchterms'])[1]"
  searchButton = "(//button[normalize-space()='Search'])[1]"

}
export default locatorsPage;



