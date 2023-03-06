/// <reference types = "cypress"/>

describe("Carrers",()=>{
    it('testCase',()=>{
        cy.visit("https://kidzy.land/")
        cy.get('.middle').click()
        cy.get(':nth-child(9) > .text-white').click()
        cy.get(':nth-child(1) > .w-18\/20 > .w-fit').click()
        cy.get('.flex-wrap > :nth-child(2) > h2').click()
        cy.get('.jobs_upload__GFueB').click()
        //cy.get("path[class='middle']").click()
        //cy.get("a[href ='فرصت‌های شغلی']").click();
    })
})