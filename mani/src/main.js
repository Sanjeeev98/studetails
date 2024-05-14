import React from 'react'
import Studetails from './studetails';
import Stulist from './stulist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stuedit from './stuedit';

const Main = () => {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
      <Route   path="/"  element={<Studetails/>}/>
      <Route   path="/update/:id"  element={<Stuedit/>}/>
      <Route   path="/stulist"  element={<Stulist/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
    </>
  )
}

export default Main;