import { useAuthUser } from "react-auth-kit";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { deleteBlog, getUserBlogs } from "../Utils/ApiFetch";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../css/confirm-dialog.css";

export default function BlogList() {
  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuthUser();

  async function handleDelete(blogId) {
    toast.promise(
      new Promise((res, rej) => {
        deleteBlog(auth()._id, blogId)
          .then(() => {
            fetchBlogs();
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
  }

  function handleDeleteConfirmation(userId, blogId) {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this blog?",
      buttons: [
        {
          label: "Confirm Delete",
          onClick: () => handleDelete(userId, blogId),
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  }

  async function fetchBlogs() {
    try {
      const response = await getUserBlogs(auth()._id);
      setUserBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return;
  if (userBlogs.length === 0)
    return (
      <center>
        You haven't published any blogs yet. Try creating your first blog
      </center>
    );
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
          {userBlogs.map((blog, i) => (
            <tr key={i} className="border-y h-10">
              <td>{blog.title}</td>
              <td>
                <center>
                  <Link to={`/update/${blog.titleUrl}`}>
                    <CiEdit className="text-blue-300 hover:text-blue-800 transition hover:cursor-pointer  " />
                  </Link>
                </center>
              </td>
              <td>
                <center>
                  <MdOutlineDelete
                    className="text-red-300 hover:text-red-500 transition hover:cursor-pointer hover:scale-200"
                    onClick={() => handleDeleteConfirmation(blog._id)}
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
