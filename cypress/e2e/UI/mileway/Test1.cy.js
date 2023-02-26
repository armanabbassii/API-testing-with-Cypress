/// <reference types = "cypress"/>

describe ("Test suit1", ()=>{
    it("Testcase1",() => {
        cy.visit("https://mileway.com/")
        cy.get("span","Where we are")
    })


})