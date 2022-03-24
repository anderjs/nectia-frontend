import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// - Pages
import View from "./pages";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
