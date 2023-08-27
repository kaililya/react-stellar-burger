Cypress.Commands.add('clickOutside', function() {
  return cy.get('body').click(0,0);
});


describe('popup of ingredient should be avaliable for opening. Also closing by diffriend ways', function() {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('popup of ingredient should be openend and closed by buttom', () => {
    cy.get('img[class*=ingredient__image]').first().click();
    cy.get('#root-modal').contains('Детали ингредиента');
    cy.get('#root-modal').find('svg').click();
    cy.get('#root').should('not.include.text', 'Детали ингредиента');

  }); 

  it('popup of ingredient should be openend and closed by click overlay', () => {
    cy.get('img[class*=ingredient__image]').first().click();
    cy.get('#root-modal').contains('Детали ингредиента');
    cy.get('div[class*=ModalOverlay_overlay__]').clickOutside();
    cy.get('#root').should('not.include.text', 'Детали ингредиента');

  }); 

  it('popup of ingredient should be openend and closed by press Escape', () => {
    cy.get('img[class*=ingredient__image]').first().click();
    cy.get('#root-modal').contains('Детали ингредиента');
    cy.get('body').type('{esc}');
    cy.get('#root').should('not.include.text', 'Детали ингредиента');

  }); 
}); 