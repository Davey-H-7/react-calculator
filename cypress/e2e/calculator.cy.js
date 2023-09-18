describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('should have working arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should be able to chain operations together', () =>{
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')

  })

  it('should be able to handle decimals', () =>{
    cy.get('#number7').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click()
    cy.get('#number3').click()
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.8')

  })

  it('should be able to handle large numbers', () =>{
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
  
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '67950')
  })

  it('should be able to handle negative numbers', () =>{
    cy.get('#number5').click();
    cy.get('#operator-subtract').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should flag an error if dividing by zero', () =>{
    cy.get('#number5').click();
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })


})