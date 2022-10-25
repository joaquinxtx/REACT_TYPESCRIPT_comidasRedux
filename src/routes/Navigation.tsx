import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Detail, Main } from "../pages";
import { NavBar ,Footer } from '../components';


export const Navigation = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/detail/" element={<Detail />} />
        <Route path="/main" element={<Main />} />

        <Route path="/*" element={<Navigate to="main" replace />} />
      </Routes>
    <Footer/>
    </>
  );
};
