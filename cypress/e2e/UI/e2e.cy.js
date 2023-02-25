/// <reference types = "cypress"/>

describe("suit1", () => {
  it("google search", () => {
    cy.visit("https://google.com");
    cy.get("input[name =q]").type("cypress{enter}");
  });

  it("cypress website testing", () => {
    cy.visit("https://www.cypress.io/");
    cy.title().should(
      "eq",
      "JavaScript Web Testing and Component Testing Framework | cypress.io"
    );
    cy.title().should(
      "include",
      "JavaScript Web Testing and Component Testing Framework"
    );
  });
});
