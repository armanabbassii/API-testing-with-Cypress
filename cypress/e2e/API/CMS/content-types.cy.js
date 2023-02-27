/// <reference types = "cypress"/>

describe("content-type", () => {
  let AccessToken = "f68423f5c80a41d0be989d51445a0ca5.XzIwMjMy";
  let ClientId = "17959574q2f0347718971594ccd86f3f4";

  it("create content-type", () => {
    cy.request({
      method: "POST",
      url: "http://rad-qc.sandpod.ir/api/core/content-types",
      hearders: {
        accept: "application/json",
        "Access-Token": AccessToken,
        "Client-Id": ClientId,
        "X-CSRF-TOKEN": "",
      },
      body: {
        type: "content",
        name: "contentTest2",
        code: "33224455666",
        ig: "601:IG-0000601:0",
        description: "testDiscription",
        ownerId: "",
        allFields: true,
        permissionType: "private",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      /*console.log(response);
      expect(response.body.errorCode).to.eql(406);

      expect(response.body.result.name).to.equal('contentTest')

      expect(response.body.name).to.be.contentTest
      expect(response.body.result[0]).to.have.deep.property("name[0]","contentTest");
      expect(response.body.result).has.property("code", "332244556");
      expect(response.result.metadata).has.property("ig", "601:IG-0000601:0");
      /*expect(response.result.metadata).has.property(
        "description",
        "testDiscription"
      );*/
    });
  });
});
