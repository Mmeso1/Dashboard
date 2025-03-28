import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Login, Dashboard, Profile, Settings, Logout } from "./pages";
import { AuthProvider, useAuth } from "./utils/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./App.css";
import "./index.css";

function Navbar() {
  const { user, role } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          {user ? (
            <NavLink
              to="/logout"
              style={({ isActive }) => ({
                color: isActive ? "#538000" : "#333000",
              })}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "#538000" : "#333000",
              })}
            >
              Login
            </NavLink>
          )}
        </li>
        <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "#538000" : "#333000",
            })}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? "#538000" : "#333000",
            })}
          >
            Profile
          </NavLink>
        </li>
        <li>
          {role === "admin" && (
            <NavLink
              to="/settings"
              style={({ isActive }) => ({
                color: isActive ? "#538000" : "#333000",
              })}
            >
              Settings
            </NavLink>
          )}
        </li>
      </ul>
      <div>
        {user && role && (
          <>
            <p>{user}</p>
            <p>{role}</p>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
