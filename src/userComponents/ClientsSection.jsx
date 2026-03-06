import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const rowOne = [
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft" },
  { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon" },
  { name: "IBM", logo: "https://cdn.simpleicons.org/ibm" },
  { name: "Siemens", logo: "https://cdn.simpleicons.org/siemens" },
  { name: "Cisco", logo: "https://cdn.simpleicons.org/cisco" },
  { name: "Accenture", logo: "https://cdn.simpleicons.org/accenture" },
];

const rowTwo = [
  { name: "Infosys", logo: "https://cdn.simpleicons.org/infosys" },
  { name: "Wipro", logo: "https://cdn.simpleicons.org/wipro" },
  { name: "Tata", logo: "https://cdn.simpleicons.org/tata" },
  { name: "HCL", logo: "https://cdn.simpleicons.org/hcl" },
  { name: "Bosch", logo: "https://cdn.simpleicons.org/bosch" },
  { name: "Capgemini", logo: "https://cdn.simpleicons.org/capgemini" },
];

function LogoTrack({ items, reverse = false }) {
  const content = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {content.map((item, index) => (
          <Motion.article
            key={`${item.name}-${index}`}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group mx-2 flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-gray-300 bg-white/90 px-5 py-4 shadow-sm backdrop-blur transition-colors duration-300 hover:border-emerald-500/60 hover:bg-white md:min-w-[210px]"
          >
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              className="h-20 w-20 rounded-md object-contain"
              loading="lazy"
            />
            {/* <span className="text-sm font-medium text-gray-800 transition-colors group-hover:text-emerald-700 md:text-base">
              {item.name}
            </span> */}
          </Motion.article>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      particles: {
        number: { value: 45, density: { enable: true, area: 900 } },
        color: { value: ["#111827", "#1f2937", "#374151"] },
        links: { enable: true, distance: 110, opacity: 0.16, color: "#1f2937", width: 1 },
        move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
        size: { value: { min: 1, max: 2.8 } },
        opacity: { value: { min: 0.18, max: 0.45 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 130, links: { opacity: 0.32 } } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] py-10 md:py-14">
      {ready && (
        <Particles
          id="clients-dark-particles"
          options={particleOptions}
          className="pointer-events-none absolute inset-0 z-0"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(17,24,39,0.08),transparent_35%),radial-gradient(circle_at_84%_80%,rgba(55,65,81,0.08),transparent_38%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-7 text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-1 text-xs tracking-[0.2em] text-emerald-800">
            TRUSTED PARTNERS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-5xl">
            Brands Powering With{" "}
            <span className="bg-gradient-to-r from-emerald-700 via-cyan-700 to-sky-700 bg-clip-text text-transparent">
              SMET
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-44 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500" />
        </Motion.div>

        <div className="space-y-4">
          <LogoTrack items={rowOne} />
          <LogoTrack items={rowTwo} reverse />
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 26s linear infinite;
        }
        .marquee-reverse {
          animation-name: marquee-right;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
