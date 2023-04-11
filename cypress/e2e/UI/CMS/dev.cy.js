/// <reference types = "cypress"/>

import { PASSWORD, Password, SSOLOGIN, USERNAME } from "./constans";

describe("TestSuite1", () => {
  it("testcase1", () => {
    cy.visit("http://dev.cms.test/");
    cy.get(".login-btn").contains("ورود با نام کاربری").click();

    cy.origin(SSOLOGIN, () => {
      cy.get("input[name=identity]").type(USERNAME);
      cy.get("#authPassword-inp").type(PASSWORD);
      cy.get("#authLoginBtn").click();
    });
  });
});

/*
describe("Suite1", () => {
  it("login", () => {
    cy.visit("http://dev.cms.test/");
    cy.get(".login-btn").contains("ورود با نام کاربری").click();
  });

  it("2-test2", function () {
    cy.origin("https://accounts.pod.ir", () => {
      cy.get("input[name=identity]").type("Armanabbasi");
      cy.get("#authPassword-inp").type("Armandillo1995");
      cy.get("#authLoginBtn").click();
    });
  });
});

/*cy.get(".form-control-label ng-binding")
      .contains("نام کاربری / تلفن / ایمیل / کدملی")
      .type("Armanabbasi");
    cy.get(
      ".form-control input-lg ng-invalid ng-invalid-required ng-valid-maxlength ng-dirty ng-valid-parse ng-touched"
    )
      .contains("رمز عبور")
      .type("arman");
    cy.get("#authLoginBtn").contains("ورود");
  }
  /*
);

/*
it("OpenSSO", () => {
  cy.visit(
    "https://accounts.pod.ir/oauth2/authorize/index.html?client_id=17959574q2f0347718971594ccd86f3f4&response_type=code&redirect_uri=http://dev.cms.test/login?redirect=true&code_challenge_method=S256&code_challenge=q5I1_D_pAoQ_N5Uvt7_vUsC5inLxtyreHKBIs2uz_8U&scope=profile&prompt=login"
  );
  cy.get(".form-control-label ng-binding")
    .contains("نام کاربری / تلفن / ایمیل / کدملی")
    .type("Armanabbasi");
  cy.get(
    ".form-control input-lg ng-invalid ng-invalid-required ng-valid-maxlength ng-dirty ng-valid-parse ng-touched"
  )
    .contains("رمز عبور")
    .type("arman");
  cy.get("#authLoginBtn").contains("ورود");
});


describe("CMSTest", () => {
  it("loginTestCases", () => {
 
  })

})
*/
