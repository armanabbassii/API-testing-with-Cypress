/// <reference types = "cypress"/>

describe("Test suit1", () => {
  it("Testcase1", () => {
    cy.visit("https://company.recharge.com/");
    cy.get(".pr-md-5 > .h1").should(
      "contain",
      "The leading one-stop-shop for all "
    );
    //cy.title().should('Recharge.com | Recharge.com | The leading one-stop-shop for all your branded payment needs')
    cy.contains("The leading one-stop-shop for all ");
    cy.contains("Get to know us").click();
    cy.get(".holder > .h1").should("contain", "Branded payments made ");

    it("TestCase2", () => {
      cy.visit("https://company.recharge.com/our-story");
      cy.wait(5);
      cy.get(":nth-child(1) > .feature > .feature-number").should(
        "contain",
        "150"
      );
    });
  });
});
