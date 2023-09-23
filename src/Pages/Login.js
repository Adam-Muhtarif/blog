import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../Utils/ApiFetch";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const inputRef = useRef(undefined);
  const navigate = useNavigate();

  useEffect(() => inputRef.current.focus(), []);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!inputs.email || !inputs.pass)
        return toast.error("You Must Fill All Inputs");

      await login(inputs);
      toast.success("Welcome");
      navigate("/");
    } catch (error) {
      toast.error("Failed To Login Try Again Later");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              ref={inputRef}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Password</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="password"
              onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
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
