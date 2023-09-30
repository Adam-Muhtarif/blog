import { useParams } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { MdOutlineDelete } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import { useState } from "react";
import { deleteComment, getBlog } from "../Utils/ApiFetch";
import toast from "react-hot-toast";

export default function Comment() {
  const { titleUrl } = useParams();
  const auth = useAuthUser();
  const [comments, setComments] = useState([]);

  async function handleChange(commentId) {
    toast.promise(
      new Promise(async (res, rej) => {
        await deleteComment(auth()._id, commentId)
          .then(() => {
            fetchComments();
            res();
          })
          .catch((error) => {
            rej(error);
            console.log(error.message);
          });
      }),
      {
        loading: "Deleting Comment...",
        success: <b>Comment Deleted</b>,
        error: (error) => <b>{error.response.data.message}</b>,
      }
    );
  }

  function handleDeleteConfirmation(commentId) {
    confirmAlert({
      title: "Confirm Change Password",
      message: "Are you sure you want to change password?",
      buttons: [
        {
          label: "Confirm",
          onClick: () => handleChange(commentId),
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  }

  async function fetchComments() {
    try {
      const response = await getBlog(titleUrl);
      setComments(response.data.data.comments);
    } catch (error) {
      toast.error("Error With Getting Comments Try Again Later");
      console.error(error);
    }
  }

  useState(() => {
    fetchComments();
  }, []);

  if (comments.length === 0) return <center>No Comments</center>;
  return comments.map((comment, i) => {
    return (
      <div key={i} className="py-5">
        <div className="flex space-x-2">
          <div className="">
            <img
              className="h-12 w-12 rounded-full"
              src={comment.authorId.avatar}
              alt="avatar"
            />
          </div>
          <div className="flex justify-between  border w-full rounded-md p-3">
            <div>
              <div className="flex items-center space-x-1">
                <h2>{comment.authorId.firstName}</h2>
                <h2 className="text-gray-500">{comment.date}</h2>
              </div>
              <p className="text-lg py-2">{comment.body}</p>
            </div>
            <div>
              {comment.authorId._id === auth()._id && (
                <button
                  className="bg-red-600 py-2 px-2 rounded-md text-white mt-2"
                  onClick={(e) => {
                    handleDeleteConfirmation(comment._id);
                  }}
                >
                  <MdOutlineDelete />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
}
