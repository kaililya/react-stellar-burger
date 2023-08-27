const { selectors } = require("../../support/selectors");

Cypress.Commands.add('clickOutside', function() {
  return cy.get('body').click(0,0);
});

describe('sending order is avaliable | popup of order should be avaliable for opening. Also closing by diffriend cases', function() {
  beforeEach(() => {
    cy.visit('/');
  });

  it('order should be sent', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.emailInput).type('foto2@mail.ru');
    cy.get(selectors.passwordInput).type('123456');
    cy.get(selectors.buttomSubmitLogin).click();

    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформление заказа...');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).should('exist');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');
  });

  it('order should not be sent without bun', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');

    cy.get(selectors.ingredientItem).last().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).last().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('4142');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
  });

  it('order should be sent and closed by button', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.emailInput).type('foto2@mail.ru');
    cy.get(selectors.passwordInput).type('123456');
    cy.get(selectors.buttomSubmitLogin).click();
    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформление заказа...');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).should('exist');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get('#root-modal').find('svg').click();
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.ingredientCounter).should('not.exist');
    cy.get(selectors.burgerConstructorContainer).contains('Добавьте любой ингредиент...');
  });

  it('order should be sent and closed by click overlay', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.emailInput).type('foto2@mail.ru');
    cy.get(selectors.passwordInput).type('123456');
    cy.get(selectors.buttomSubmitLogin).click();
    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформление заказа...');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).should('exist');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get(selectors.modalOverlay).clickOutside();
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.ingredientCounter).should('not.exist');
    cy.get(selectors.burgerConstructorContainer).contains('Добавьте любой ингредиент...');
  });

  it('order should be sent and closed by press Escape', () => {
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');

    cy.get(selectors.ingredientItem).first().trigger('dragstart');
    cy.get(selectors.burgerConstructorContainer).should('exist');
    cy.get(selectors.burgerConstructorContainer).trigger('drop');
    cy.get(selectors.ingredientItem).first().find(selectors.ingredientCounter).should('include.text', '1');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('2510');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.emailInput).type('foto2@mail.ru');
    cy.get(selectors.passwordInput).type('123456');
    cy.get(selectors.buttomSubmitLogin).click();
    cy.get(selectors.buttonMakeOrder).click();
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформление заказа...');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).should('exist');
    cy.get(selectors.popupOrderDetails, { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get('body').type('{esc}');
    cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    cy.get(selectors.totalPriceCurrencyContainer).children().contains('0');
    cy.get(selectors.buttonMakeOrder).should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get(selectors.ingredientCounter).should('not.exist');
    cy.get(selectors.burgerConstructorContainer).contains('Добавьте любой ингредиент...');
  });

});