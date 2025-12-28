import { t } from "mobx-state-tree";
import { api } from "../api/api";
import { AuthResponse } from "../types/models";

// TODO: Decode the received token, and retrieve user data based on the username or id
export const UserModel = t
  .model({ 
    user: t.maybeNull(t.string) ,
    token: t.string
  })
  .actions((self)=>{
    function setUser(userName: string) {
      self.user = userName;
    }
    function setToken(token: string) {
      self.token = token;
    }
      return {
      setUser,
      setToken,
    };

  })
  .actions((self) => {
    async function logUserIn(username: string){
      const res = await api.post<AuthResponse>("/auth", {username: username, password: "1234567"})
      if (res.ok) {
        self.setToken(res.data!.access_token)
      } else {
        throw new Error(res.problem)
      }
    }
    return {
      logUserIn
    };
  });

export const userStore = UserModel.create({
  user: "",
  token: ""
});
