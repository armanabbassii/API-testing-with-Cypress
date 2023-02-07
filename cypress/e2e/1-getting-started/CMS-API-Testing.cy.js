/// <reference types = "cypress"/>


it("content-type create", () => {
    cy.request(POST, "http://rad-qc.sandpod.ir/api/documentation#/Content-Type/store-api-core-content-types", {
        name: "api testing",
        code: "test123",
        type: "content",
        ig: "601:3AIG-0000601:3A0",
        allFields: true,
        description: "aaaaaa",
        AccessToken: "4a8a10a71168416395110a67cb62405e.XzIwMjMy",
        ClientId: "17959574q2f0347718971594ccd86f3f4"
        })
    })
