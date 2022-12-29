/// <reference types="cypress" />

describe('homepage interactivity', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.request({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      body: {
        operationName: 'Mutation',
        query: 'mutation Mutation {resetDb}',
      },
    });
    cy.get('[data-cy="loginEmail"]').type('jorgemendoza2002@gmail.com');
    cy.get('[data-cy="loginPassword"]').type('Chopper!?990');
    cy.get('[data-cy="loginButton"]').click();
    cy.url().should('include', '/dashboard');

    cy.get('[data-cy="homepageTab"]').as('homepageTab');
    cy.get('[data-cy="movieTab"]').as('movieTab');
    cy.get('[data-cy="showTab"]').as('showTab');
    cy.get('[data-cy="bookmarkedTab"]').as('bookmarkedTab');
    cy.get('[data-cy="userProfile"]').as('userProfile');
    cy.get('[data-cy="searchBar"]').as('searchBar');
  });

  it('trending section contains five pieces of content', () => {
    cy.get('[data-cy="trendingContent"]').children().should('have.length', 5);
  });

  it('recommended content contains 2 pieces of content', () => {
    cy.get('[data-cy="recommendedContent"]')
      .children()
      .should('have.length', 2);
  });

  it('search bar movies and shows', () => {
    cy.get('@searchBar').type('earth');
    cy.get('[data-cy="searchResults"]').children().should('have.length', 1);
    cy.get('[data-cy="searchResults"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h4').should('contain.text', 'Beyond Earth');
      });
  });

  it('switch to movie tab ', () => {
    cy.get('@movieTab').click();
    cy.url().should('include', '/dashboard/movies');
    cy.get('[data-cy="moviePage"]').find('h1').should('contain.text', 'Movies');
    cy.get('[data-cy="homePage"]').should('not.exist');
  });

  it('search for only movies, no results found', () => {
    cy.get('@movieTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for movies');
    cy.get('@searchBar').type('the diary');

    cy.get('h2').should('contain.text', "Found 0 results for 'the diary'");
  });

  it('search for only movies, results found', () => {
    cy.get('@movieTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for movies');

    cy.get('@searchBar').type('the diary');
    cy.get('@searchBar').type('{selectAll}{backspace}1998');
    cy.get('[data-cy="searchResults"]').children().should('have.length', 1);
    cy.get('[data-cy="searchResults"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h4').should('contain.text', '1998');
      });
  });

  it('switch to tv show tab', () => {
    cy.get('@showTab').click();
    cy.url().should('include', '/dashboard/shows');
    cy.get('[data-cy="showPage"]')
      .find('h1')
      .should('contain.text', 'TV Series');
    cy.get('[data-cy="homePage"]').should('not.exist');
  });

  it('search for only tv shows, no results found', () => {
    cy.get('@showTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for TV shows');
    cy.get('@searchBar').type('darker');

    cy.get('h2').should('contain.text', "Found 0 results for 'darker'");
  });

  it('search for only tv shows, results returned', () => {
    cy.get('@showTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for TV shows');
    cy.get('@searchBar').type('diary');

    cy.get('[data-cy="searchResults"]').children().should('have.length', 1);
    cy.get('[data-cy="searchResults"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h4').should('contain.text', 'The Diary');
      });
  });

  it('switch to bookmarked tab', () => {
    cy.get('@bookmarkedTab').click();
    cy.url().should('include', '/dashboard/my-stuff');
    cy.get('[data-cy="bookmarkPage"]');
  });

  it('bookmark movie content', () => {
    cy.get('@movieTab').click();

    cy.get('[data-cy="moviesList"]')
      .find('figure:first-child')
      .find('button:first-of-type')
      .click();

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('figure:first-of-type')
      .find('h4')
      .should('contain.text', 'Beyond Earth');
  });

  it('bookmark show content', () => {
    cy.get('@showTab').click();

    cy.get('[data-cy="showList"]')
      .find('figure:first-child')
      .find('button:first-of-type')
      .click();

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedShows"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .find('figure:first-of-type')
      .find('h4')
      .should('contain.text', 'Undiscovered Cities');
  });

  it('unbookmark movie content', () => {
    cy.get('@movieTab').click();

    cy.get('[data-cy="moviesList"]')
      .find('figure:first-child')
      .find('button:first-of-type')
      .click();

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('figure:first-of-type')
      .find('h4')
      .should('contain.text', 'Beyond Earth');

    cy.get('[data-cy="bookmarkedMovies"]')
      .find('figure:first-of-type')
      .find('button:first-of-type')
      .click();

    cy.get('[data-cy="bookmarkedMovies"]').should('not.exist');
  });

  it('unbookmark show content', () => {
    cy.get('@showTab').click();

    cy.get('[data-cy="showList"]')
      .find('figure:first-child')
      .find('button:first-of-type')
      .click();

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedShows"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .find('figure:first-of-type')
      .find('h4')
      .should('contain.text', 'Undiscovered Cities');

    cy.get('[data-cy="bookmarkedShows"]')
      .find('figure:first-of-type')
      .find('button:first-of-type')
      .click();

    cy.get('[data-cy="bookmarkedShows"]').should('not.exist');
  });

  it('search for only bookmarked content', () => {
    let contentMovieTitle = '';
    let contentShowTitle = '';

    cy.get('@movieTab').click();
    cy.get('[data-cy="moviesList"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button:first-of-type').click();
        cy.wrap($el[0])
          .find('h4')
          .then(($el) => {
            contentMovieTitle = $el.text();
          });
      });

    cy.get('@showTab').click();
    cy.get('[data-cy="showList"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button:first-of-type').click();
        cy.wrap($el[0])
          .find('h4')
          .then(($el) => {
            contentShowTitle = $el.text();
          });
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h4').should('contain.text', contentMovieTitle);
      });

    cy.get('[data-cy="bookmarkedShows"]').children().should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h4').should('contain.text', contentShowTitle);
      });
  });

  it.skip('logout user', () => {
    cy.get('@userProfile').click();
    cy.get('[data-cy="logoutButton"]').click();
    cy.url().should('include', '/login');

    cy.get('[data-cy="homePage"]').should('not.exist');
    cy.get('[data-cy="loginForm"]');
    cy.get('[data-cy="loginMessage"]').should(
      'contain.text',
      'You have been succesfully logged out'
    );
  });
});

describe('login bypass', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
    cy.get('[data-cy="logoutModal"]').as('logoutModal');
    cy.get('[data-cy="loginLink"]').as('loginLink');
  });

  it('navigate to dashboard without being authenticated', () => {
    cy.get('@logoutModal')
      .find('h3')
      .should('contain.text', 'You are not signed in');

    cy.get('@loginLink').click();
    cy.url().should('include', '/login');
  });
});
