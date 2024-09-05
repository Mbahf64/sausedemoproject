class InventoryPage {
    getInventoryItem(name) {
      return cy.contains(name);
    }

    getInventoryPrice(price) {
      return cy.contains(price);
    }
  
    getAddToCartButton() {
      return cy.get("button[id*='add-to-cart']");
    }
  
    getRemoveButton() {
      return cy.get("button[id*='remove']");
    }
  
    getShoppingCart() {
      return cy.get("div[class='shopping_cart_container']");
    }
    getShoppingCart() {
      return cy.get("div[class='shopping_cart_container']");
    }

    getCheckoutButton() {
      return cy.get("#checkout");
    }
  }
  
  export default InventoryPage;
  