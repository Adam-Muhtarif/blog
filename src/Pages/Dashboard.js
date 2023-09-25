import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { getUserBlogs } from "../Utils/ApiFetch";
import BlogList from "../Components/BlogList";
import toast from "react-hot-toast";

export default function Dashboard() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [userBlogs, setUserBlogs] = useState([]);

  async function fetchApi() {
    try {
      const response = await getUserBlogs(auth()._id);
      setUserBlogs(response.data.data);
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-auto w-3/5">
      <div className="py-5">
        <h3 className="font-bold text-3xl">Dashboard</h3>
      </div>
      <div className="flex space-x-2 pb-4">
        <Link to="/profile" className="flex-1">
          <button className="w-full border border-blue-500 p-3 text-blue-500 rounded-md">
            Edit profile
          </button>
        </Link>
        <Link to="/change" className="flex-1">
          <button className="w-full  border border-blue-500 p-3 text-blue-500 rounded-md">
            Change password
          </button>
        </Link>
        <button
          className="flex-1 border border-blue-500 p-3 text-blue-500 rounded-md"
          onClick={() => {
            signOut();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="bg-white p-5 rounded-md">
        <h3 className="font-bold">Posts</h3>
        <BlogList blogs={userBlogs} />
      </div>
    </div>
  );
}
