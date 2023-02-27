/// <reference types = "cypress"/>

describe("content-type", () => {
  let AccessToken = "71054454f7e148a0b263b764fc38d659.XzIwMjMy";

  it("create content-type", () => {
    cy.request({
      method: "POST",
      url: "http://rad-qc.sandpod.ir/api/core/content-types",
      hearders: {
        accept: "application/json",
        "Access-Token": "942e970c0d1541a495e98204251cb247.XzIwMjMy",
        "Client-Id": "17959574q2f0347718971594ccd86f3f4",
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
