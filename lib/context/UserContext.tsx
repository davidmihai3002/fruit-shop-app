import { createContext, useState } from "react";

export interface UserContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<string | null>(null);
  const toExport = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={toExport}>{children}</UserContext.Provider>
  );
};
