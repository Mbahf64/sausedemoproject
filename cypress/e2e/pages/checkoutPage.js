class CheckoutPage {
    getFirstName() {
        return cy.get("input[id='first-name']");
      }
    
      getLastName() {
        return cy.get("input[id='last-name']");
      }

      getPostalCode() {
        return cy.get("input[id='postal-code']");
      }
    
      getContinueButton() {
        return cy.get("input[id='continue']");
      }

      getFinishButton() {
        return cy.get("button[id='finish']");
      }

      getOrderConfirmation(confirmation) {
        return cy.contains(confirmation);
      }

    

      information(firstName, lastName, postalCode) {
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getPostalCode().type(postalCode);
        this.getContinueButton().click();
      }
  }
  
  export default CheckoutPage;
  