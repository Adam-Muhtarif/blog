import { Link } from "react-router-dom";
import dateformat from "dateformat";
import { FaRegComment } from "react-icons/fa";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.titleUrl}`}>
      <div className="bg-white border rounded-md mb-4">
        <div>
          <img className="rounded-t-md" src={blog.image} alt="" />
        </div>
        <div className="flex space-x-3 p-6">
          <div className="h-12 w-12">
            <img
              className="rounded-full"
              src={blog.author.avatar}
              alt="avatar"
            />
          </div>
          <div className="space-y-1.5">
            <div className="leading-4">
              <h4>{blog.author.firstName}</h4>
              <small className="text-gray-400">
                {dateformat(blog.postDate, "d mmm yy")}
              </small>
            </div>
            <div>
              <h3 className="font-bold text-2xl hover:text-sky-600">
                {blog.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1.5">
              <FaRegComment size={15} className="text-gray-700" />
              <small className="text-gray-700">
                {blog.comments.length} Comments
              </small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}