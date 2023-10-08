import { Link } from "react-router-dom";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex justify-between bg-white py-4 px-12 md:px-24 2xl:px-72 border-b-2  relative">
      <div className="flex items-center">
        <Link to="/" onClick={isMenuOpen && toggleMenu}>
          <img
            className="h-9"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
          />
        </Link>
      </div>

      <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FiX className="w-8 h-8" />
        ) : (
          <FiMenu className="w-8 h-8" />
        )}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-12 bg-transparent">
          <div className="bg-white border-b-2">
            {isAuthenticated() ? (
              <div className="flex items-center justify-between py-3 px-4">
                <Link to="/new">
                  <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
                    Post Blog
                  </button>
                </Link>
                <Link to="/dashboard">
                  <div className="h-10 w-10">
                    <img
                      className="rounded-full"
                      src={auth().avatar}
                      alt="avatar"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 py-3 px-4">
                <Link to="/login">
                  <button className="mr-3" onClick={toggleMenu}>
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700"
                    onClick={toggleMenu}
                  >
                    Create Account
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center">
        {isAuthenticated() ? (
          <div className="flex items-center">
            <Link to="/new">
              <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
                Post Blog
              </button>
            </Link>
            <Link to="/dashboard">
              <div className="h-10 w-10 ml-4">
                <img
                  className="rounded-full"
                  src={auth().avatar}
                  alt="avatar"
                />
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
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
    </div>
  );
}
