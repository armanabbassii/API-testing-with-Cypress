/// <reference types = "cypress"/>

it("testcase1", () => {
  cy.visit("https://www.google.com/");
  cy.get("#APjFqb").type("wikipedia{enter}");
  cy.contains("www.wikipedia.org").click();

  cy.origin("https://www.wikipedia.org/", () => {
    cy.get("#searchInput").type("Test done");
  });
});
