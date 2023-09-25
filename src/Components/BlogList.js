import { useAuthUser } from "react-auth-kit";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useRef } from "react";
import { deleteBlog } from "../Utils/ApiFetch";
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../css/confirm-dialog.css";

export default function BlogList({ blogs }) {
  const auth = useAuthUser();
  const rows = useRef([]);

  function handleDeleteConfirmation(userId, blogId, rowId) {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this blog?",
      buttons: [
        {
          label: "Confirm Delete",
          onClick: () => handleDelete(userId, blogId, rowId),
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  }

  async function handleDelete(userId, blogId, rowId) {
    try {
      toast.promise(
        new Promise((res, rej) => {
          deleteBlog(userId, blogId)
            .then(() => {
              rows.current.forEach((row) => {
                if (Number(row.id) === rowId) {
                  row.remove();
                }
              });
              res();
            })
            .catch((error) => {
              rej(error);
            });
        }),
        {
          loading: "Deleting...",
          success: <b>Blog Deleted</b>,
          error: <b>Could not delete, Try Again Later</b>,
        }
      );
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className="mt-5">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left h-10 text-sm">
            <th>Blog Title</th>
            <th>
              <center>Edit</center>
            </th>
            <th>
              <center>Delete</center>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, i) => (
            <tr
              key={i}
              id={i}
              className="border-y h-10"
              ref={(ref) => (rows.current[i] = ref)}
            >
              <td>{blog.title}</td>
              <td>
                <center>
                  <CiEdit className="text-blue-300 hover:text-blue-800 transition hover:cursor-pointer  " />
                </center>
              </td>
              <td>
                <center>
                  <MdOutlineDelete
                    className="text-red-300 hover:text-red-500 transition hover:cursor-pointer hover:scale-200"
                    id={blog._id}
                    onClick={(e) =>
                      handleDeleteConfirmation(auth()._id, e.target.id, i)
                    }
                  />
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
