/// <reference types="Cypress" />
/*
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
*/

describe("http requests", () => {
  it("get call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("eq", 200);
  });

  it("POST call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        userId: 2,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et c",
      },
    })
      .its("status")
      .should("eq", 201);
  });
});
