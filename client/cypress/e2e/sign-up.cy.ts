/// <reference types="cypress" />
describe('user signup', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="toSignUpPage"]').click();
    cy.get('[data-testid="signUpForm"]').as('signUpForm');
    cy.get('[data-testid="signUpEmail"]').as('signUpEmail');
    cy.get('[data-testid="signUpName"]').as('signUpName');
    cy.get('[data-testid="signUpPassword"]').as('signUpPassword');
    cy.get('[data-testid="signUpRepeatPassword"]').as('signUpRepeatPassword');
    cy.get('[data-testid="signUpButton"]').as('signUpButton');
    cy.get('[data-testid="loginLink"]').as('loginLink');
  });

  it.only('valid sign up, directed to home screen', () => {
    cy.get('@signUpEmail').type('useremail01@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?990');
    cy.get('@signUpName').type('Isabel Mendoza');
    cy.get('@signUpRepeatPassword').type('Luffy!?990');
    cy.get('@signUpButton').click();

    cy.get('[data-testid="dashboard"]');
    cy.get('@signUpForm').should('not.exist');
  });

  it('invalid signup, email input empty', () => {
    cy.get('@signUpEmail').focus();
    cy.get('@signUpPassword').focus();

    cy.get('[data-testid="signUpEmailError"]').should(
      'contain.text',
      "Can't be empty"
    );
    cy.get('@signUpEmail').should('have.attr', 'data-formState', 'error');
  });

  it('invalid signup, invalid email format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002');
    cy.get('@signUpPassword').focus();

    cy.get('[data-testid="signUpEmailError"]').should(
      'contain.text',
      'Invalid email format'
    );
    cy.get('@signUpEmail').should('have.attr', 'data-formState', 'error');
  });

  it('invalid signup, empty password input', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').focus();
    cy.get('@signUpRepeatPassword').focus();

    cy.get('[data-testid="singUpPasswordError"]').should(
      'contain.text',
      "Can't be empty"
    );
    cy.get('@signUpPassword').should('have.attr', 'data-formState', 'error');
  });

  it('invalid signup, invalid password format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy');
    cy.get('@signUpRepeatPassword').focus();

    cy.get('[data-testid="signUpPasswordEmail"]').should(
      'contain.text',
      'Invalid password format'
    );
    cy.get('@signUpPassword').should('have.attr', 'data-formState', 'error');
  });

  it('invalid sign up, passwords confirmation fails', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword').type('Luffy!1990');

    cy.get('[data-testid="signUpRepeatPasswordError"]').should(
      'contain.text',
      'Passwords do not match'
    );
    cy.get('@signUpRepeatPassword').should(
      'have.attr',
      'data-formState',
      'error'
    );
  });

  it('invalid sign up, account with email already exists', () => {
    cy.get('@signUpEmail').type('jorgemendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword').type('Luffy!?1990');

    cy.get('@signUpButton').click();
    cy.get('[data-testid="signUpError"]').should(
      'contain.text',
      'User with this email already exist'
    );

    cy.get('@signUpEmail').should('have.attr', 'data-formState', 'error');
  });

  it('user returns to login screen', () => {
    cy.get('@loginLink').click();

    cy.get('@signUpForm').should('not.exist');
    cy.get('[data-testid="loginForm"]');
  });
});
