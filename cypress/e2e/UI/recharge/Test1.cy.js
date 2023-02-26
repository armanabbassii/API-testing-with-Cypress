/// <reference types = "cypress"/>

describe ("Test suit1", ()=>{
    it("Testcase1",() => {
        cy.visit("https://company.recharge.com/")
        cy.get('.pr-md-5 > .h1').should('contain','The leading one-stop-shop for all ')
        //cy.title().should('Recharge.com | Recharge.com | The leading one-stop-shop for all your branded payment needs')
        cy.contains('The leading one-stop-shop for all ')
        
        //cy.get('class="h1"').should('The leading one-stop-shop for all ')
        //cy.get($h1.first()).to.contain('The leading one-stop-shop for all')
        //cy.get('span').contains('Where we are').click()
        //cy.get('div').contains('United Kingdom').click({ force: true })
    })
})