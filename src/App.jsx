import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioSite from "./PortfolioSite";
import FinbankCaseStudy from "./pages/FinbankCaseStudy";
import NoirWorkspace from "./pages/NoirWorkspace";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioSite />} />

        <Route path="/work/bank" element={<FinbankCaseStudy />} />

        <Route path="/work/noir-ai" element={<NoirWorkspace />} />
      </Routes>
    </BrowserRouter>
  );
}
