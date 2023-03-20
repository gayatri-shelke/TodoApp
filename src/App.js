




import * as React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home'
import Header from './component/Header';
import Card from './component/Card'

const App = () => {
  

  return (
    <Router>

    <Header/>
      <Routes>
      
        <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Register' element={<Register/>}></Route>
         <Route path='/'  element={<Home/>}></Route>
         <Route path='/Card'  element={<Card/>}></Route>

      </Routes>
    </Router>
  );
};

export default App;



// import React from 'react'
// import Hello from './component/todocard/Hello'

// export default function 
// () {
//   return (
//     <div>
//     <Hello/>
//     </div>
//   )
// }
