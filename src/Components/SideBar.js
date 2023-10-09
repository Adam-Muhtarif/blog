import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="h-fit w-1/4 hidden md:block">
      <div className="bg-white rounded-md border px-5 pt-2 pb-4">
        <h2 className="font-semibold text-xl">
          DEV community is a community of 988,949 amazing developers
        </h2>
        <p className="py-2">
          We're a place where coders share, stay up-to-date and grow their
          careers.{" "}
        </p>
        <div className="flex flex-col justify-center space-y-3">
          <Link to="/signup">
            <button className="border w-full hover:text-white hover:bg-[#3b49df] transition-colors border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="mr-3 w-full py-1.5 px-2.5 rounded-md hover:bg-[#e2e3f3] transition-colors">
              Log in
            </button>
          </Link>
        </div>
      </div>
      <div className="py-5 space-y-1.5">
        <Link to="/" className="group">
          <div className="flex items-center p-2 rounded hover:bg-[#e2e3f3] hover:text-[#5c64c2] transition-colors">
            <div className="w-6">🏠</div>
            <h3 className="text-md group-hover:underline">Home</h3>
          </div>
        </Link>
        <Link to="/" className="group">
          <div className="flex items-center p-2 rounded hover:bg-[#e2e3f3] hover:text-[#5c64c2] transition-colors">
            <div className="w-6">📃</div>
            <h3 className="text-md group-hover:underline">Listings</h3>
          </div>
        </Link>
        <Link to="/" className="group">
          <div className="flex items-center p-2 :underline hover:bg-[#e2e3f3] hover:text-[#5c64c2] transition-colors">
            <div className="w-6">🎙</div>
            <h3 className="text-md group-hover:underline">Podcast</h3>
          </div>
        </Link>
        <Link to="/" className="group">
          <div className="flex items-center p-2 rounded hover:bg-[#e2e3f3] hover:text-[#5c64c2] transition-colors">
            <div className="w-6">📽</div>
            <h3 className="text-md group-hover:underline">Videos</h3>
          </div>
        </Link>
        <Link to="/" className="group">
          <div className="flex items-center p-2 rounded hover:bg-[#e2e3f3] hover:text-[#5c64c2] transition-colors">
            <div className="w-6">💡</div>
            <h3 className="text-md group-hover:underline">FAQ</h3>
          </div>
        </Link>
        <Link to="/" className="group">
          <div className="flex items-center p-2 rounded hover:bg-[#e2e3f3] hover:text-[#5c64c2]">
            <div className="w-6">❤</div>
            <h3 className="text-md group-hover:underline">Sponsors</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

