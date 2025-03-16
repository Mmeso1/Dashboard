import { useState, useContext, createContext, ReactNode } from "react";

interface AuthContextTypes {
  user: string | null;
  role: string;
  login: (username: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>("");
  const [role, setRole] = useState<string>("");
  const login = (username: string) => {
    setUser(username);

    if (username === "Editor") {
      setRole("editor");
    } else if (username === "Admin") {
      setRole("admin");
    } else {
      setRole("viewer");
    }
  };
  const logout = () => {
    setUser("");
    setRole("viewer");
  };

  console.log(user);

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
