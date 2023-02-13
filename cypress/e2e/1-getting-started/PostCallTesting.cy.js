/// <reference types = "cypress"/>

describe("post content-type", () => {
  let AccessToken = "71054454f7e148a0b263b764fc38d659.XzIwMjMy";

  it("create content-type", () => {
    cy
      .request({
        method: "POST",
        url: "http://rad-qc.sandpod.ir/api/core/content-types",
        hearders: {
          accept: "application/json",
          "Access-Token": "9d4261f3d182433f9f7f86b541338232.XzIwMjMy",
          "Client-Id": "17959574q2f0347718971594ccd86f3f4",
          "X-CSRF-TOKEN": "",
        },
        body: {
          name: "api testing",
          code: 23232323232323,
          type: "content",
          ig: "601:IG-0000601:0",
          allFields: true,
          description: "descriptionText",
        },
      })
      .then(res),
      () => {
        expect(res.status).to.eql(200);
        expect(res.body.result).has.property("name", "api testing");
        expect(res.body.result).has.property("code", "23232323232323");
        expect(res.result.metadata).has.property("ig", "601:IG-0000601:0");
        expect(res.result.metadata).has.property(
          "description",
          "descriptionText"
        );
      };
  });
});
