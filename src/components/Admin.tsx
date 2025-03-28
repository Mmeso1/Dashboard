import { useState } from "react";
import { useAuth } from "../utils/Auth";

// Dummy users data (replace with API data as needed)
const dummyUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Catherine Lee",
    email: "catherine@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Eva Green",
    email: "eva@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Grace Hopper",
    email: "grace@example.com",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Henry Ford",
    email: "henry@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Isabella Cruz",
    email: "isabella@example.com",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Jack Daniels",
    email: "jack@example.com",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

const AdminDashboard = () => {
  const { user } = useAuth(); // Get the logged-in user's data
  const [users] = useState(dummyUsers);

  return (
    <div className="p-8 min-h-screen">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                User
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Details
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((userItem) => (
              <tr
                key={userItem.id}
                className="border-t border-gray-200 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-800 text-left">
                  {userItem.id}
                </td>
                <td className="px-6 py-4 flex items-center">
                  <img
                    src={userItem.avatar}
                    alt={userItem.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-sm text-gray-800">{userItem.name}</span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-800 text-left">
                  {userItem.email}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className=" text-green-600 text-sm hover:bg-green-700 transition duration-150 ease-in-out">
                      Edit
                    </button>
                    <button className="text-red-500 text-sm hover:bg-red-600 transition duration-150 ease-in-out">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
