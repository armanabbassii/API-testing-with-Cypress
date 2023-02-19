/// <reference types = "cypress"/>

it("google search", () => {
  cy.visit("https://google.com");
  cy.get("input[name =q]").type("cypress{enter}");
});
