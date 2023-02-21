/// <reference types = 'cypress'/>

describe("name of second test", () => {
  it("name of testcase 1", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html")
    cy.get('#fname').type('Arman');
  });
});

