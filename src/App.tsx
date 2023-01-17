import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Layouts/Spinner";

const HomePage = lazy(() => import("./Pages/HomePage"));
const DestinationPage = lazy(() => import("./Pages/DestinationPage"));
const CrewPage = lazy(() => import("./Pages/CrewPage"));
const TechnologyPage = lazy(() => import("./Pages/TechnologyPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
