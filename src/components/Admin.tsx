import Button from "./ui/Button";
import Card from "./ui/Card";
import { useAuth } from "../utils/Auth";

const AdminDashboard = () => {
  const { user } = useAuth(); // Get the logged-in user's data

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="text-gray-700 mb-6">Welcome, {user} (Admin)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Manage Users */}
        <Card className="bg-white shadow-lg rounded-lg p-4">
          <Card.Content>
            <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
            <p className="text-gray-600">
              Add, edit, or remove users from the system.
            </p>
            <Button className="mt-3">Go to Users</Button>
          </Card.Content>
        </Card>

        {/* View System Logs */}
        <Card className="bg-white shadow-lg rounded-lg p-4">
          <Card.Content>
            <h3 className="text-lg font-semibold mb-2">System Logs</h3>
            <p className="text-gray-600">
              Monitor system activities and error logs.
            </p>
            <Button className="mt-3">View Logs</Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
