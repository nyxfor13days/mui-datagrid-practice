import { Routes, Route } from "react-router-dom";

import Episodes from "./Episodes";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Episodes />} />
    </Routes>
  );
};

export default RootRouter;
