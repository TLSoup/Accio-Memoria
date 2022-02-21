import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Error, Create, Activity } from './Screens/screens-index';
import { Navigation } from "./Components/component-index";


function App() {
  return (
    <Router>
      <div classname="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="activity" element={<Activity />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
