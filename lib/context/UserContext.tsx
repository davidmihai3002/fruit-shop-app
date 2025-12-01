import { UserContextProps } from "@/lib/types/contexts";
import { createContext, useState } from "react";

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
