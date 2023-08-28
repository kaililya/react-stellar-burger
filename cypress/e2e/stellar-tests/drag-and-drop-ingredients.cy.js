const { selectors } = require("../../support/selectors");

describe('drag and drop of ingredients is avaliable', function() {
  beforeEach(() => {
    cy.visit('/');
  });

  it('bun should move to burger constructor', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled')
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');
    cy.get(selectors.ingredientCounter).should('not.exist');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled')
  }); 

  it('bun should be avaliavle for replacing with other buns in burger constructor', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled')
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');
    cy.get(selectors.ingredientCounter).should('not.exist');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get(selectors.ingredientItem).eq(1).trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('not.exist');
    cy.get(selectors.burgerConstructorContainer).should('not.include.text', 'Краторная булка N-200i');
    cy.get(selectors.ingredientItem).eq(1).find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('1976');
  }); 
}); 