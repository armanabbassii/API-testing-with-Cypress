/// <reference types = "cypress"/>

it("google search", () => {
  cy.request("https://restcountries.com/v3.1/name/germany").then(
    ($response) => {
      expect($response.status).to.eq(200);
      expect($response.body[0].capital[0]).to.eq("Berlin");
    }
  );
});

//for recieve response, use it "then"
//   ش میکنیمyeild که ابجکتی که به ما برمیگرده رو
// حالا ما ابجکت ریسپانس رو داریم.
teststs;
toString;
erter;
dgdg;
