import { Link, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import BlogList from "../Components/BlogList";

export default function Dashboard() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  return (
    <div className="mx-2 md:mx-12">
      <div className="py-5">
        <h3 className="font-bold text-3xl">Dashboard</h3>
      </div>
      <div className="flex space-x-2 pb-4">
        <Link to={"/profile"} className="flex-grow">
          <button className="w-full border border-blue-500 p-2 md:p-3 text-blue-500 rounded-md hover:bg-[#3b49df] hover:text-white transition-colors">
            Edit profile
          </button>
        </Link>
        <Link to="/change-password" className="flex-grow">
          <button className="w-full border border-blue-500 p-2 md:p-3 text-blue-500 rounded-md hover:bg-[#3b49df] hover:text-white transition-colors">
            Change password
          </button>
        </Link>
        <button
          className="flex-grow border border-blue-500 p-2 md:p-3 text-blue-500 rounded-md hover:bg-[#3b49df] hover:text-white transition-colors"
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
        <BlogList />
      </div>
    </div>
  );
}
