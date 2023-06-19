import { SiHotelsdotcom } from "react-icons/si";
import { MdLocalHotel, MdEvent, MdEventAvailable } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";
import { BsFillTrashFill, BsFillTreeFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

export const Stats = () => {
  const [events, setEvents] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  // get total of events
  useEffect(() => {
    axios
      .get("http://localhost:5500/getactiveprobelm")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // get total of rooms
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/rooms/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // total of users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/total-users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // total of Doantions
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/getpendingprobelm")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // total of trashed hotels
  const [trashHotels, setTrashHotels] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/hotel/hotels/retrev")
      .then((response) => {
        setTrashHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // total of trashed users
  const [trashUsers, setTrashUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/users/users/retreived")
      .then((response) => {
        setTrashUsers(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="stats shadow stats-vertical xl:stats-horizontal md:stats-horizontal bg-[#5AA1C2]">
      <div className="stat">
        <div className="stat-figure text-[#222222]">
          <MdEvent className="text-[40px]" />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Total Problems
        </div>
        <div className="stat-value text-white">{events.length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <FiUsers className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Users</div>
        <div className="stat-value text-white">{users.length}</div>
      </div>
      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <FaMoneyBill className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Pending Problems
        </div>
        <div className="stat-value text-white">{requests.length}</div>
      </div>
      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <MdEventAvailable className="text-[30px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Total Finished
        </div>
        <div className="stat-value text-white">
          {trashHotels.length + trashUsers.length}
        </div>
      </div>
    </div>
  );
};
