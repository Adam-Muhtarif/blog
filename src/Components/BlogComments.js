import { useAuthUser } from "react-auth-kit";
import { useEffect, useState } from "react";
import { getBlog, makeComment } from "../Utils/ApiFetch";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import toast from "react-hot-toast";

export default function BlogComments({ author }) {
  const auth = useAuthUser();
  const { titleUrl } = useParams();
  const [inputs, setInputs] = useState({});

  async function handleMakeComment() {
    if (!inputs.body) return toast.error("The comment field cannot be empty.");

    toast.promise(
      new Promise(async (res, rej) => {
        await makeComment(inputs)
          .then(() => {
            document.getElementsByTagName("textarea")[0].value = "";
            res();
          })
          .catch((error) => {
            rej(error);
            console.log(error.message);
          });
      }),
      {
        loading: "Making your Comment...",
        success: <b>Comment posted</b>,
        error: (error) => <b>{error.response.data.message}</b>,
      }
    );
  }

  async function fetchBlog() {
    try {
      const response = await getBlog(titleUrl);
      setInputs({
        ...inputs,
        blogId: response.data.data._id,
      });
    } catch (error) {
      toast.error("Error With Getting Comments Try Again Later");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-t py-5 px-16">
      <h1 className="font-bold text-2xl">Top comment(s)</h1>

      {auth() && (
        <div className="py-5">
          <div className="flex space-x-2">
            <div className="h-12 w-12">
              <img className="rounded-full" src={author.avatar} alt="avatar" />
            </div>
            <textarea
              className="border w-full rounded-md p-2"
              placeholder="Add to the discussion"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  authorId: auth()._id,
                  body: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 py-2 px-3 rounded-md text-white mt-2"
              onClick={handleMakeComment}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <Comment />
    </div>
  );
}
