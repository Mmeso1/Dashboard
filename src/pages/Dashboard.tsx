import { useAuth } from "../utils/Auth";
import AdminDashboard from "../components/Admin";
import EditorPanel from "../components/Editor";

const Dashboard = () => {
  const { role } = useAuth();
  if (role === "admin") {
    return <AdminDashboard />;
  } else if (role === "editor") {
    return <EditorPanel />;
  }
  return null;
};

export default Dashboard;
