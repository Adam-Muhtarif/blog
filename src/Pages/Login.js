import { useEffect, useRef, useState } from "react";
import { login } from "../Utils/ApiFetch";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const emailRef = useRef();
  const [loginInputs, setLoginInputs] = useState({});
  const makeAuth = useSignIn();
  const navigate = useNavigate();

  useEffect(() => emailRef.current.focus(), []);

  async function handleLogin(e) {
    e.preventDefault();
    if (!loginInputs.email || !loginInputs.pass)
      return toast.error("Please provide your email and password");

    try {
      toast.promise(
        new Promise(async (res, rej) => {
          return await login(loginInputs)
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
          loading: "Logging in ...",
          success: (response) => <b>{response.data.message}</b>,
          error: (error) => <b>{error.response.data.message}</b>,
        }
      );
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error("Error with login");
      console.log(error.message);
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <div className="bg-white m-auto mt-10 rounded-md p-10 w-[650px] ">
        <div className="text-center">
          <h3 className="font-bold text-2xl">Welcome to DEV Community 👩‍💻👨‍💻</h3>
          <p>
            DEV Community 👩‍💻👨‍💻 is a community of 989,800 amazing developers{" "}
          </p>
        </div>
        <div className="py-3 space-y">
          <div className="flex flex-col">
            <span className="py-2">Email</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="email"
              onChange={(e) =>
                setLoginInputs({ ...loginInputs, email: e.target.value })
              }
              ref={emailRef}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Password</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="password"
              onChange={(e) =>
                setLoginInputs({ ...loginInputs, pass: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-blue-600 text-white p-3 rounded-md w-full">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
}
