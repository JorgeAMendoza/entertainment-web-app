/// <reference types="cypress" />

describe('user login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="loginForm"]').as('loginForm');
    cy.get('[data-testid="loginEmail"]').as('loginEmail');
    cy.get('[data-testid="loginPassword"]').as('loginPassword');
    cy.get('[data-testid="loginButton"]').as('loginButton');
    cy.get('[data-testid="signUpLink"]').as('signUpLink');
  });

  it('valid login, redirected to home page', () => {
    cy.get('@loginEmail').type('jorgemendoza2002@gmail');
    cy.get('@loginPassword').type('Chopper!?1990');
    cy.get('@loginButton').click();

    cy.get('@loginForm').should('not.exist');
    cy.get('[data-testid="homePage"]');
  });

  it('invalid login, email empty', () => {
    cy.get('@loginEmail').focus();
    cy.get('@loginPassword').focus();

    cy.get('[data-testid="loginEmailError"]').should(
      'contain.text',
      "Can't be empty"
    );
    cy.get('@loginEmail').should('have.attr', 'data-formState', 'error');
  });

  it('invalid login, invalid email', () => {
    cy.get('@loginEmail').type('jorgemendoza200@gmail.com');
    cy.get('@loginPassword').type('Chopper!?1990');
    cy.get('@loginButton').click();

    cy.get('[data-testid="loginError"]').should(
      'contain.text',
      'Invalid email or password'
    );
    cy.get('@loginEmail').should('have.attr', 'data-formState', 'error');
    cy.get('@loginPassword').should('have.attr', 'data-formState', 'error');
  });

  it('invalid login, password empty', () => {
    cy.get('@loginEmail').type('someuser1919@gmail.com');
    cy.get('@loginPassword').focus();
    cy.get('@loginEmail').focus();

    cy.get('[data-testid="loginPasswordError"]').should(
      'contain.text',
      "Can't be empty"
    );
    cy.get('@loginPassword').should('have.attr', 'data-formState', 'error');
  });

  it('invalid login, incorrect password', () => {
    cy.get('@loginEmail').type('jorgemendoza2002@gmail.com');
    cy.get('@loginPassword').type('Chopper!1990');
    cy.get('@loginButton').click();

    cy.get('[data-testid="loginError"]').should(
      'contain.text',
      'Invalid email or password'
    );
    cy.get('@loginEmail').should('have.attr', 'data-formState', 'error');
    cy.get('@loginPassword').should('have.attr', 'data-formState', 'error');
  });
});
