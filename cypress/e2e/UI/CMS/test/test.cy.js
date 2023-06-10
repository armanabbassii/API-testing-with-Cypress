import {
  signupLocators,
  etheralMailLocators,
  sharedLocators,
} from "./locators";
import { generateRandomIdentity } from "../support/utils";

it("Should signup succesfully", () => {
  cy.visit("/sign-up");
  let identity = generateRandomIdentity();
  cy.get("button").contains("Agree").click();
  cy.get(signupLocators.EMAIL_INPUT).type(identity.email);
  cy.get(signupLocators.PASSWORD_INPUT).type(identity.password);
  cy.get(signupLocators.PASSWORD_CONFIRM_INPUT).type(identity.password);
  cy.get(signupLocators.ACCEPT_TERMS_CHECKBOX).check();
  cy.get(signupLocators.CREATE_ACCOUNT_BUTTON).should("be.enabled").click();
  cy.origin(
    "https://ethereal.email",
    { args: { etheralMailLocators, identity } },
    ({ etheralMailLocators, identity }) => {
      cy.get(etheralMailLocators.EMAIL_ADDRESSES)
        .eq(1)
        .should("have.attr", "title", identity.email);
      cy.get("iframe").then(($iframe) => {
        const iFrameContents = $iframe.contents().find("body");
        cy.wrap(iFrameContents).contains("Welcome to AutomationCamp");
        cy.wrap(iFrameContents)
          .find(etheralMailLocators.COMPLETE_REGISTRATION_BUTTON)
          .click();
      });
    }
  );
});
cy.get(sharedLocators.GENERIC_NOTIFICATION)
  .should("be.visible")
  .contains("Your email has been successfully associated with your account");
cy.location("pathname").should("eq", "/dashboard");
cy.get(sharedLocators.PROFILE_BUTTON).should("be.visible");
