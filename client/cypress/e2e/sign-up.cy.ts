/// <reference types="cypress" />

describe('user signup', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.request({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      body: {
        operationName: 'Mutation',
        query: 'mutation Mutation {resetDb}',
      },
    });
    cy.get('[data-cy="toSignUpPage"]').click();
    cy.get('[data-cy="signUpForm"]').as('signUpForm');
    cy.get('[data-cy="signUpEmail"]').as('signUpEmail');
    cy.get('[data-cy="signUpName"]').as('signUpName');
    cy.get('[data-cy="signUpPassword"]').as('signUpPassword');
    cy.get('[data-cy="signUpRepeatPassword"]').as('signUpRepeatPassword');
    cy.get('[data-cy="signUpButton"]').as('signUpButton');
    cy.get('[data-cy="loginLink"]').as('loginLink');
  });

  it('valid sign up, directed to home screen', () => {
    cy.get('@signUpEmail').find('input').type('useremail01@gmail.com');
    cy.get('@signUpPassword').find('input').type('Luffy!?990');
    cy.get('@signUpName').find('input').type('Isabel Mendoza');
    cy.get('@signUpRepeatPassword').find('input').type('Luffy!?990');
    cy.get('@signUpButton').click();
    cy.url().should('include', '/dashboard');

    cy.get('[data-cy="dashboard"]');
    cy.get('@signUpForm').should('not.exist');
  });

  it('invalid signup, email input empty', () => {
    cy.get('@signUpEmail').find('input').focus().blur();
    cy.get('@signUpPassword').find('input').focus();

    cy.get('@signUpEmail')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', "Can't be blank");
  });

  it('invalid signup, invalid email format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002');
    cy.get('@signUpPassword').find('input').focus();

    cy.get('@signUpEmail')
      .find('[data-cy="errorMessage"]')
      .should('contain.text', 'Invalid email');
  });

  it('invalid signup, empty password input', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').find('input').focus();
    cy.get('@signUpRepeatPassword').find('input').focus();

    cy.get('@signUpPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', "Can't be blank");
  });

  it('invalid signup, invalid password format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy');
    cy.get('@signUpRepeatPassword').find('input').focus();

    cy.get('@signUpPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Invalid password');
  });

  it('invalid sign up, passwords confirmation fails', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword')
      .type('Luffy!1990')
      .find('input')
      .focus()
      .blur();

    cy.get('@signUpRepeatPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Passwords do not match');
  });

  it('invalid sign up, account with email already exists', () => {
    cy.get('@signUpEmail').type('jorgemendoza2002@gmail.com');
    cy.get('@signUpName').type('Jorge Mendoza');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword').type('Luffy!?1990');

    cy.get('@signUpButton').click();
    cy.get('[data-cy="signUpError"]').should(
      'contain.text',
      'account already exists, please use another email address'
    );

    cy.get('@signUpEmail')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Invalid email');
  });

  it('user returns to login screen', () => {
    cy.get('@loginLink').click();

    cy.get('@signUpForm').should('not.exist');
    cy.url().should('include', '/login');
    cy.get('[data-cy="loginForm"]');
  });
});
