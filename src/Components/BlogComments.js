import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import Comment from "./Comment";

export default function BlogComments({
  comments,
  avatar,
  makeComment,
  deleteComment,
}) {
  const auth = useAuthUser();
  const [inputs, setInputs] = useState({
    authorId: auth() && auth()._id,
  });

  return (
    <div className="border-t py-5 px-16">
      <h1 className="font-bold text-2xl">Top comment(s)</h1>

      {auth() && (
        <div className="py-5">
          <div className="flex space-x-2">
            <div className="h-12 w-12">
              <img className="rounded-full" src={avatar} alt="avatar" />
            </div>
            <textarea
              id="commentArea"
              className="border w-full rounded-md p-2"
              placeholder="Add to the discussion"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  body: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 py-2 px-3 rounded-md text-white mt-2"
              onClick={(e) => {
                makeComment(inputs);
                document.getElementById("commentArea").value = "";
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <Comment comments={comments} deleteComment={deleteComment} />
    </div>
  );
}
