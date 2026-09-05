import { Hero } from "./components/Hero";
import { EngineeredSystems } from "./components/EngineeredSystems";
import { Commitment } from "./components/Commitment";
import { EnergyStorage } from "./components/EnergyStorage";
import { ServiceSupport } from "./components/ServiceSupport";
import { Ethos } from "./components/Ethos";

export function Home() {
  return (
    <main>
      <Hero />
      <EngineeredSystems />
      <Commitment />
      <EnergyStorage />
      <ServiceSupport />
      <Ethos />
    </main>
  );
}
