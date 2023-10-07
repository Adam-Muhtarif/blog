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
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <div>
      <Header />
      <div className="px-32 2xl:px-72">
        <Routes>
          <Route exact path="/blog/" element={<Home />} />
          <Route path="/blog/login" element={<Login />} />
          <Route path="/blog/signup" element={<Signup />} />
          <Route path="/blog/:titleUrl" element={<Blog />} />
          <Route
            path="/blog/dashboard"
            element={
              <RequireAuth loginPath={"/blog/login"}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/blog/new"
            element={
              <RequireAuth loginPath={"/blog/login"}>
                <New />
              </RequireAuth>
            }
          />
          <Route
            path="/blog/update/:titleUrl"
            element={
              <RequireAuth loginPath={"/blog/login"}>
                <New />
              </RequireAuth>
            }
          />
          <Route
            path="/blog/profile"
            element={
              <RequireAuth loginPath={"/blog/login"}>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/blog/change-password"
            element={
              <RequireAuth loginPath={"/blog/login"}>
                <ChangePassword />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
