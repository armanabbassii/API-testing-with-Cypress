/// <reference types = "cypress"/>

describe ("Test suit1", ()=>{
    it("Testcase1",() => {
        cy.visit("https://mileway.com/")
        cy.get('span').contains('Where we are').click()
        cy.get('div').contains('United Kingdom').click({ force: true })
    })
})