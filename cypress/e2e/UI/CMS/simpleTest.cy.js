/// <reference types = "cypress"/>

/*
it("testcase1", () => {
  cy.visit("https://www.google.com/");
  cy.get("#APjFqb").type("wikipedia{enter}");
  cy.contains("www.wikipedia.org").click();

  cy.origin("https://www.wikipedia.org/", () => {
    cy.get("#searchInput").type("Test done");
  });
});
*/
/*
it("testcase1", () => {
  cy.visit("https://www.google.com/");
  cy.get("#APjFqb").type("time{enter}");
  cy.contains("time.ir").click();

  cy.origin("https://www.time.ir/", () => {
    cy.get(
      ".ctl00_cphHeader_Sampa_Web_View_GeneralUI_HeaderLogoContol01cphHeader_3811_imgLogo"
    );
  });
});
*/
Cypress.Commands.add("getLinkByText", (text) => {
  cy.contains("a", text);
});

it("origin example", () => {
  cy.visit("/");
  cy.getLinkByText("Start a free trial");

  cy.origin("https://www.google.com/", () => {
    cy.visit("");
    cy.getLinkByText("Sign in");
  });
});
