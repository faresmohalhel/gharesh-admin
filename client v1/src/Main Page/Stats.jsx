import { SiHotelsdotcom } from "react-icons/si";
import { FaSwimmingPool } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";

export const Stats = () => {
  const [resorts, setResorts] = useState(30);
  const [users, setUsers] = useState(200);
  useEffect(() => {
    async function getResorts() {
      try {
        const response = await axios.get("http://localhost:8800/resorts");
        setResorts(response.data.data["resorts-count"]);
      } catch (error) {
        console.log(error);
      }
    }

    async function getUsers() {
      try {
        const response = await axios.get("http://localhost:8800/users");
        setUsers(response.data.data["users-count"]);
      } catch (error) {
        console.log(error);
      }
    }

    getResorts();
    getUsers();
  }, []);

  return (
    <div className="stats shadow stats-vertical xl:stats-horizontal md:stats-horizontal bg-[#c5a880] ">
      <div className="stat">
        <div className="stat-figure text-[#222222]">
          <FaSwimmingPool className="text-[40px]" />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Total Resorts
        </div>
        <div className="stat-value text-white">{resorts}</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222]">
          <FaSwimmingPool className="text-[40px]" />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Rooms</div>
        <div className="stat-value text-white">300</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <FiUsers className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Users</div>
        <div className="stat-value text-white">{users}</div>
      </div>
      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <CiInboxIn className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Total Requests
        </div>
        <div className="stat-value text-white">5</div>
      </div>
    </div>
  );
};
