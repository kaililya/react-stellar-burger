const { selectors } = require("../../support/selectors");

Cypress.Commands.add('clickOutside', function() {
  return cy.get('body').click(0,0);
});


describe('popup of ingredient should be avaliable for opening. Also closing by diffriend ways', function() {
  beforeEach(() => {
    cy.visit('/');
  });

  it('popup of ingredient should be openend and closed by buttom', () => {
    cy.get(selectors.ingredientItemImage).first().click();
    cy.get(selectors.rootModalApp).contains('Детали ингредиента');
    cy.get(selectors.rootModalApp).find('svg').click();
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
  }); 

  it('popup of ingredient should be openend and closed by click overlay', () => {
    cy.get(selectors.ingredientItemImage).first().click();
    cy.get(selectors.rootModalApp).contains('Детали ингредиента');
    cy.get(selectors.modalOverlay).clickOutside();
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');

  }); 

  it('popup of ingredient should be openend and closed by press Escape', () => {
    cy.get(selectors.ingredientItemImage).first().click();
    cy.get(selectors.rootModalApp).contains('Детали ингредиента');
    cy.get('body').type('{esc}');
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');

  }); 
}); 