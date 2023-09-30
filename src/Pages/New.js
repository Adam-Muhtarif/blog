import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlog, postBlog, updateBlog } from "../Utils/ApiFetch";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../css/confirm-dialog.css";
import { useAuthUser } from "react-auth-kit";

export default function New() {
  const auth = useAuthUser();
  const { titleUrl } = useParams();
  const [inputs, setInputs] = useState({ author: auth()._id });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formData = new FormData();

  async function handlePostUpdate() {
    Object.entries(inputs).forEach(([key, value]) =>
      formData.append(key, value)
    );

    toast.promise(
      new Promise(async (res, rej) => {
        if (titleUrl) {
          return await updateBlog(formData)
            .then((response) => {
              navigate(`/blog/${response.data.data.titleUrl}`);
              res();
            })
            .catch((error) => {
              rej(error);
              console.log(error);
            });
        } else
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
        loading: `${titleUrl ? "Updating" : "Publishing"}...`,
        success: <b>Blog {titleUrl ? "updated" : "puplished"}</b>,
        error: <b>Could not published, Try Again Later</b>,
      }
    );
  }

  function handlePostConfirmation(e) {
    e.preventDefault();

    if (!inputs.title || !inputs.body)
      return toast.error("Please fill in the missing information");

    confirmAlert({
      title: "Publishing",
      message: "Are you sure you want to publish this blog?",
      buttons: [
        {
          label: "Cancel",
          onClick: () => {},
        },
        {
          label: `Confirm ${titleUrl ? "update" : "post"}`,
          onClick: () => handlePostUpdate(),
        },
      ],
    });
  }

  async function fetchBlog() {
    try {
      const response = await getBlog(titleUrl);
      delete response.data.data.comments;
      delete response.data.data.author;
      setInputs({ ...inputs, ...response.data.data });
      setLoading(false);
    } catch (error) {
      toast.error("Error With Getting Blog Try Again Later");
      console.error(error);
    }
  }

  useEffect(() => {
    if (titleUrl) {
      setLoading(true);
      fetchBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return;
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
            defaultValue={inputs.title}
            className="text-4xl font-bold w-full"
            type="text"
            placeholder="New post title here..."
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            required
          />
        </div>
        <div className="border border-gray-100 my-3"></div>

        <textarea
          defaultValue={inputs.body}
          className="border w-full rounded-md p-2 my-2"
          rows="10"
          placeholder="Blog content"
          onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          required
        ></textarea>
        <div className="flex justify-end ">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
            {titleUrl ? "Update" : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
}
