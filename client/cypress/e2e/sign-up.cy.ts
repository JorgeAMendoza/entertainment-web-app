/// <reference types="cypress" />

describe.only('user signup', () => {
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

  it.only('valid sign up, directed to home screen', () => {
    cy.get('@signUpEmail').find('input').type('useremail01@gmail.com');
    cy.get('@signUpPassword').find('input').type('Luffy!?990');
    cy.get('@signUpName').find('input').type('Isabel Mendoza');
    cy.get('@signUpRepeatPassword').find('input').type('Luffy!?990');
    cy.get('@signUpButton').click();

    cy.get('[data-cy="dashboard"]');
    cy.get('@signUpForm').should('not.exist');
  });

  it.only('invalid signup, email input empty', () => {
    cy.get('@signUpEmail').find('input').focus().blur();
    cy.get('@signUpPassword').find('input').focus();

    cy.get('@signUpEmail')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', "Can't Be Blank");
  });

  it.only('invalid signup, invalid email format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002');
    cy.get('@signUpPassword').find('input').focus();

    cy.get('@signUpEmail')
      .find('[data-cy="errorMessage"]')
      .should('contain.text', 'Invalid Email');
  });

  it('invalid signup, empty password input', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').find('input').focus();
    cy.get('@signUpRepeatPassword').find('input').focus();

    cy.get('@signUpPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', "Can't Be Blank");
  });

  it('invalid signup, invalid password format', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy');
    cy.get('@signUpRepeatPassword').find('input').focus();

    cy.get('@signUpPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Invalid Password');
  });

  it('invalid sign up, passwords confirmation fails', () => {
    cy.get('@signUpEmail').type('isabelmendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword').type('Luffy!1990');

    cy.get('@signUpRepeatedPassword')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Passwords Do Not Match');
  });

  it('invalid sign up, account with email already exists', () => {
    cy.get('@signUpEmail').type('jorgemendoza2002@gmail.com');
    cy.get('@signUpPassword').type('Luffy!?1990');
    cy.get('@signUpRepeatPassword').type('Luffy!?1990');

    cy.get('@signUpButton').click();
    cy.get('[data-cy="signUpError"]').should(
      'contain.text',
      'User with this email already exist'
    );

    cy.get('@signUpEmail')
      .get('[data-cy="errorMessage"]')
      .should('contain.text', 'Email Is Taken');
  });

  it('user returns to login screen', () => {
    cy.get('@loginLink').click();

    cy.get('@signUpForm').should('not.exist');
    cy.get('[data-cy="loginForm"]');
  });
});
