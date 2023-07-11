/// <reference types = "cypress"/>

//refresh token
//post provider
//update provider
//get provider
//publish provider
//get provider
//unpublish provider
//get provider

//How to chain multiple API's

describe("provider services", () => {
  let authToken = null;

  before("creating access token", () => {
    cy.request({
      method: "POST",
      url: "https://accounts.pod.ir/oauth2/token",
      body: {
        client_id: "17959574q2f0347718971594ccd86f3f4",
        code_verifier: "JiC186Xo0O",
        grant_type: "refresh_token",
        refresh_token: "eacf472b092645ce8c010823a58bc120",
      },
      headers: {
        authority: "accounts.pod.ir",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*",
        "origin:http": "//qc.attres.ir",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "http://qc.attres.ir/",
        "accept-language": "en-US,en;q=0.9,fa;q=0.8,de;q=0.7",
      },
    }).then((response) => {
      authToken = response.body.access_token;
    });
  });
});
