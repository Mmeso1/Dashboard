import { useAuth } from "../utils/Auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/dashboard", { replace: true });
  };
  return (
    <div className="flex flex-col gap-7 p-6 mt-10">
      <h1>Aww... so sad to let you go!</h1>{" "}
      <button onClick={handleLogout}>
        <Link
          to="/logout"
          className="p-3 border-gray-400 bg-green-400 rounded-lg"
        >
          Log Out
        </Link>
      </button>{" "}
    </div>
  );
};

export default Logout;
