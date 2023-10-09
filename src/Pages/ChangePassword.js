import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { confirmAlert } from "react-confirm-alert";
import { changePassword } from "../Utils/ApiFetch";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const auth = useAuthUser();
  const [inputs, setInputs] = useState({ userId: auth()._id });
  const navigate = useNavigate();

  async function handleChange() {
    toast.promise(
      new Promise(async (res, rej) => {
        await changePassword(inputs)
          .then(() => {
            navigate("/dashboard");
            res();
          })
          .catch((error) => {
            rej(error);
            console.log(error.message);
          });
      }),
      {
        loading: "Changing Password...",
        success: <b>Password Changed</b>,
        error: (error) => <b>{error.response.data.message}</b>,
      }
    );
  }

  function handleChangeConfirmation(e) {
    e.preventDefault();

    if ((!inputs.oldPassword, !inputs.newPassword, !inputs.confirmPassword))
      return toast.error("Please fill in the missing information");

    if (inputs.newPassword.length < 5)
      return toast.error("New password must be longer than 5 chars");

    if (inputs.newPassword !== inputs.confirmPassword)
      return toast.error(
        "New password and confirm new password must match each other"
      );

    confirmAlert({
      title: "Confirm Change Password",
      message: "Are you sure you want to change password?",
      buttons: [
        {
          label: "Cancel",
          onClick: () => {},
        },
        {
          label: "Confirm",
          onClick: () => handleChange(),
        },
      ],
    });
  }

  return (
    <form onSubmit={(e) => handleChangeConfirmation(e)}>
      <div className="mx-12 md:mx-44 mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Change Password</h2>
        <p className="text-gray-500 pb-4 text-center">
          Make sure your new password is a strong password. Do mix letters and
          special characters
        </p>
        <div className="my-2 space-y-2">
          <span>Enter old password</span>
          <input
            className="w-full border p-2 rounded-md"
            type="password"
            onChange={(e) =>
              setInputs({ ...inputs, oldPassword: e.target.value })
            }
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Enter new password</span>
          <input
            className="w-full border p-2 rounded-md"
            type="password"
            onChange={(e) =>
              setInputs({ ...inputs, newPassword: e.target.value })
            }
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Confirm new password</span>
          <input
            className="w-full border p-2 rounded-md"
            type="password"
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md">
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
}
