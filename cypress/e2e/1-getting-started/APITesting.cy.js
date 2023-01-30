/// <reference types = "cypress"/>

const { Test } = require("mocha");

it("google search", function () {
  cy.request("https://restcountries.com/v3.1/name/germany");
});
Test;
