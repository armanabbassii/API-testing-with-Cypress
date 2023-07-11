/// <reference types = "cypress"/>

const { get } = require("cypress/types/lodash");

describe("get content-type(contentTypeUniqueId)", () => {
  let AccessToken = "71054454f7e148a0b263b764fc38d659.XzIwMjMy";

  it("get content-type(unique_id)", () => {
    cy.request({
      method: get,
      url: "http://rad-qc.sandpod.ir/api/core/content-types/",
      headers: {},
    });
  });
});
