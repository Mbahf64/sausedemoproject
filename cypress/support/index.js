Cypress.Server.defaults({
    ignore: (xhr) => {
      // Ignore all fetch and XHR requests
      return true;
    }
  });