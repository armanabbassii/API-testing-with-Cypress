/// <reference types = "cypress"/>

describe("TestSuite3", () => {
  it("testCase1", () => {
    cy.visit("https://kidzy.land"),
      cy.contains("همکاری با کیدزی"),
      //cy.contains("a[class = 'rounded-full']", "همکاری با کیدزی"),
      cy.contains("a[class='rounded-full']", "همکاری با کیدزی").click();
    /* 
      cy.get(".bg-gradient-to-b > .rounded-full").contains("همکاری با کیدزی").click();
      cy.get(".rounded-full").contains("همکاری با کیدزی").click();
      */
  });
});
