import React from "react";
import { Route, Routes } from "react-router-dom";

import { Todos } from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
    </Routes>
  );
};

export default App;
