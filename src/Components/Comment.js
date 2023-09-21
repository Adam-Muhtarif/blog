import { MdOutlineDelete } from "react-icons/md";
export default function Comment({ comment }) {
  return (
    <div className="py-5">
      <div className="flex space-x-2">
        <div className="">
          <img
            className="h-12 w-12 rounded-full"
            src={comment.authorId.avatar}
            alt="avatar"
          />
        </div>

        <div className="flex justify-between  border w-full rounded-md p-3">
          <div>
            <div className="flex items-center space-x-1">
              <h2>{comment.authorId.firstName}</h2>
              <h2 className="text-gray-500">{comment.date}</h2>
            </div>
            <p className="text-lg py-2">{comment.body}</p>
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
