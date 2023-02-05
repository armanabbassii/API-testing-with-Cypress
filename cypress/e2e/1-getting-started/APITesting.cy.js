/// <reference types = "cypress"/>

it("First API testing", () => {
  cy.request("https://restcountries.com/v3.1/name/germany").then(($response) => {
      expect($response.status).to.eq(200);
      expect($response.body[0].capital[0]).to.eq("Berlin");
    }
  );
});

it("API chaining", () => {
  cy.request("https://restcountries.com/v3.1/name/australia").then(($response) => {
      expect($response.status).to.eq(200);
<<<<<<< HEAD
      let countryCurrencyKey = Object.keys($response.body[0]["currencies"]);

      cy.request("https://localhost:3000/countries", {
        name: "australia",
        capital: $response.body[0].capital[0],
        currency: countryCurrencyKey[0],
      });
    }
  );
=======
      let countryCurrencyKey = Object.keys($response.body[0]["currencies"])
        
      cy.request("POST", "https://localhost:3000/countries", {
        name: "Australia",
        capital: $response.body[0].capital[0],
        currency: countryCurrencyKey[0]
      })
      cy.request("GET", "https://localhost:3000/countries").then(($response) => {

      })
    })
>>>>>>> 6161dbc3534474ef25e42304e84ed34699252ebb
});
