import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
export const TableOfProviders = () => {
  const handleReject = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8800/resorts/${id}`
      );

      const data = await axios.get("http://localhost:8800/resorts");
      setResorts(data.data.data.resorts);
    } catch (error) {
      console.log(error);
    }
  };
  const alert = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleReject(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    async function getResorts() {
      try {
        const response = await axios.get("http://localhost:8800/resorts");
        setResorts(response.data.data.resorts);
        console.log(resorts);
      } catch (error) {
        console.log(error);
      }
    }

    getResorts();
  }, []);

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">Providers</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full  text-sm text-left text-gray-500 ">
              <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Resorts Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Availability
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Imgs
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {resorts.map((element, index) => {
                  return (
                    <tr
                      className="border-b dark:border-gray-700"
                      key={element.id}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {element.name}
                      </th>
                      <td className="px-4 py-3">{element.location}</td>
                      <td className="px-4 py-3">{element.description}</td>
                      <td className="px-4 py-3">
                        {element.availability ? "✔" : "❌"}
                      </td>
                      <td className="px-4 py-3">🏢</td>
                      <td className="px-4 py-3 flex items-center justify-end">
                        <div
                          id=""
                          className="bg-white  rounded divide-y divide-gray-100 shadow "
                        >
                          <div
                            className="tooltip tooltip-error text-white"
                            data-tip="Delete"
                          >
                            <button
                              onClick={(event) => {
                                alert(element.id);
                              }}
                              className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
                            >
                              <AiOutlineDelete className="text-red-500 text-[15px]" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
