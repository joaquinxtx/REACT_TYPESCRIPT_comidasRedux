import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Detail, Main } from '../pages';

export const Navigation = () => {
  return (
    <>
    
    <Routes>
            
            <Route path="/detail/:detailId" element ={<Detail/>}/>
            <Route path="/main" element ={<Main/>}/>
            
            <Route path='/*' element={ <Navigate to='main' replace /> } />
        </Routes>
    </>
  )
}
