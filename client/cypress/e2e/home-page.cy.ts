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
    cy.get('[data-cy="contentContainer"]').children().should('have.length', 2);
  });

  it('search bar movies and shows', () => {
    cy.get('@searchBar').type('earth');
    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .should('contain', 'Beyond Earth');
  });

  it('switch to movie tab ', () => {
    cy.get('@movieTab').click();
    cy.url().should('include', '/dashboard/movies');
    cy.get('[data-cy="moviePage"]')
      .find('[data-cy="contentTitle"]')
      .should('contain.text', 'Movies');
    cy.get('[data-cy="homePage"]').should('not.exist');
  });

  it('search for only movies, no results found', () => {
    cy.get('@movieTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for movies');
    cy.get('@searchBar').type('the diary');

    cy.get('[data-cy="contentTitle"]').should(
      'contain.text',
      "Found 0 results for 'the diary'"
    );
  });

  it('search for only movies, results found', () => {
    cy.get('@movieTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for movies');

    cy.get('@searchBar').type('{selectAll}{backspace}1998');
    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('contain.text', '1998');
  });

  it('switch to tv show tab', () => {
    cy.get('@showTab').click();
    cy.url().should('include', '/dashboard/shows');
    cy.get('[data-cy="showPage"]')
      .find('[data-cy="contentTitle"]')
      .should('contain.text', 'TV Series');
    cy.get('[data-cy="homePage"]').should('not.exist');
  });

  it('search for only tv shows, no results found', () => {
    cy.get('@showTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for TV shows');
    cy.get('@searchBar').type('darker');

    cy.get('[data-cy="contentTitle"]').should(
      'contain.text',
      "Found 0 results for 'darker'"
    );
  });

  it('search for only tv shows, results returned', () => {
    cy.get('@showTab').click();
    cy.get('@searchBar')
      .find('input')
      .should('have.attr', 'placeholder', 'Search for TV shows');
    cy.get('@searchBar').type('diary');

    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy="searchResults"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('contain.text', 'The Diary');
  });

  it('switch to bookmarked tab', () => {
    cy.get('@bookmarkedTab').click();
    cy.url().should('include', '/dashboard/my-stuff');
    cy.get('[data-cy="bookmarkPage"]');
  });

  it('no bookmarks, no bookmark message rendered', () => {
    cy.get('@bookmarkedTab').click();
    cy.url().should('include', '/dashboard/my-stuff');
    cy.get('[data-cy="noBookmarks"]');
  });

  it('bookmark movie content', () => {
    cy.get('@movieTab').click();

    cy.get('[data-cy="movieList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then((el) => {
        cy.wrap(el[0]).find('[data-cy="bookmarkButton"]').click();
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .find('figure:first-of-type')
      .should('contain.text', 'Beyond Earth');
  });

  it('bookmark show content', () => {
    cy.get('@showTab').click();

    cy.get('[data-cy="showList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then((el) => {
        cy.wrap(el[0]).find('[data-cy="bookmarkButton"]').click();
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .find('figure:first-of-type')
      .should('contain.text', 'Undiscovered Cities');
  });

  it('unbookmark movie content', () => {
    cy.get('@movieTab').click();

    cy.get('[data-cy="movieList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then((el) => {
        cy.wrap(el[0]).find('[data-cy="bookmarkButton"]').click();
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .find('figure:first-of-type')
      .should('contain.text', 'Beyond Earth');

    cy.get('[data-cy="bookmarkedMovies"]')
      .find('figure:first-of-type')
      .find('button:first-of-type')
      .click();

    cy.get('[data-cy="bookmarkedMovies"]').should('not.exist');
    cy.get('[data-cy="noBookmarks"]');
  });

  it('unbookmark show content', () => {
    cy.get('@showTab').click();

    cy.get('[data-cy="showList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then((el) => {
        cy.wrap(el[0]).find('[data-cy="bookmarkButton"]').click();
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .find('figure:first-of-type')
      .should('contain.text', 'Undiscovered Cities');

    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .find('figure:first-of-type')
      .find('button:first-of-type')
      .click();

    cy.get('[data-cy="bookmarkedShows"]').should('not.exist');
  });

  it('search for only bookmarked content', () => {
    let contentMovieTitle = '';
    let contentShowTitle = '';

    cy.get('@movieTab').click();
    cy.get('[data-cy="movieList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button:first-of-type').click();
        cy.wrap($el[0])
          .find('[data-cy="smallContentTitle"]')
          .then(($el) => {
            contentMovieTitle = $el.text();
          });
      });

    cy.get('@showTab').click();
    cy.get('[data-cy="showList"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).find('button:first-of-type').click();
        cy.wrap($el[0])
          .find('[data-cy="smallContentTitle"]')
          .then(($el) => {
            contentShowTitle = $el.text();
          });
      });

    cy.get('@bookmarkedTab').click();
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedMovies"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0])
          .find('[data-cy="smallContentTitle"]')
          .should('contain.text', contentMovieTitle);
      });

    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-cy="bookmarkedShows"]')
      .find('[data-cy="contentContainer"]')
      .children()
      .then(($el) => {
        cy.wrap($el[0])
          .find('[data-cy="smallContentTitle"]')
          .should('contain.text', contentShowTitle);
      });
  });

  it('logout user', () => {
    cy.get('@userProfile').click();
    cy.get('[data-cy="logoutButton"]').click();
    cy.url().should('include', '/login');

    cy.get('[data-cy="homePage"]').should('not.exist');
    cy.get('[data-cy="loginForm"]');
    cy.get('[data-cy="logoutMessage"]').should(
      'contain.text',
      'You have been succesfully signed out'
    );
  });
});

describe('login bypass', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('navigate to back to login without token', () => {
    cy.url().should('include', '/login');
  });
});
