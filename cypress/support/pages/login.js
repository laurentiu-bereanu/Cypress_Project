class Login {
  //Locators
  usernameInput = '#userName';
  loginButton = '[class*="loginBtn"]';

  //Text utils
  testUsername = 'Ban Ditu';

  //Methods
  login = (userName) => {
    cy.visit('/');
    cy.get(this.usernameInput).type(userName);
    cy.get(this.loginButton).click();
  };
}

export default new Login();
