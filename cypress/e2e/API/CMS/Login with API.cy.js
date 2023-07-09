/// <reference types = "cypress"/>
/*
describe("Login with API", () => {
  cy.session("session1", () => {
    cy.visit("http://cms-provider-test.attres.ir/")
    cy.contains("ورود با نام کاربری").click()
    cy.wait(15000).then(($newWindow), () => {
      cy.request()
    })
  })
})
*/
// Get window object

describe("cms test", () => {
  beforeEach(() => {
    cy.visit("http://cms-provider-test.attres.ir/");
  });

  it("sso stub 1", () => {
    cy.window().then((win) => {
      cy.stub(win, "open").as("winOpen");
    });
    cy.contains("ورود با نام کاربری").click();
    cy.get("@newWindow").should("be.called");
  });
});

/*
  it("sso stub 2", () => {
    cy.window().then((win) => {
      cy.stub(win, "open", (url) => {
        win.location.href = cypress.config().baseUrl + url;
      }).as("newWindow");
    });
    cy.contains("ورود با نام کاربری").click();
    cy.get("@newWindow").should("be.called");
  });
});
*/
