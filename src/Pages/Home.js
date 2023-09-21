import BlogCard from "../Components/BlogCard";
import SideBar from "../Components/SideBar";
import ListCard from "../Components/ListCard";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../Utils/ApiFetch";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchApi() {
    try {
      const response = await getAllBlogs();
      setBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) return;
  return (
    <div className="flex justify-between space-x-8 mt-5">
      <SideBar />
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
