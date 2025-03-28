import { useAuth } from "../utils/Auth";

const Profile = () => {
  const { user, role } = useAuth();

  return (
    <div className="flex flex-col items-center mt-17">
      <img
        src="https://avatar.iran.liara.run/public"
        alt="progile image"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
      />

      <div className="mt-4">
        <p>
          <span className="font-semibold">Username:</span> {user}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {role}
        </p>
      </div>
    </div>
  );
};

export default Profile;
