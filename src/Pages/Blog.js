import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteComment, getBlog, makeComment } from "../Utils/ApiFetch";
import BlogContent from "../Components/BlogContent";
import BlogAuthor from "../Components/BlogAuthor";
import toast from "react-hot-toast";

export default function Blog() {
  const { titleUrl } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});

  async function handleMakeComment(inputs) {
    if (!inputs.body) return toast.error("The comment field cannot be empty.");

    toast.promise(
      new Promise(async (res, rej) => {
        await makeComment({ ...inputs, blogId: blog._id })
          .then(() => {
            fetchBlog();
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

  async function handleDeleteComment(authorId, commentId) {
    toast.promise(
      new Promise(async (res, rej) => {
        await deleteComment(authorId, commentId)
          .then(() => {
            fetchBlog();
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

  async function fetchBlog() {
    try {
      const response = await getBlog(titleUrl);
      setBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error With Getting Blog Try Again Later");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return;
  return (
    <div className="flex my-5 space-x-5">
      <BlogContent
        handleDeleteComment={handleDeleteComment}
        handleMakeComment={handleMakeComment}
        blog={blog}
      />
      <BlogAuthor author={blog.author} />
    </div>
  );
}
