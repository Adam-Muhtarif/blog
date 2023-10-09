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
    <div className="fixed z-10 bg-white py-3 px-4 md:px-2 xl:px-36 2xl:px-72 border-b-2 w-full">
      <div className="relative h-full flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={isMenuOpen && toggleMenu}>
            <img
              className="h-10"
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
          <div className="md:hidden absolute top-full left-0 right-0 md:px-2 bg-transparent">
            <div className="bg-white border-b-2">
              {isAuthenticated() ? (
                <div className="flex flex-col gap-2 justify-between py-3 px-4">
                  <Link to="/dashboard">
                    <button
                      className="py-1.5 px-2.5 rounded-md text-blue-700 hover:bg-[#e2e3f3] transition-colors"
                      onClick={toggleMenu}
                    >
                      Profile
                    </button>
                  </Link>
                  <Link to="/new">
                    <button
                      className="border hover:bg-[#3b49df] hover:text-white transition-colors border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700"
                      onClick={toggleMenu}
                    >
                      Post Blog
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-2 py-3 px-4">
                  <Link to="/login">
                    <button
                      className="mr-3 py-1.5 px-2.5 hover:bg-[#e2e3f3] transition-colors rounded-md"
                      onClick={toggleMenu}
                    >
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="border hover:bg-[#3b49df] hover:text-white transition-colors border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700"
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
                <button className="py-1.5 px-2.5 mr-2 rounded-md hover:bg-[#e2e3f3] transition-colors">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="border hover:bg-[#3b49df] hover:text-white transition-colors border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
                  Create Account
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
