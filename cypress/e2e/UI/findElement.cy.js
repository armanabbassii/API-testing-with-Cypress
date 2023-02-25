/// <reference types = 'cypress'/>

describe("2.1 name of second test", () => {
  it("name of testcase 1", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("#fname").type("Arman").click();
  });
  /*
  it('2.2 scroll',()=>{
    cy.visit("https://datatables.net/examples/basic_init/scroll_x.html")
    cy.get(':nth-child(9) > :nth-child(9)').click()
  })

  it('2.3 contains text ',()=>{
    cy.visit("https://www.play2.automationcamp.ir/index.html")
    cy.contains('This is your Sample Tooltip Option').click()
    cy.contains('label[for=moption]',' Option 2').click()
    cy.get('label[for=moption]').contains(' Option 2').click()
  })
  
  it("2.4 find relative element", () => {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("#owc").children;
    cy.get("#owc").children("[value = 'option 2']").click();
    cy.contains("Singer").parent();
    cy.get("#owc")
      .children("[value = 'option 2']")
      .siblings()
      .should("have.length", 3);
  });
*/

  it("2.5 Ancestors", () => {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    cy.get("div#mp-welcome").parents();
    cy.get("div#mp-welcome").parents("div#mw-content-text");
    cy.get("div#mp-welcome").parentsUntil("#bodyContent");
  });
});
