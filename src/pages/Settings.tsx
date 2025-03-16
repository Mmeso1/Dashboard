import { useAuth } from "../utils/Auth";
import { useEffect } from "react";

const Settings = () => {
  const { role } = useAuth();
  useEffect(() => {
    if (role !== "admin") {
      const timer = setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [role]);

  return (
    <>
      {role === "admin" ? (
        <h1>Welcome to Settings page</h1>
      ) : (
        <>
          <p>You need to be an admin to access this page</p>
          <p>Redirecting...</p>
        </>
      )}
    </>
  );
};

export default Settings;
