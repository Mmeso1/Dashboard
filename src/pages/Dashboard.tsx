import { useAuth } from "../utils/Auth";
import AdminDashboard from "../components/Admin";

const Dashboard = () => {
  const { role } = useAuth();
  return <>{role === "admin" && <AdminDashboard />}</>;
};

export default Dashboard;
