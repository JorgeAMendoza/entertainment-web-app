/// <reference types="cypress" />

describe('user login', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-cy="loginForm"]').as('loginForm');
    cy.get('[data-cy="loginEmail"]').as('loginEmail');
    cy.get('[data-cy="loginPassword"]').as('loginPassword');
    cy.get('[data-cy="loginButton"]').as('loginButton');
    cy.get('[data-cy="signUpLink"]').as('signUpLink');
  });

  it('valid login, redirected to home page', () => {
    cy.get('@loginEmail').type('jorgemendoza2002@gmail');
    cy.get('@loginPassword').type('Chopper!?1990');
    cy.get('@loginButton').click();

    cy.get('@loginForm').should('not.exist');
    cy.url().should('include', '/dashboard');
    cy.get('[data-cy="dashboard"]');
  });

  it('invalid login, email empty', () => {
    cy.get('@loginEmail').find('input').focus();
    cy.get('@loginPassword').find('input').focus();

    cy.get('@loginEmail')
      .get('[data-cy="loginMessage"]')
      .should('contain.text', "Can't Be Blank");
  });

  it('invalid login, invalid login', () => {
    cy.get('@loginEmail').type('jorgemendoza200@gmail.com');
    cy.get('@loginPassword').type('Chopper!?1990');
    cy.get('@loginButton').click();

    cy.get('[data-cy="loginError"]').should(
      'contain.text',
      'Invalid Email or Password'
    );
  });

  it('invalid login, password empty', () => {
    cy.get('@loginEmail').type('someuser1919@gmail.com');
    cy.get('@loginPassword').find('input').focus();
    cy.get('@loginEmail').find('input').focus();

    cy.get('@loginPassword')
      .get('[data-cy="loginMessage"]')
      .should('contain.text', "Can't Be Blank");
  });

  it('invalid login, incorrect password', () => {
    cy.get('@loginEmail').type('jorgemendoza2002@gmail.com');
    cy.get('@loginPassword').type('Chopper!1990');
    cy.get('@loginButton').click();

    cy.get('[data-cy="loginError"]').should(
      'contain.text',
      'Invalid email or password'
    );
  });
});
