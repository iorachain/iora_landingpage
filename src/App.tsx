import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MemoryRouter>
            <Suspense fallback={<Loading />}>
      <Routes>
        <Route></Route>
      </Routes>
              </Suspense>
    </MemoryRouter>
  );
}

export default App;
