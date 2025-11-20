import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const GettingStarted = lazy(() => import("./pages/docs/GettingStarted"));
const EssentialLayersCore = lazy(() => import("./pages/docs/EssentialLayersCore"));
const EssentialLayersRequest = lazy(() => import("./pages/docs/EssentialLayersRequest"));
const Layout = lazy(() => import("./components/Layout"));
const EssentialLayersData = lazy(() => import("./pages/docs/EssentialLayersData"));
const EssentialLayersAzureBlobs = lazy(() => import("./pages/docs/EssentialLayersAzureBlobs"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/essential-layers" element={<EssentialLayersCore />} />
        <Route path="/docs/essential-layers-request" element={<EssentialLayersRequest />} />
        <Route path="/docs/essential-layers-data" element={<EssentialLayersData />} />
        <Route path="/docs/essential-layers-azure-blobs" element={<EssentialLayersAzureBlobs />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;