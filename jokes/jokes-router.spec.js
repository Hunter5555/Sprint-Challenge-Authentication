const request = require("supertest");
const server = require("../api/server.js");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets.js");

let token;

beforeAll(done => {
  request(server)
    .post("api/auth/login")
    .send({
      username: "Drew",
      password: "test123"
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

describe("jokes router", () => {
  it("should return 200", async () => {
    const token = await jwt.verify(token, secret.jwtSecret);
    const users = await request(server)
      .get("/api/jokes")
      .set("authorization", Token);

    expect(users.response).toBe(200);
  });
});