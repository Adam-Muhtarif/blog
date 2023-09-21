import BlogComments from "./BlogComments";

export default function BlogContent({ blog, author }) {
  return (
    <div className="flex-1">
      <div className="bg-white rounded-md">
        <div>
          <img className="rounded-t-md" src={blog.image} alt="blogImage" />
        </div>
        <div className="py-5 px-16">
          <div className="flex items-center space-x-3 py-3">
            <div className="h-12 w-12">
              <img className="rounded-full" src={author.avatar} alt="avatar" />
            </div>
            <div className="leading-4">
              <h4>{author.firstName}</h4>
              <small className="text-gray-400">Jan 12</small>
            </div>
          </div>
          <h3 className="font-bold text-5xl hover:text-sky-600">
            {blog.title}
          </h3>
          <div className="py-10">{blog.body}</div>
        </div>

        <BlogComments comments={blog.comments} author={author} />
      </div>
    </div>
  );
}
