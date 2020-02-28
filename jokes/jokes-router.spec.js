const request = require("supertest");
const server = require("../api/server.js");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets.js");

let token;

beforeAll(done => {
  request(server)
    .post("api/auth/login")
    .send({
      username: "cody",
      password: "pass"
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

describe("jokes router", () => {
  it("should return 200", async () => {
    // return request(server)
    //   .get("/api/jokes")
    //   .set("authorization", token)
    //   .then(res => {
    //     expect(res.status).toBe(200);
    //   });
    const token = await jwt.verify(token, secret.jwtSecret);
    const users = await request(server)
      .get("/api/jokes")
      .set("authorization", Token);

    expect(users.response).toBe(200);
  });
});