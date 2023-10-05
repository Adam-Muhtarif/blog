/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { getUser, updateProfile } from "../Utils/ApiFetch";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Profile() {
  const auth = useAuthUser();
  const [inputs, setInputs] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const formData = new FormData();

  function handleAvatarChange(image) {
    setSelectedImage(URL.createObjectURL(image));
  }

  async function handleSave() {
    Object.entries(inputs).forEach(([key, value]) =>
      formData.append(key, value)
    );

    toast.promise(
      new Promise(async (res, rej) => {
        await updateProfile(formData)
          .then(() => {
            navigate("/dashboard");
            res();
          })
          .catch((error) => {
            rej(error);
          });
      }),
      {
        loading: "Saving...",
        success: <b>Saved</b>,
        error: <b>Could not save, Try Again Later</b>,
      }
    );
  }

  function handleSaveConfirmation(e) {
    e.preventDefault();
    confirmAlert({
      title: "Confirm Update Profile",
      message: "Are you sure you want to save this?",
      buttons: [
        {
          label: "Cancel",
          onClick: () => {},
        },
        {
          label: "Confirm",
          onClick: () => handleSave(),
        },
      ],
    });
  }

  async function fetchUser() {
    try {
      const response = await getUser(auth()._id);
      setInputs(response.data.data);
    } catch (error) {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <form onSubmit={(e) => handleSaveConfirmation(e)}>
      <div className="m-auto  mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Edit profile</h2>
        <div className="my-2 space-y-2">
          <span>First Name</span>
          <input
            defaultValue={inputs.firstName}
            className="w-full border p-2 rounded-md"
            type="text"
            onChange={(e) =>
              setInputs({ ...inputs, firstName: e.target.value })
            }
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Second Name</span>
          <input
            defaultValue={inputs.secondName}
            className="w-full border p-2 rounded-md"
            type="text"
            onChange={(e) =>
              setInputs({ ...inputs, secondName: e.target.value })
            }
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Location</span>
          <input
            defaultValue={inputs.location}
            className="w-full border p-2 rounded-md"
            type="text"
            onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Work</span>
          <input
            defaultValue={inputs.work}
            className="w-full border p-2 rounded-md"
            type="text"
            onChange={(e) => setInputs({ ...inputs, work: e.target.value })}
          />
        </div>
        <div className="my-2 space-y-2">
          <span>Bio</span>
          <textarea
            defaultValue={inputs.bio}
            className="border w-full rounded-md p-2"
            placeholder="Bio."
            onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
          ></textarea>
        </div>
        <div className="mt-4">
          <input
            type="file"
            onChange={(e) => {
              handleAvatarChange(e.target.files[0]);
              setInputs({ ...inputs, avatar: e.target.files[0] });
            }}
          />
          <img
            className="rounded-full w-20 mt-3 mx-auto"
            src={selectedImage || inputs.avatar}
            alt="avatar"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
