import * as user from "../user";

describe("User handler", () => {
  it("should create new user", async () => {
    const req = { body: { username: "test user", password: "test password" } };
    const res = { json: jest.fn() };
    const next = jest.fn();
    await user.createNewUser(req, res, next);
    expect(res.json).toHaveBeenCalled();
  });
});
