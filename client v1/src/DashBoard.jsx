import { Nav } from "./Nav";
import { Aside } from "./Aside";
import { Main } from "./Main Page/Main";

export const DashBoard = () => {
  return (
    <>
      <div className="antialiased">
        {/* <Nav /> */}

        <Aside />

        <Main />
      </div>
    </>
  );
};
