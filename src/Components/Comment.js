import { MdOutlineDelete } from "react-icons/md";
export default function Comment() {
  return (
    <div className="py-5">
      <div className="flex space-x-2">
        <div className="">
          <img
            className="h-12 w-12 rounded-full"
            src="https://www.shutterstock.com/image-photo/close-headshot-portrait-picture-smiling-600w-1733598437.jpg"
            alt="avatar"
          />
        </div>

        <div className="flex justify-between  border w-full rounded-md p-3">
          <div>
            <div className="flex items-center space-x-1">
              <h2>Aisha</h2>
              <h2 className="text-gray-500">12 Jan</h2>
            </div>
            <p className="text-lg py-2">
              Thanks for this article! Such a great read hope you post more!!
            </p>
          </div>
          <div>
            <button className="bg-red-600 py-2 px-2 rounded-md text-white mt-2">
              <MdOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
