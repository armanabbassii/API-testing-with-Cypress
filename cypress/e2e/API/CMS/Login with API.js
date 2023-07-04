/// <reference types = "cypress"/>

it("content-type create", () => {
  cy.request(POST, "http://rad-qc.sandpod.ir/api/core/content-types", {
    name: "api testing",
    code: "test123",
    type: "content",
    ig: "601:3AIG-0000601:3A0",
    allFields: true,
    description: "aaaaaa",
    AccessToken: "9d4261f3d182433f9f7f86b541338232.XzIwMjMy",
    ClientId: "17959574q2f0347718971594ccd86f3f4",
  });
});
