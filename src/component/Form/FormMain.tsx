import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Result from './step/Result';
import Stap2 from './step/Stap2';
import Stap3 from './step/Stap3';
import Stap1 from './step/Step1';

function FormMain() {
  return (
    <div className="FormMain">
        <h1>FORM</h1>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Stap1/>}/>
            <Route path='/stap2' element={<Stap2/>}/>
            <Route path='/stap3' element={<Stap3/>}/>
            <Route path='/Result' element={<Result/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default FormMain;
