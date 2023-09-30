import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";

import Header from "./Components/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard";
import New from "./Pages/New";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";

export default function App() {
  return (
    <div>
      <Header />
      <div className="px-32 2xl:px-72 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:titleUrl" element={<Blog />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth loginPath={"/login"}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/new"
            element={
              <RequireAuth loginPath={"/login"}>
                <New />
              </RequireAuth>
            }
          />
          <Route
            path="/update/:titleUrl"
            element={
              <RequireAuth loginPath={"/login"}>
                <New />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth loginPath={"/login"}>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/change-password"
            element={
              <RequireAuth loginPath={"/login"}>
                <ChangePassword />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
