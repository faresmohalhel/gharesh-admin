import { TableOfTrash } from "./TableOfTrash";
export const Trash = () => {
  return (
    <>
      <main className=" px-8   pt-10 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
          <h1 className="text-center text-[30px] font-bold">
            Pending Problems
          </h1>
        </div>
        <div className="content-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 "></div>
        <TableOfTrash />
      </main>
    </>
  );
};
