/// <reference types = "cypress"/>

describe("Testsuite1", () => {
  it("TestCase2", () => {
    cy.visit("https://kidzy.land");
    cy.get(".intro-first").should("contain", "بچه‌ها ");
  });
  it.only("TestCase2", () => {
    cy.visit("https://kidzy.land/aboutus");
    cy.get("input[placeholder = 'نام و نام خانوادگی']").type("armanabbasi");
    cy.get("#phone").type("09194292570");
    cy.get("#email")
      .type("arman.abbasi.nr@gmail.com")
      .should("class", "rounded-4xl");
    cy.get(".resize-none").type("Hi. this is Kidzy.land");
    cy.get('input[placeholder="متن داخل تصویر"]').type("1122233");
    cy.get('input[value="ارسال پیام"]').click();

    //cy.get('[id="phone"][class=".rounded-4xl"]');
    //cy.get((".rounded-4xl").click();)
  });
});
