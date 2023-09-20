import Header from "./Components/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard";
import New from "./Pages/New";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <div className="px-32 2xl:px-72 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new" element={<New />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
}
