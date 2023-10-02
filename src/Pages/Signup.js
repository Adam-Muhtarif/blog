import { useEffect, useState, useRef } from "react";
import { signup } from "../Utils/ApiFetch";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import toast from "react-hot-toast";

export default function Signup() {
  const firstNameRef = useRef();
  const [signUpContent, setSignUpContent] = useState({});
  const makeAuth = useSignIn();
  const formData = new FormData();
  const navigate = useNavigate();

  useEffect(() => firstNameRef.current.focus(), []);

  async function handleSignUp(e) {
    e.preventDefault();

    const { firstName, secondName, email, pass } = signUpContent;
    if (!firstName || !secondName || !email || pass.length < 5) {
      return toast.error(
        "Please fill in all required fields and password must be at least than 5 chars"
      );
    }

    Object.entries(signUpContent).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      toast.promise(
        new Promise(async (res, rej) => {
          return await signup(formData)
            .then((response) => {
              makeAuth({
                token: response.data.data.token,
                expiresIn: 3600,
                authState: response.data.data,
              });
              navigate(`/`);
              res(response);
            })
            .catch((error) => {
              rej(error);
              console.log(error.message);
            });
        }),
        {
          loading: "Creating Your Account...",
          success: (response) => <b>{response.data.message}</b>,
          error: (error) => <b>{error.response.data.message}</b>,
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
    <form onSubmit={(e) => handleSignUp(e)}>
      <div className="bg-white m-auto mt-10 rounded-md p-10 w-[650px] ">
        <div className="text-center">
          <h3 className="font-bold text-2xl">Welcome to DEV Community 👩‍💻👨‍💻</h3>
          <p>
            DEV Community 👩‍💻👨‍💻 is a community of 989,800 amazing developers{" "}
          </p>
        </div>
        <div className="py-3 space-y">
          <div className="flex flex-col">
            <span className="py-2">First Name</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="text"
              onChange={(e) =>
                setSignUpContent({
                  ...signUpContent,
                  firstName: e.target.value,
                })
              }
              ref={firstNameRef}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Second Name</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="text"
              onChange={(e) =>
                setSignUpContent({
                  ...signUpContent,
                  secondName: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Email</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="email"
              onChange={(e) =>
                setSignUpContent({ ...signUpContent, email: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Password</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="password"
              onChange={(e) =>
                setSignUpContent({ ...signUpContent, pass: e.target.value })
              }
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Profile Image</span>
            <input
              name="avatar"
              className="border border-gray-300 p-2 rounded-md"
              type="file"
              onChange={(e) =>
                setSignUpContent({
                  ...signUpContent,
                  avatar: e.target.files[0],
                })
              }
            />
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-blue-600 text-white p-3 rounded-md w-full">
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
}
