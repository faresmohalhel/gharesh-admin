import { useState, useEffect, useReducer } from "react";
import { GrCheckmark } from "react-icons/gr";

import axios from "axios";
import DismissableModal from "../components/Modal";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
export const TableOfTrash = () => {
  const [events, setEvents] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get("http://localhost:5500/getpendingprobelm")
      .then((response) => {
        setEvents(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const handleDelete = (email) => {
    Swal.fire({
      title: ` do you want to remove ${email}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${email} has been removed `, "", "success");

        axios
          .delete("http://localhost:5500/deleteproblem/" + email)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
        forceUpdate();
      } else Swal.fire(" Cancelled", "", "error");
    });
  };
  const handleAccepted = (email) => {
    axios
      .put("http://localhost:5500/activateproblem/" + email)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Accepted Successfully ",
      showConfirmButton: false,
      timer: 1800,
    });
    // forceUpdate();
  };

  const handleRejected = (id, name) => {
    console.log(id);
    Swal.fire({
      title: `Are you sure to reject ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Reject",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been rejected `, "", "success");

        axios
          .put("http://localhost:5500/admin/hotel/hotels/request/reject/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
        // forceUpdate();
      } else Swal.fire(" Cancelled", "", "error");
    });
  };
  return (
    <>
      {events.map((event) => {
        return (
          <main className="p-4 px-8  md:ml-64 h-auto mt-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mb-4 w-full lg:w-1/2">
              <h1 className="text-[30px] font-bold py-3">{event.fullname}</h1>

              <div className="p-10 ">
                <div className="p-10 ">
                  <div className="w-full lg:max-w-full lg:flex h-full">
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="mb-8">
                        <div className="flex  items-center justify-center">
                          <div
                            className="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden h-40 mr-4 rounded-2xl"
                            title="Mountain"
                          >
                            <DismissableModal
                              image={event.images[0]}
                              classes="h-100 "
                            />
                          </div>
                          <div
                            className="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden h-40 mr-4 rounded-md "
                            title="Mountain"
                          >
                            <DismissableModal
                              image={event.images[1]}
                              classes="h-100 border-radius: 0.75rem"
                            />
                          </div>
                          <div
                            className="lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden h-40 rounded-2xl"
                            title="Mountain"
                          >
                            <DismissableModal
                              image={event.images[2]}
                              classes="h-100"
                            />
                          </div>
                        </div>
                        <div className="relative space-x-3">
                          <div
                            id=""
                            className="bg-white rounded divide-y divide-gray-100 shadow absolute right-2 top-2"
                          >
                            <div
                              className="tooltip tooltip-error text-white"
                              data-tip="Delete"
                            >
                              <button
                                onClick={() => handleDelete(event.email)}
                                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
                              >
                                <AiOutlineDelete className="text-red-500 text-[15px]" />
                              </button>
                            </div>
                          </div>
                          <div
                            className="tooltip text-white absolute top-2 right-16"
                            data-tip="Revert"
                          >
                            <button
                              onClick={() => handleAccepted(event.email)}
                              className="btn bg-white hover:bg-gray-200 shadow-lg hover:shadow-xl border-none "
                            >
                              <GrCheckmark className="text-red-500 text-[15px]" />
                            </button>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 flex items-center">
                          {event.fullname}
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">
                          {event.email}
                        </div>
                        <p className="text-gray-700 text-base">
                          {event.phoneNumber}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm flex">
                          <div className="flex flex-col w-28">
                            <span className="font-bold text-gray-900">
                              Start Date
                            </span>
                            <span>
                              {
                                new Date(event.dateOfBirth)
                                  .toISOString()
                                  .split("T")[0]
                              }
                            </span>
                          </div>
                          <div className="flex flex-col w-28">
                            <span>city</span>
                            <span>{event.city}</span>
                          </div>
                          <div className="flex flex-col w-28">
                            <span>GPA</span>
                            <span>{event.gpa}</span>
                          </div>
                          <div className="flex flex-col w-28 mr-2">
                            <span>programs</span>
                            <span>{event.program}</span>
                          </div>
                          <div className="flex flex-col w-28">
                            <span>program description</span>
                            <span>{event.problemDescription}</span>
                          </div>
                          <div className="flex flex-col w-28">
                            <span>Amount</span>
                            <span>{event.amount}</span>
                          </div>
                          <div className="flex flex-col w-28">
                            <span>raised</span>
                            <span className="overflow-scroll">
                              {event.raised}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
};
