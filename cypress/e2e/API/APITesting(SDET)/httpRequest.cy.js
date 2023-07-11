/// <reference types="Cypress" />

describe("Session17_ApiAutomation", () => {
  it("SimpleRequests", () => {
    cy.request("https://restcountries.com/v3.1/name/australia").then(
      ($response) => {
        //  میتونیم دریافتش کنیم .thenما الان اینجا ابجکت ریسپانس رو داریم،از طریق
        expect($response.status).to.eq(200);
        expect($response.body[0].capital[length]).eq("Berlin");
      }
    );
  });
});
