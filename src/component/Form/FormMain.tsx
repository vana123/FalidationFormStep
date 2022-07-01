import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Result from './step/Result';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step1 from './step/Step1';

function FormMain() {
  return (
    <div className="FormMain">
        <h1>FORM</h1>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Step1/>}/>
            <Route path='/step2' element={<Step2/>}/>
            <Route path='/step3' element={<Step3/>}/>
            <Route path='/Result' element={<Result/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default FormMain;
