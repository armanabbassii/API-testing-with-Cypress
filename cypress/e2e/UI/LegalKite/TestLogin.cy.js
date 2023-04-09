/// <reference types = "cypress"/>

import { WEBSITE_URL } from "./constants";

describe("loginTest", () => {
  it("testCase1", () => {
    cy.visit(WEBSITE_URL);
  });
});
