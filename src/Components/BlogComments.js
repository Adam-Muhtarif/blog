import Comment from "./Comment";

export default function BlogComments({ comments, author }) {
  return (
    <div className="border-t py-5 px-16">
      <h1 className="font-bold text-2xl">Top comment(s)</h1>
      <div className="py-5">
        <div className="flex space-x-2">
          <div className="h-12 w-12">
            <img className="rounded-full" src={author.avatar} alt="avatar" />
          </div>
          <textarea
            className="border w-full rounded-md p-2"
            placeholder="Add to the discussion"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 py-2 px-3 rounded-md text-white mt-2">
            Submit
          </button>
        </div>
      </div>
      
      {comments.length === 0 && <center>No Comments</center>}
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
}
