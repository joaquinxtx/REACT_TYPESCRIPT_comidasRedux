import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Detail, Main } from "../pages";
import { NavBar ,Footer } from '../components';


export const Navigation = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/category/:id" element={<Main />} />
        <Route path="/*" element={<Navigate to="/category/todos" />} />
      </Routes>
    <Footer/>
    </>
  );  
};
