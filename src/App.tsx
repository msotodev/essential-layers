import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import GettingStarted from "./pages/docs/GettingStarted";
import EssentialLayersCore from "./pages/docs/EssentialLayersCore";
import EssentialLayersRequest from "./pages/docs/EssentialLayersRequest";
import Layout from "./components/Layout";
import EssentialLayersData from "./pages/docs/EssentialLayersData";
import EssentialLayersAzureBlobs from "./pages/docs/EssentialLayersAzureBlobs";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Documentación */}
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/essential-layers" element={<EssentialLayersCore />} />
        <Route path="/docs/essential-layers-request" element={<EssentialLayersRequest />} />
        <Route path="/docs/essential-layers-data" element={<EssentialLayersData />} />
        <Route path="/docs/essential-layers-azure-blobs" element={<EssentialLayersAzureBlobs />} />

        {/* 404 → Redirige a Home o a una página de error */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;