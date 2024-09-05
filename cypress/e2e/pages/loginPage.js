class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  getUsernameInput() {
    return cy.get("input[id='user-name']");
  }

  getPasswordInput() {
    return cy.get("input[id='password']");
  }

  getLoginButton() {
    return cy.get("input[id='login-button']");
  }

  getErrorMessage() {
    return cy.get("div[class='error-message-container error']");
  }

  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}

export default LoginPage;
