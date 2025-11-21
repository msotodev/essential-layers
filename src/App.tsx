import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const GettingStarted = lazy(() => import("./pages/docs/GettingStarted"));
const EssentialLayersCore = lazy(() => import("./pages/docs/EssentialLayersCore"));
const EssentialLayersRequest = lazy(() => import("./pages/docs/EssentialLayersRequest"));
const Layout = lazy(() => import("./components/Layout"));
const EssentialLayersData = lazy(() => import("./pages/docs/EssentialLayersDapper"));
const EssentialLayersAzureBlobs = lazy(() => import("./pages/docs/EssentialLayersAzureBlobs"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/essential-layers" element={<EssentialLayersCore />} />
        <Route path="/docs/essential-layers-request" element={<EssentialLayersRequest />} />
        <Route path="/docs/essential-layers-dapper" element={<EssentialLayersData />} />
        <Route path="/docs/essential-layers-azure-blobs" element={<EssentialLayersAzureBlobs />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Toaster position="top-right" toastOptions={{
        duration: 3000,
        position: 'bottom-right',
        style: {
          background: '#eff6ff',
          color: '#000',
          borderRadius: '4px',
        },
      }} />
    </Layout>
  );
}

export default App;