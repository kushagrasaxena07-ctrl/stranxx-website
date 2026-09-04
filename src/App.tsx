/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EngineeredSystems } from "./components/EngineeredSystems";
import { Commitment } from "./components/Commitment";
import { EnergyStorage } from "./components/EnergyStorage";
import { ServiceSupport } from "./components/ServiceSupport";
import { Ethos } from "./components/Ethos";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <EngineeredSystems />
        <Commitment />
        <EnergyStorage />
        <ServiceSupport />
        <Ethos />
      </main>
      <Footer />
    </div>
  );
}
