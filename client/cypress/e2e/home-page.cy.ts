/// <reference types="cypress" />

describe('homepage interactivity', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="loginEmail"]').type('jorgemendoza2002@gmail.com');
    cy.get('[data-testid="loginPassword"]').type('Chopper!?1990');
    cy.get('[data-testid="loginButton"]').click();

    cy.get('[data-testid="homepageTab"]').as('homepageTab');
    cy.get('[data-testid="movieTab"]').as('movieTab');
    cy.get('[data-testid="showTab"]').as('showTab');
    cy.get('[data-testid="bookmarkedTab"]').as('bookmarkedTab');
    cy.get('[data-testid="userProfile"]').as('userProfile');
    cy.get('[data-testid="searchBar"]').as('searchBar');
  });

  it('trending section contains five pieces of content', () => {
    cy.get('[data-testid="trendingContent"]')
      .children()
      .should('have.length', 5);
  });

  it('recommended content contains 24 pieces of content', () => {
    cy.get('[data-testid="recommendedContent"]')
      .children()
      .should('have.length', 24);
  });

  it('search bar movies and shows', () => {
    cy.get('@searchBar').type('beyond earth');
    cy.get('[data-testid="searchResults]').children().should('have.length', 2);
    cy.get('[data-testid="searchResults]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', 'Beyond Earth');
        cy.wrap($el[1]).find('h3').should('contain.text', "Earth's Untouched");
      });
  });

  it('switch to movie tab ', () => {
    cy.get('@movieTab').click();
    cy.get('[data-testid="moviePage"]')
      .find('h1')
      .should('contain.text', 'Movies');
    cy.get('[data-testid="homePage"]').should('not.exist');
  });

  it.only('search for only movies', () => {
    cy.get('@movieTab').click();
    cy.get('@searchBar').should(
      'have.attr',
      'placeholder',
      'Search for movies'
    );
    cy.get('@searchBar').type('the diary');

    cy.get('[data-test="searchResults"]')
      .find('h2')
      .should('contain.text', 'No results found');

    cy.get('@searchBar').type('{selectAll}{backspace}1998');
    cy.get('[data-testid="searchResults"]').children().should('have.length', 1);
    cy.get('[data-testid="searchResults"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', '1998');
      });
  });

  it('switch to tv show tab', () => {
    cy.get('@showTab').click();
    cy.get('[data-testid="showPage"]')
      .find('h1')
      .should('contain.text', 'TV Series');
    cy.get('[data-testid="homePage"]').should('not.exist');
  });

  it('search for only tv shows', () => {
    cy.get('@showTab').click();
    cy.get('@searchBar').should(
      'have.attr',
      'placeholder',
      'Search for TV series'
    );
    cy.get('@searchBar').type('darker');

    cy.get('[data-testid="searchResults"]')
      .find('h2')
      .should('contain.text', 'No results found');

    cy.get('[data-testid="searchResults"]').children().should('have.length', 2);
    cy.get('[data-testid="searchResults"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', 'Darker');
      });
  });

  it('switch to bookmarked tab', () => {
    cy.get('@bookmarkTab').click();
    cy.get('@bookmarkTab')
      .find('h1')
      .should('contain.text', 'No bookmarked content');
  });

  it('bookmark content', () => {
    let contentTitle = '';

    cy.get('@movieTab').click();

    cy.get('[data-testid="moviesList"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button').click();
        cy.wrap($el[0])
          .find('h1')
          .then(($el) => {
            contentTitle = $el.text();
          });
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-testid="bookMarkedMovies"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-testid="bookMarkedMovies"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', contentTitle);
      });
  });

  it('search for only bookmarked content', () => {
    let contentMovieTitle = '';
    let contentShowTitle = '';

    cy.get('@movieTab').click();
    cy.get('[data-testid="moviesList"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button').click();
        cy.wrap($el[0])
          .find('h1')
          .then(($el) => {
            contentMovieTitle = $el.text();
          });
      });

    cy.get('@showTab').click();
    cy.get('[data-testid="showList"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button').click();
        cy.wrap($el[0])
          .find('h1')
          .then(($el) => {
            contentShowTitle = $el.text();
          });
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-testid="bookmarkedMovies"]')
      .children()
      .should('have.length', 2);
    cy.get('[data-testid="bookMarkedMovies"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', contentMovieTitle);
      });

    cy.get('[data-testid="bookmarkedShows"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-testid="bookMarkedShows"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('h3').should('contain.text', contentShowTitle);
      });
  });

  it('logout user', () => {
    cy.get('@userProfile').click();
    cy.get('[data-testid="logoutButton"]').click();

    cy.get('[data-testid="homePage"]').should('not.exist');
    cy.get('[data-testid="loginForm"]');
  });
});
