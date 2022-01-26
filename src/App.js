import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Error } from './Screens/screens-index';


function App() {
  return (
    <Router>
      <div classname="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
