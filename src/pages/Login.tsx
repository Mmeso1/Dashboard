import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (username: string) => {
    login(username);
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => handleLogin(username)}>Login</button>
    </>
  );
};

export default Login;
