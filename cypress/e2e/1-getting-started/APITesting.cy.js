/// <reference types = "cypress"/>

it("First API testing", () => {
  cy.request("https://restcountries.com/v3.1/name/germany").then(
    ($response) => {
      expect($response.status).to.eq(200);
      expect($response.body[0].capital[0]).to.eq("Berlin");
    }
  );
});

it("API chaining", () => {
  cy.request("https://restcountries.com/v3.1/name/australia").then(
    ($response) => {
      expect($response.status).to.eq(200);
      let countryCurrencyKey = Object.keys() 
        
      cy.request("https://localhost:3000/countries", {
        name: "australia",
        capital: $response.body[0].capital[0]
        currency: 
      });
    }
  );
});
