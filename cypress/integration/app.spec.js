/// <reference types="Cypress" />

const baseUrl = Cypress.env('BASE_URL');

// Navigate to the URL before we actually run our tests
before(() => {
  cy.visit(baseUrl);
})

describe('Stag Game of Games Home page', () => {

  describe('When I visit the homepage', () => {
    it('should have a stag running', () => {
      cy.get('img[data-cy="running-stag"').should('be.visible');
    });
  });

  describe('When I click the "Can you find it?" link', () => {
    it('should change the url path to /can-you-find-it', () => {
      cy.get('a[href="/can-you-find-it"]').click();
      cy.url().should('include', '/can-you-find-it');
    });

    it('should display a question', () => {
      cy.get('#question').should('be.visible');
    });

    it('should have "reveal answer" and "next question" buttons', () => {
      cy.get('[data-cy="reveal-button"]').should('be.visible');
      cy.get('[data-cy="next-question-button').should('be.visible');
    });
  });
});