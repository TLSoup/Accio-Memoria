import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Error } from './Screens/screens-index';
import { Navigation } from "./Components/navigation";


function App() {
  return (
    <Router>
      <div classname="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
