import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Create, Activity } from './Screens/screens-index';
import { Navigation } from "./Components/component-index";

/* To-Do: 
    * Add Pages:
      * Create Account
      * Sign In
      * Account
      * Task Detail
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="activity" element={<Activity />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
