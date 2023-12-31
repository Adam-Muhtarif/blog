import { useAuthUser } from "react-auth-kit";
import { MdOutlineDelete } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import dateFormat from "dateformat";

export default function Comment({ comments, handleDeleteComment }) {
  const auth = useAuthUser();

  function handleDeleteConfirmation(commentId) {
    confirmAlert({
      title: "Confirm Change Password",
      message: "Are you sure you want to change password?",
      buttons: [
        {
          label: "Confirm",
          onClick: () => handleDeleteComment(auth()._id, commentId),
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  }

  if (comments.length === 0) return <center>No Comments</center>;
  return comments.map((comment, i) => {
    return (
      <div key={i} className="py-5">
        <div className="flex space-x-2">
          <div className="">
            <img
              className="h-8 rounded-full"
              src={comment.authorId.avatar}
              alt="avatar"
            />
          </div>
          <div className="flex justify-between  border w-full rounded-md p-3">
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="text-sm">{comment.authorId.firstName}</h1>
                <small className="text-gray-500">
                  {dateFormat(comment.date, "mmm yy")}
                </small>
              </div>
              <p className="text-base py-2">{comment.body}</p>
            </div>
            <div>
              {auth()?._id === comment.authorId._id && (
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
