import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loading from "./components/loading";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ioraTheme";
import "./styles/global.scss";

const LandingPage = React.lazy(() => import("./layouts/landingPage"));
const Home = React.lazy(() => import("./pages/home"));
const Dialog = React.lazy(() => import("./pages/dialog"));

const Waiting = React.lazy(() => import("./components/waiting"));
const Approved = React.lazy(() => import("./components/approved"));
const Privacy = React.lazy(() => import("./components/info/privacy"));
const Terms = React.lazy(() => import("./components/info/terms"));

const Error404 = React.lazy(() => import("./components/error404"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<LandingPage />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<Dialog />}>
              <Route path="*" element={<Error404 />} />
              <Route path="/waiting" element={<Waiting />} />
              <Route path="/approved" element={<Approved />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
