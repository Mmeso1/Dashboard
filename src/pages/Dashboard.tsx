import { useAuth } from "../utils/Auth";
import AdminDashboard from "../components/Admin";
import EditorPanel from "../components/Editor";
import ViewerPanel from "../components/Viewer";

const Dashboard = () => {
  const { role } = useAuth();
  if (role === "admin") {
    return <AdminDashboard />;
  } else if (role === "editor") {
    return <EditorPanel />;
  }
  return <ViewerPanel />;
};

export default Dashboard;
