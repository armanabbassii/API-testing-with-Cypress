/// <reference types="Cypress" />

describe("Session17_ApiAutomation", () => {
  it("SimpleRequests", () => {
    cy.request("https://restcountries.com/v3.1/name/germany").then(
      ($response) => {
        expect($response.status).to.eq(200);
        expect($response.body[0].capital[0]).eq("Berlin");
      }
    );
  });
});
