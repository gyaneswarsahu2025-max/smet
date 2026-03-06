import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import parallax from "../assets/ups-2.png";

export default function SmartPowerHero() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 120,
      particles: {
        color: { value: ["#10b981", "#06b6d4", "#60a5fa"] },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1.1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 70,
        },
        opacity: { value: { min: 0.2, max: 0.65 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3.5 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 130, duration: 0.35 },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative min-h-[520px] w-full overflow-hidden border border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.28),transparent_35%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,0.18),transparent_30%),linear-gradient(to_right,rgba(0,0,0,0.82),rgba(0,0,0,0.64))]" />
        <div className="absolute inset-0 opacity-45 [background:repeating-linear-gradient(120deg,transparent_0px,transparent_18px,rgba(255,255,255,0.12)_19px,transparent_20px)]" />
        {engineReady && (
          <Particles
            id="smart-power-particles"
            options={particleOptions}
            className="absolute inset-0 h-full w-full"
          />
        )}

        <div className="relative z-10 grid min-h-[520px] items-center gap-8 px-6 py-8 md:grid-cols-2 md:px-10 md:py-10 lg:px-14">
          <div className="order-2 md:order-1">
            <img
              src={parallax}
              alt="Server infrastructure"
              className="h-56 w-full rounded-xl object-contain     md:h-72 lg:h-80"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl text-center font-semibold leading-tight md:text-3xl lg:text-5xl">
              Smart Power.
              <br />
              Sustainable Protection.
            </h2>
            <p className="mt-5  max-w-xl text-lg text-white/90 md:text-2xl">
              Energy-efficient UPS systems built for performance, safety, and longer battery life.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 py-3 text-base font-medium backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15">
                <Download size={18} />
                Download Brochure
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/60 bg-emerald-400/10 px-6 py-3 text-base font-medium transition hover:-translate-y-0.5 hover:bg-emerald-400/20">
                Find a Distributor
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
