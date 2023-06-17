import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from "./DashBoard";
import { Main } from "./Main Page/Main";

import { Hotels } from "./Providers Page/Hotels";
import { Users } from "./Users Page/Users";
import { Requests } from "./Requests Page/Requests";
import { Nav } from "./Nav";
import { Aside } from "./Aside";
import { NumbersProvider } from "./context/stats";

import React from "react";

export const UserContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <NumbersProvider>
        <Nav />
        <Aside />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/main" element={<Main />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/users" element={<Users />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </NumbersProvider>
    </BrowserRouter>
  );
}

export default App;
