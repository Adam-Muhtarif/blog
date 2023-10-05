import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import Comment from "./Comment";

export default function BlogComments({
  comments,
  blogAuthor,
  handleMakeComment,
  handleDeleteComment,
}) {
  const auth = useAuthUser();
  const [commentContent, setCommentContent] = useState({
    authorId: auth() && auth()._id,
  });

  return (
    <div className="border-t py-5 px-16">
      <h1 className="font-bold text-2xl">Top comment(s)</h1>
      {auth() && auth()._id !== blogAuthor._id && (
        <div className="py-5">
          <div className="flex space-x-2">
            <div className="h-12 w-12">
              <img
                className="rounded-full"
                src={auth()?.avatar}
                alt="avatar"
              />
            </div>
            <textarea
              value={commentContent.body}
              className="border w-full rounded-md p-2"
              placeholder="Add to the discussion"
              onChange={(e) => {
                setCommentContent({
                  ...commentContent,
                  body: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 py-2 px-3 rounded-md text-white mt-2"
              onClick={(e) => {
                handleMakeComment(commentContent);
                setCommentContent({ ...commentContent, body: "" });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <Comment comments={comments} handleDeleteComment={handleDeleteComment} />
    </div>
  );
}
