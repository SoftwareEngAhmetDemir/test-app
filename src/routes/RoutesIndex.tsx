import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Create from "../Components/Create";
import Detail from "../Components/Detail";
import Home from "../Components/Home";

function RoutesIndex(){

    return (
      <div>
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="detail/:index" element={<Detail />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
}

export default RoutesIndex;