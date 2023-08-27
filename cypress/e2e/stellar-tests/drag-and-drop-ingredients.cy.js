describe('drag and drop of ingredients is avaliable', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('bun should move to burger constructor', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled')
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');
    cy.get('p[class*=counter__num]').should('not.exist');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled')
  }); 

  it('bun should be avaliavle for replacing with other buns in burger constructor', () => {
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('be.disabled')
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('0');
    cy.get('p[class*=counter__num]').should('not.exist');

    cy.get('div[class*=IngredientItem_ingredient__]').first().trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('2510');
    cy.get('button[class*=button_size_large]').should('include.text', 'Оформить заказ').should('not.be.disabled');

    cy.get('div[class*=IngredientItem_ingredient__]').eq(1).trigger('dragstart');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').trigger('drop');
    cy.get('div[class*=IngredientItem_ingredient__]').first().find('p[class*=counter__num]').should('not.exist');
    cy.get('div[class*=BurgerConstructor_ingredient_main_container]').should('not.include.text', 'Краторная булка N-200i');
    cy.get('div[class*=IngredientItem_ingredient__]').eq(1).find('p[class*=counter__num]').should('include.text', '1');
    cy.get('div[class*=TotalPrice_price_currency_container]').children().contains('1976');
  }); 
}); 