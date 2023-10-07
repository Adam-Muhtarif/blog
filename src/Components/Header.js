import { Link } from "react-router-dom";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  return (
    <div className="flex justify-between bg-white py-4 px-32 2xl:px-72  border-b-2">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="h-9"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
          />
        </Link>
      </div>

      {isAuthenticated() ? (
        <div className="flex items-center">
          <Link to="/new">
            <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
              Post Blog
            </button>
          </Link>
          <Link to="/dashboard">
            <div className="h-10 w-10 ml-4">
              <img className="rounded-full" src={auth().avatar} alt="avatar" />
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="mr-3">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
