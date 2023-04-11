/// <reference types = "cypress"/>

it("testcase1", () => {
  cy.visit("https://www.google.com/");
  cy.get("input[name=q]").type("time{enter}");
  cy.contains("time.ir").click();

  cy.origin("https://www.time.ir", () => {
    cy.get("#digitalClock");
  });
});
