import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "./imports";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
