import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './Screens/home';
import { Error } from './Screens/Error'


function App() {
  return (
    <Router>
      <div classname="App">
        <Routes>
          <Route index element={<Home/>}/>
          <Route index element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
