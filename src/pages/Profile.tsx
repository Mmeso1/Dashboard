import { useAuth } from "../utils/Auth";

const Profile = () => {
  const { user, role } = useAuth();

  return (
    <>
      <h1 className="text-2xl font-semibold my-10">User Profile</h1>
      <p>
        <span className="font-semibold">Username:</span> {user}
      </p>
      <p>
        <span className="font-semibold">Role:</span> {role}
      </p>
    </>
  );
};

export default Profile;
