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
    <>
      <h1>Aww... so sad to let you go!</h1>{" "}
      <button onClick={handleLogout}>
        <Link to="/logout">Log Out</Link>
      </button>{" "}
    </>
  );
};

export default Logout;
