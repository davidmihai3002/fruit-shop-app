import { t } from "mobx-state-tree";

export const UserModel = t
  .model({ user: t.maybeNull(t.string) })
  .actions((self) => {
    function setUser(userName: string) {
      self.user = userName;
    }
    return {
      setUser,
    };
  });

export const userStore = UserModel.create({
  user: "",
});
