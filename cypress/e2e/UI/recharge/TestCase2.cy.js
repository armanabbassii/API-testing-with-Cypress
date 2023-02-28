/// <reference types = 'cypress'/>

describe("TestSuits2", () => {
  it("Testcase1", () => {
    cy.visit("https://company.recharge.com/");
    cy.get(".menu-toggle").click();
    //cy.get(".menu-item" > ".menu-label").click(); //should("contain", "company");
  });
});
