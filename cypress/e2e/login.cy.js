import LoginPage from './pages/loginPage';
const loginPage = new LoginPage();

beforeEach(() => {
  // Visit the login page before each test
  loginPage.visit();
});

describe("Login Page Test", () => {
  // Test to verify elements are visible on the login page
  it("Navigate to the Swag Labs Login Page", () => {
    // Verify username, password inputs, and login button are visible
    loginPage.getUsernameInput().should('be.visible');
    loginPage.getPasswordInput().should('be.visible');
    loginPage.getLoginButton().should('be.visible');
    
    // Verify the Swag Labs logo is visible
    cy.get(".login_logo").should('be.visible');
  });

  // Test for correct login credentials
  it("Correct Login", () => {
    // Login with valid credentials
    loginPage.login('standard_user', 'secret_sauce');
    
    // Verify successful login by checking the URL
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  // Test for incorrect username
  it("Incorrect Username", () => {
    // Attempt login with incorrect username
    loginPage.login('wrong_user', 'secret_sauce');
    
    // Verify the URL remains on the login page
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });

  // Test for incorrect password
  it("Incorrect Password", () => {
    // Attempt login with incorrect password
    loginPage.login('standard_user', 'wrong-pass');
    
    // Verify the URL remains on the login page
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });

  // Test for login attempt with empty fields
  it("Login with Empty Fields", () => {
    // Attempt login without entering any credentials
    loginPage.getLoginButton().click();
    
    // Verify the URL remains on the login page
    cy.url().should('eq', 'https://www.saucedemo.com/');
    
    // Verify the error message is displayed for empty username
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Epic sadface: Username is required');
  });
});





// import LoginPage from './pages/loginPage';
// const loginPage = new LoginPage();


// beforeEach(() => {
//   loginPage.visit();
// });

// describe("Login Page Test", () => {
//   it("Navigate to the Swag Labs Login Page", () => {
//     loginPage.getUsernameInput().should('be.visible');
//     loginPage.getPasswordInput().should('be.visible');
//     loginPage.getLoginButton().should('be.visible');
//     cy.get(".login_logo").should('be.visible');
//   });

//   it("Correct Login", () => {
//     loginPage.login('standard_user', 'secret_sauce');
//     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
//   });

//   it("Incorrect UserName", () => {
//     loginPage.login('wrong_user', 'secret_sauce');
//     cy.url().should('eq', 'https://www.saucedemo.com/');
//   });

//   it("Incorrect Password", () => {
//     loginPage.login('standard_user', 'wrong-pass');
//     cy.url().should('eq', 'https://www.saucedemo.com/');
//   });

//   it("Login with Empty Fields", () => {
//     loginPage.getLoginButton().click();
//     cy.url().should('eq', 'https://www.saucedemo.com/');
//     loginPage.getErrorMessage().should('be.visible').and('contain', 'Epic sadface: Username is required');
//   });
// });

