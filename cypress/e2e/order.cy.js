import LoginPage from './pages/loginPage';
import InventoryPage from './pages/inventoryPage';
import CheckoutPage from "./pages/checkoutPage";

// Create instances of the page objects
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();

// Before each test, visit the login page and log in with valid credentials
beforeEach(() => {
  loginPage.visit();
  loginPage.login('standard_user', 'secret_sauce');
  cy.url().should('include', '/inventory.html');
});

// Helper function to add an item to the cart
function addItemToCart(itemName, itemPrice) {
  inventoryPage.getInventoryItem(itemName).click();
  cy.url().should("include", "/inventory-item.html");
  inventoryPage.getAddToCartButton().click();

  inventoryPage.getShoppingCart().should("be.visible").and("contain", "1");
  inventoryPage.getShoppingCart().click();
  cy.url().should("include", "/cart.html");

  inventoryPage.getInventoryItem(itemName).should("contain", itemName);
  inventoryPage.getInventoryPrice(itemPrice).should("contain", itemPrice);

  inventoryPage.getCheckoutButton().click();
  cy.url().should("include", "/checkout-step-one.html");
}

// Helper function to complete checkout
function completeCheckout(firstName, lastName, postalCode) {
  checkoutPage.information(firstName, lastName, postalCode);
  cy.url().should("include", "/checkout-step-two.html");
  
  inventoryPage.getInventoryItem("Sauce Labs Backpack").should("be.visible");
  inventoryPage.getInventoryPrice("$29.99").should("be.visible");
}

describe("Order Test", () => {
  it("Verify Order Overview", () => {
    addItemToCart("Sauce Labs Backpack", "$29.99");
    completeCheckout("Favour", "Mba", "500272");
  });

  it("Complete Purchase", () => {
    addItemToCart("Sauce Labs Backpack", "$29.99");
    completeCheckout("Favour", "Mba", "500272");
    
    checkoutPage.getFinishButton().click();
    cy.url().should("include", "/checkout-complete.html");
    checkoutPage.getOrderConfirmation("Thank you for your order!").should("contain", "Thank you for your order!");
  });
});










// import LoginPage from './pages/loginPage';
// import InventoryPage from './pages/inventoryPage';
// import CheckoutPage from "./pages/checkoutPage";

// const loginPage = new LoginPage();
// const inventoryPage = new InventoryPage();
// const checkoutPage = new CheckoutPage();

// beforeEach(() => {
//   loginPage.visit();
//   loginPage.login('standard_user', 'secret_sauce');
//   cy.url().should('include', '/inventory.html');
// });

// describe("Order Test", () => {
//   it("Verify Order Overview", () => {
//     inventoryPage.getInventoryItem("Sauce Labs Backpack").click();
//     cy.url().should("include", "/inventory-item.html");
//     inventoryPage.getAddToCartButton().click();

//     inventoryPage.getShoppingCart().should("be.visible").and("contain", "1");
//     inventoryPage.getShoppingCart().click();
//     cy.url().should("include", "/cart.html");

//     inventoryPage
//       .getInventoryItem("Sauce Labs Backpack")
//       .should("contain", "Sauce Labs Backpack");
//     inventoryPage.getInventoryPrice("$29.99").should("contain", "$29.99");

//     inventoryPage.getCheckoutButton().click();
//     cy.url().should("include", "/checkout-step-one.html");

//     checkoutPage.information("Favour", "Mba", "500272");
//     cy.url().should("include", "/checkout-step-two.html");

//     inventoryPage.getInventoryItem("Sauce Labs Backpack").should("be.visible");
//     inventoryPage.getInventoryPrice("$29.99").should("be.visible");
//   });

  
//   it("Complete Purchase", () => {
//     inventoryPage.getInventoryItem("Sauce Labs Backpack").click();
//     cy.url().should("include", "/inventory-item.html");
//     inventoryPage.getAddToCartButton().click();

//     inventoryPage.getShoppingCart().should("be.visible").and("contain", "1");
//     inventoryPage.getShoppingCart().click();
//     cy.url().should("include", "/cart.html");

//     inventoryPage
//       .getInventoryItem("Sauce Labs Backpack")
//       .should("contain", "Sauce Labs Backpack");
//     inventoryPage.getInventoryPrice("$29.99").should("contain", "$29.99");

//     inventoryPage.getCheckoutButton().click();
//     cy.url().should("include", "/checkout-step-one.html");

//     checkoutPage.information("Favour", "Mba", "500272");
//     cy.url().should("include", "/checkout-step-two.html");

//     inventoryPage.getInventoryItem("Sauce Labs Backpack").should("be.visible");
//     inventoryPage.getInventoryPrice("$29.99").should("be.visible");

//     checkoutPage.getFinishButton().click();
//     cy.url().should("include", "/checkout-step-one.html");
//     checkoutPage.getOrderConfirmation("Thank you for your order!").should("contain", "Thank you for your order!");
//   });
// });
