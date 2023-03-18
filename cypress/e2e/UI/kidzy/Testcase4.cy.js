///<reference types ="cypress"/>
describe("testsuite4", () => {
  it("testcase3", () => {
    cy.visit("https://kidzy.land");
    //cy.get(".Home_main__pEztE").children();
    cy.get(".Home_main__pEztE").children(".relative");
  });
});
