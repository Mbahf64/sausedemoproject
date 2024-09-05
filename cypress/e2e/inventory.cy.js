import LoginPage from './pages/loginPage';
import InventoryPage from './pages/inventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

beforeEach(() => {
  // Visit login page and perform login before each test
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

// Helper function to verify cart and view items
function verifyCartItem(itemName, itemPrice) {
  inventoryPage.getShoppingCart().should('be.visible').and('contain', '1');
  inventoryPage.getShoppingCart().click();
  cy.url().should('include', '/cart.html');
  inventoryPage.getInventoryItem(itemName).should('contain', itemName);
  inventoryPage.getInventoryPrice(itemPrice).should('contain', itemPrice);
}

describe("Inventory Page Test", () => {
  // Test for adding an item to the cart
  it("Add Item to Cart", () => {
    addItemToCart('Sauce Labs Backpack');
    inventoryPage.getShoppingCart().should('be.visible').and('contain', '1');
  });

  // Test for removing an item from the cart
  it("Remove Item from Cart", () => {
    addItemToCart('Sauce Labs Backpack');
    inventoryPage.getRemoveButton().click();
    inventoryPage.getShoppingCart().should('be.visible').and('not.contain', '1');
  });

  // Test for viewing the cart and verifying the item details
  it("View Cart and Verify Item", () => {
    addItemToCart('Sauce Labs Backpack');
    verifyCartItem('Sauce Labs Backpack', '$29.99');
  });
});
