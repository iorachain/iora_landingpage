import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ioraTheme";
import "./styles/global.scss";

const LandingPage = React.lazy(() => import("./layouts/landingPage"));
const Home = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<LandingPage />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
