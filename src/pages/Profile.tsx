import { useAuth } from "../utils/Auth";

const Profile = () => {
  const { user, role } = useAuth();

  return (
    <>
      <h1>User Profile</h1>
      <p>Username: {user}</p>
      <p>Role: {role}</p>
    </>
  );
};

export default Profile;
