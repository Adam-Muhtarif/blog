import { useEffect, useState, useRef } from "react";
import { signup } from "../Utils/ApiFetch";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const [inputs, setInputs] = useState({});
  const inputRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => inputRefs.current.focus(), []);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const { firstName, secondName, email, pass } = inputs;
      if (!firstName || !secondName || !email || pass.length < 5) {
        return console.log(
          "All Fields Must Filled And Password Must be More Than 5"
        );
      }

      // Send To Server
      inputs.avatar = "";
      await signup(inputs);

      // Alert And Navigate
      toast.success("Account Created Welcome");
      navigate("/");
    } catch (error) {
      toast.error("Failed To Create Account, Try Again Later");
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
            <span className="py-2">First Name</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="text"
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
              ref={inputRefs}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Second Name</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="text"
              onChange={(e) =>
                setInputs({ ...inputs, secondName: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Email</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="email"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="py-2">Password</span>
            <input
              className="border border-gray-300 p-2 rounded-md"
              type="password"
              onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
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
                setInputs({ ...inputs, avatar: e.target.files[0] })
              }
              minLength={5}
              required
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
