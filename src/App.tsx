import React from 'react';
import './App.css';


import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import ProductCard from './component/producrcard/ProductCard';
   import Home from "./component/home/Home"

// import Content from './component/component/Component';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path="/pro/:id" element={<ProductCard/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
