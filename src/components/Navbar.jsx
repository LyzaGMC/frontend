import React, { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useToken } from "../context/TokenContext"; // Import useToken hook
// import { logout } from "../services/LoginService"; // Uncomment if using logout function

const Navbar = () => {
  const { token, clearToken } = useToken();

  useEffect(() => {
    console.log("Stored Token:", token);
  }, [token]);

  const handleLogout = async () => {
    try {
      // Uncomment if using a logout function
      // const success = await logout(token); // Pass the token to logout function
      // if (success) {
      //   console.log("User logged out successfully");
      // }
      clearToken(); // Clear token from context and localStorage
      window.location.reload();
    } catch (error) {
      console.error("Failed to log out:", error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between w-full bg-color6 items-center h-10 px-20">
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <MdOutlineEmail size={18} className="text-color7" />
              <p className="font-semibold text-xs text-white">
                lyzabouabib@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt size={18} className="text-color7" />
              <p className="font-semibold text-xs text-white">
                Contact : +41 6 00 00 00
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CiTimer size={18} className="text-color7" />
              <p className="font-semibold text-xs text-white">
                Work Time : 06:30 - 22:00
              </p>
            </div>
          </div>
          {!token ? (
            <div className="flex flex-row gap-2 items-center">
              <Link
                to="/login"
                className="text-white font-semibold cursor-pointer hover:text-color7"
              >
                Se Connecter
              </Link>
              <Link
                to="/register"
                className="text-white font-semibold cursor-pointer hover:text-color7"
              >
                S'inscrire
              </Link>
            </div>
          ) : (
            <div
              onClick={handleLogout}
              className="rounded-xl cursor-pointer hover:opacity-90 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all"
            >
              <p className="px-9 py-1 text-center">Se déconnecter</p>
            </div>
          )}
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
