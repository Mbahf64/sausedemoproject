import LoginPage from './pages/loginPage';
import InventoryPage from './pages/inventoryPage';
import CheckoutPage from './pages/checkoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();

beforeEach(() => {
  // Visit the login page and log in before each test
  loginPage.visit();
  loginPage.login('standard_user', 'secret_sauce');
  cy.url().should('include', '/inventory.html');
});

// Helper function to add an item to the cart
function addItemToCart(itemName) {
  inventoryPage.getInventoryItem(itemName).click();
  cy.url().should('include', '/inventory-item.html');
  inventoryPage.getAddToCartButton().click();
}

// Helper function to verify cart contents and proceed to checkout
function proceedToCheckout(itemName, itemPrice) {
  inventoryPage.getShoppingCart().should('be.visible').and('contain', '1');
  inventoryPage.getShoppingCart().click();
  cy.url().should('include', '/cart.html');
  
  inventoryPage.getInventoryItem(itemName).should('contain', itemName);
  inventoryPage.getInventoryPrice(itemPrice).should('contain', itemPrice);

  inventoryPage.getCheckoutButton().click();
  cy.url().should('include', '/checkout-step-one.html');
}

describe('Checkout Test', () => {
  // Test for proceeding to the checkout page
  it('Proceed to Checkout', () => {
    addItemToCart('Sauce Labs Backpack');
    proceedToCheckout('Sauce Labs Backpack', '$29.99');
  });

  // Test for entering checkout information
  it('Enter Checkout Information', () => {
    addItemToCart('Sauce Labs Backpack');
    proceedToCheckout('Sauce Labs Backpack', '$29.99');

    // Enter checkout information
    checkoutPage.information('Favour', 'Mba', '500272');
    cy.url().should('include', '/checkout-step-two.html');
  });
});


https://github.com/Mbahf64/SauceDemoProject-