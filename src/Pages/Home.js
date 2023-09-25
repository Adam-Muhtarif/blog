import BlogCard from "../Components/BlogCard";
import SideBar from "../Components/SideBar";
import ListCard from "../Components/ListCard";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../Utils/ApiFetch";
import toast from "react-hot-toast";
import { useIsAuthenticated } from "react-auth-kit";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useIsAuthenticated();

  async function fetchApi() {
    try {
      const response = await getAllBlogs();
      setBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) return;
  return (
    <div className="flex justify-between space-x-8 mt-5">
      {!isAuthenticated() && <SideBar />}
      <div className="flex-1">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} author={blog.author} />
        ))}
      </div>
      <div className="w-[25%]">
        <div className="bg-slate-50 py-2 rounded-md">
          <div className="flex justify-between items-center px-5 py-2">
            <h3 className="font-bold">Listings</h3>
            <small className="text-blue-700 font-semibold">See all</small>
          </div>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </div>
  );
}
