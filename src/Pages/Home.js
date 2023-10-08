import { useEffect, useState } from "react";
import { getAllBlogs } from "../Utils/ApiFetch";
import { useIsAuthenticated } from "react-auth-kit";
import toast from "react-hot-toast";
import SideBar from "../Components/SideBar";
import BlogCard from "../Components/BlogCard";
import ListCard from "../Components/ListCard";
import HomeLoader from "../Loading/HomeLoader";

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

  if (loading) return <HomeLoader />;
  return (
    <div className="flex mt-3 sm:gap-2 md:gap-4 ">
      {!isAuthenticated() && <SideBar />}
      <div className="flex-1">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
      <div className="hidden lg:block bg-white w-[25%] px-4 py-2 h-fit">
        <h1 className="mb-2 font-semibold text-lg">#discuss</h1>
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
}
