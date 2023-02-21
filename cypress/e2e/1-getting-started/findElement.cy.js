/// <reference types = 'cypress'/>

describe("name of second test", () => {
  it("name of testcase 1", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html")
    cy.get('#fname').type('Arman');
  })
  it('scroll',()=>{
    cy.visit("https://datatables.net/examples/basic_init/scroll_x.html")
    cy.get(':nth-child(9) > :nth-child(9)').click()
  })
  it('contain text ',()=>{
    cy.visit("https://www.play2.automationcamp.ir/index.html")
    cy.contains('This is your Sample Tooltip Option').click()
    cy.contains('label[for=moption]',' Option 2').click()
    cy.get('label[for=moption]').contains(' Option 2').click()

  })
})
