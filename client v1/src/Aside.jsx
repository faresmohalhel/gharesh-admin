import { Link } from "react-router-dom";
import { SiHotelsdotcom, SiCircle } from "react-icons/si";
import { MdLocalHotel } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NumbersContext } from "./context/stats";

export const Aside = () => {
  const { requestsCount, setRequestsCount } = useContext(NumbersContext);
  const [resorts, setResorts] = useState([]);
  const [zaza, setZaza] = useState(1);

  useEffect(() => {
    async function getResorts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/pending-resorts"
        );
        // setResorts(response.data.data["resorts-count"]);
        setRequestsCount(response.data.data["resorts-count"]);
        setZaza(response.data.data["resorts-count"]);
        console.log(requestsCount);
        console.log(response.data.data["resorts-count"]);
        // console.log(resorts);
      } catch (error) {
        console.log(error);
      }
    }

    getResorts();
  }, [zaza]);
  return (
    <aside
      className="fixed top-0 left-1 z-50 w-64  h-screen pt-14 pb-1 transition-transform -translate-x-full  md:translate-x-0  "
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-[#222] rounded-2xl">
        <ul className="space-y-2">
          <li>
            <Link
              to="main"
              className="flex items-center p-2 text-base font-medium text-white rounded-lg  hover:bg-[#c5a880] hover:text-black "
            >
              {/* <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-60 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg> */}
              <SiCircle />
              <span className="ml-3">Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/hotels"
              className="flex items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#c5a880] hover:text-black dark:text-white dark:hover:bg-gray-700"
            >
              <SiHotelsdotcom />
              Resorts
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#c5a880] hover:text-black "
            >
              <FiUsers />
              Users
            </Link>
          </li>

          <li>
            <Link
              to="/requests"
              className="flex items-center p-2 text-base font-medium text-white  rounded-lg dark:text-white hover:bg-[#c5a880] hover:text-black  group"
            >
              <CiInboxIn />
              <span className="flex-1 ml-3 whitespace-nowrap">Requests</span>
              <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-white bg-black">
                {requestsCount ? requestsCount : 0}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
