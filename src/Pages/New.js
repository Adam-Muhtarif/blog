import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import toast from "react-hot-toast";
import { postBlog } from "../Utils/ApiFetch";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../css/confirm-dialog.css";

export default function New() {
  const auth = useAuthUser();
  const [inputs, setInputs] = useState({ author: auth()._id });
  const navigate = useNavigate();
  const formData = new FormData();

  async function handlePost() {
    if (!inputs.title || !inputs.body)
      return toast.error("Please fill in the missing information");

    Object.entries(inputs).forEach(([key, value]) =>
      formData.append(key, value)
    );
    try {
      toast.promise(
        new Promise(async (res, rej) => {
          return await postBlog(formData)
            .then((response) => {
              navigate(`/blog/${response.data.data.titleUrl}`);
              res();
            })
            .catch((error) => {
              rej(error);
              console.log(error);
            });
        }),
        {
          loading: "Publishing...",
          success: <b>Blog Published</b>,
          error: <b>Could not published, Try Again Later</b>,
        }
      );
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  function handlePostConfirmation(e) {
    e.preventDefault();
    confirmAlert({
      title: "Publishing",
      message: "Are you sure you want to publish this blog?",
      buttons: [
        {
          label: "Cancel",
          onClick: () => {},
        },
        {
          label: "Confirm Post",
          onClick: () => handlePost(),
        },
      ],
    });
  }

  return (
    <form onSubmit={(e) => handlePostConfirmation(e)}>
      <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Blog post</h2>
        <input
          type="file"
          onChange={(e) => setInputs({ ...inputs, image: e.target.files[0] })}
        />
        <div className="my-2">
          <input
            className="text-4xl font-bold w-full"
            type="text"
            placeholder="New post title here..."
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            required
          />
        </div>
        <div className="border border-gray-100 my-3"></div>

        <textarea
          className="border w-full rounded-md p-2 my-2"
          rows="10"
          placeholder="Blog content"
          onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          required
        ></textarea>
        <div className="flex justify-end ">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
