import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="">
      <div className="">
        <div className="w-4/5 m-auto bg-green-50">
          <div className="flex justify-between items-center pt-5 p-5">
            <div className="text-xl font-extrabold">
              <h2>CareerHub</h2>
            </div>

            <div className=" flex gap-5 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white py-2 px-5 rounded-md text-lg font-semibold"
                    : "text-lg font-semibold"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/appliedJob"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white py-2 px-5 rounded-md text-lg font-semibold"
                    : "text-lg font-semibold"
                }
              >
                Applied Jobs
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white py-2 px-5 rounded-md text-lg font-semibold"
                    : "text-lg font-semibold"
                }
              >
                Blog
              </NavLink>
            </div>

            <div className="bg-[#9873FF] text-white py-2 px-5 rounded-md text-lg ">
              <button>Start Applying</button>
            </div>
          </div>
        </div>
      </div>

      {/*  All  outlet */}
      <div className="">
        <div className="w-4/5 m-auto">
          <Outlet />
        </div>
      </div>
      <div className="w-4/5 m-auto mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Header;
