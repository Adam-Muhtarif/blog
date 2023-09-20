import BlogCard from "../Components/BlogCard";
import SideBar from "../Components/SideBar";
import ListCard from "../Components/ListCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:8000/api/blog")
      .then((data) => data.json())
      .then((allBlogs) => {
        console.log(allBlogs);
      });
  }, []);
  return (
    <div className="flex justify-between space-x-8 mt-5">
      <SideBar />
      <div className="flex-1">
        <BlogCard />
        <BlogCard />
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
