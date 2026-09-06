/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { ProductsPage } from "./ProductsPage";
import { AboutUsPage } from "./AboutUsPage";
import { CaseStudiesPage } from "./CaseStudiesPage";
import { CareersPage } from "./CareersPage";
import { BessPage } from "./BessPage";
import { DgPage } from "./DgPage";
import { PanelsPage } from "./PanelsPage";
import { ServoPage } from "./ServoPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-obsidian">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/bess" element={<BessPage />} />
          <Route path="/dg" element={<DgPage />} />
          <Route path="/panels" element={<PanelsPage />} />
          <Route path="/servo" element={<ServoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
