import { UserModel } from "./UserStore";

describe("UserStore", () => {
  test("setUser function should set our current user to the input it gets from the function props", () => {
    const store = UserModel.create({
      user: "",
    });
    store.setUser("Anamaria");
    expect(store.user).toBe("Anamaria");
  });
});
