/// <reference types = "cypress"/>

describe("post content-type", () => {
  let AccessToken = "71054454f7e148a0b263b764fc38d659.XzIwMjMy";

  it("create content-type", () => {
    cy.request({
      method: "POST",
      url: "http://rad-qc.sandpod.ir/api/core/content-types",
      hearders: {
        accept: "application/json",
        "Access-Token": "67680a881cbc463bbaef24da917e3e0b.XzIwMjMy",
        "Client-Id": "17959574q2f0347718971594ccd86f3f4",
        "X-CSRF-TOKEN": "",
      },
      body: {
        type: "content",
        name: "contentTest",
        code: "332244556",
        ig: "601:IG-0000601:0",
        description: "testDiscription",
        ownerId: "",
        allFields: true,
        permissionType: "private",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.result[0]).to.have.deep.property(
        "name[0]",
        "contentTest"
      );
      expect(response.body.result).has.property("code", "332244556");
      expect(response.result.metadata).has.property("ig", "601:IG-0000601:0");
      expect(response.result.metadata).has.property(
        "description",
        "testDiscription"
      );
    });
  });
});
