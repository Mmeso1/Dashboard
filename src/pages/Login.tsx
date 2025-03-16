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
    <div className="flex flex-col items-center justify-center px-6 h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Login
        </h2>

        {/* Username Input */}
        <div className="flex gap-2 items-center">
          <label
            htmlFor="username"
            className="text-xl font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-400  transition"
            placeholder="Enter your username"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={() => handleLogin(username)}
          className="w-full mt-4 bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 active:scale-95 transition cursor-pointer"
          disabled={!username.trim()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
