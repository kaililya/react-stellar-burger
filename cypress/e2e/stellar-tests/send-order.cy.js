Cypress.Commands.add('clickOutside', function() {
  return cy.get('body').click(0,0);
});

describe('sending order is avaliable | popup of order should be avaliable for opening. Also closing by diffriend cases', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('order should be sent', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get('button[class*=button_size_large]').click();
    cy.get('input[type=email]').type('foto2@mail.ru');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();

    cy.get('button[class*=button_size_large]').click();
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформление заказа...');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).should('exist');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');
  });

  it('order should not be sent without bun', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');

    cy.get('div[class*=IngredientItem_ingredient__]').last().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').last().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('4142');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
  });

  it('order should be sent and closed by button', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get('button[class*=button_size_large]').click();
    cy.get('input[type=email]').type('foto2@mail.ru');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.get('button[class*=button_size_large]').click();
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформление заказа...');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).should('exist');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get('#root-modal').find('svg').click();
    cy.get('#root').should('not.include.text', 'Детали ингредиента');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('p[class*=counter__num]').should('not.exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').contains('Добавьте любой ингредиент...');
  });

  it('order should be sent and closed by click overlay', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get('button[class*=button_size_large]').click();
    cy.get('input[type=email]').type('foto2@mail.ru');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.get('button[class*=button_size_large]').click();
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформление заказа...');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).should('exist');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get('div[class*=ModalOverlay_overlay__]').clickOutside();
    cy.get('#root').should('not.include.text', 'Детали ингредиента');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('p[class*=counter__num]').should('not.exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').contains('Добавьте любой ингредиент...');
  });

  it('order should be sent and closed by press Escape', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get('button[class*=button_size_large]').click();
    cy.get('input[type=email]').type('foto2@mail.ru');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.get('button[class*=button_size_large]').click();
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформление заказа...');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).should('exist');
    cy.get('div[class*=OrderDetails_popup_container]', { timeout: 21000 }).find('p[class*=OrderDetails_number_order]').should('exist');

    cy.get('body').type('{esc}');
    cy.get('#root').should('not.include.text', 'Детали ингредиента');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled');
    cy.get('p[class*=counter__num]').should('not.exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').contains('Добавьте любой ингредиент...');
  });

});