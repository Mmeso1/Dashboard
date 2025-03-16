import { useAuth } from "../utils/Auth";

const Dashboard = () => {
  const { user, role } = useAuth();
  return (
    <>
      <div>Dashboard</div>

      <div>Welcome {user}</div>
      <div>You are a {role}</div>
    </>
  );
};

export default Dashboard;
