/// <reference types = "cypress"/>

describe("Carrers",()=>{
    it('testCase',()=>{
        cy.visit("https://kidzy.land/")
        cy.get('.middle').click()
        //cy.get("path[class='middle']").click()
        //cy.get("a[href ='فرصت‌های شغلی']").click();
    })
})