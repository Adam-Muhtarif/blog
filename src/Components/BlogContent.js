import BlogComments from "./BlogComments";
import dateFormat from "dateformat";

export default function BlogContent({
  blog,
  handleMakeComment,
  handleDeleteComment,
}) {
  return (
    <div className="flex-1">
      <div className="bg-white rounded-md">
        <div>
          <img className="rounded-t-md" src={blog.image} alt="" />
        </div>
        <div className="py-5 px-16">
          <div className="flex items-center space-x-3 py-3">
            <div className="h-12 w-12">
              <img
                className="rounded-full"
                src={blog.author.avatar}
                alt="avatar"
              />
            </div>
            <div className="leading-4">
              <h4>{blog.author.firstName}</h4>
              <small className="text-gray-400">
                {dateFormat(blog.postDate, "d mmm yy")}
              </small>
            </div>
          </div>
          <h3 className="font-bold text-5xl hover:text-sky-600">
            {blog.title}
          </h3>
          <div className="py-10">{blog.body}</div>
        </div>

        <BlogComments
          comments={blog.comments}
          blogAuthor={blog.author}
          handleMakeComment={handleMakeComment}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  );
}
