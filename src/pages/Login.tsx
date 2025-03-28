import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import { useState } from "react";
import logo from "../assets/logo.png";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, role);
    console.log("Login function");
    console.log(`username: ${username}, role: ${role}`);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 h-[80vh]">
      <div className="flex items-center gap-3 mb-17">
        <img src={logo} alt="logo" className="w-10 block px-0" />
        <p className="poppins-normal">Dashboard App</p>
      </div>
      <div className="bg-white rounded-xl max-w-md w-full flex flex-col items-start">
        <div className="flex flex-col text-left mt-4 gap-2 mb-10">
          <h2 className="text-2xl poppins-semibold text-gray-800">Welcome!</h2>
          <p className="poppins-normal text-sm text-gray-500">
            Please enter your details...
          </p>
        </div>

        {/* Username Input */}
        <div className="flex flex-col gap-2 items-start w-full poppins-normal">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-400  transition placeholder:text-sm text-sm"
            placeholder="Enter your username"
          />
          <select
            id="role"
            value={role}
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
            className="px-2 py-3 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-400 transition text-sm text-gray-500"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Login Button */}
        <button
          onClick={() => handleLogin()}
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
