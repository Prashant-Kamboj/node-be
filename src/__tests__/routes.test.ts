import app from "../server";
import supertest from "supertest";

describe("app route /", () => {
  // test an api should be async no blocking
  it("shoudl send some data", async () => {
    const result = await supertest(app).get("/");
    expect(result.body.message).toBe("Hello world!");
  });
});
