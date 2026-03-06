import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import logo from "../assets/SMET-T.PNG";

const footerLinks = {
  company: ["About SMET", "Our Solutions", "Case Studies", "Careers"],
  support: ["Customer Support", "Service Network", "Warranty Policy", "Terms & Conditions"],
  resources: ["UPS Selection Guide", "Installation Manual", "Brochure Downloads", "Power Backup Blog"],
  quick: ["Data Center UPS", "Industrial UPS", "Home UPS", "Contact Sales"],
};

const blockVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Footer() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      background: { color: "transparent" },
      particles: {
        number: { value: 52, density: { enable: true, area: 900 } },
        color: { value: ["#10b981", "#3b82f6", "#f59e0b"] },
        opacity: { value: { min: 0.16, max: 0.5 } },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1 },
          direction: "top",
          random: true,
          outModes: { default: "out" },
        },
        shape: { type: ["circle", "triangle"] },
        twinkle: {
          particles: { enable: true, frequency: 0.02, opacity: 1 },
        },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "bubble" } },
        modes: { bubble: { distance: 120, size: 5, duration: 2, opacity: 0.8 } },
      },
      detectRetina: true,
    }),
    []
  );

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#090c14] text-gray-200">
      {particlesReady && (
        <Particles
          id="footer-particles"
          options={particleOptions}
          className="pointer-events-none absolute inset-0 z-0"
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-10 md:px-8 md:pt-14">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-[#101522] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_45px_rgba(59,130,246,0.2)] md:p-8"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Protect Every Watt.
              <br />
              Power What Matters.
            </h2>
            <form className="flex w-full flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl px-4 py-3 text-base text-gray-800 outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1220] px-5 py-3 font-semibold text-white transition hover:bg-[#111b32]"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </Motion.div>

        <div className="mt-12 grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-5">
          <Motion.div
            custom={0}
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <img src={logo} alt="SMET logo" className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-14 xl:h-16" />
            <p className="mt-4 text-sm leading-7 text-gray-300">
              SMET delivers intelligent UPS and power protection systems for data centers,
              healthcare, industrial automation, and enterprise operations.
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-300">
              <p className="inline-flex items-center gap-2">
                <Mail size={16} className="text-emerald-400" />
                sales@smetpower.com
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" />
                +91 98765 43210
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400" />
                Bengaluru, India
              </p>
            </div>
          </Motion.div>

          {Object.entries(footerLinks).map(([key, links], index) => (
            <Motion.div
              key={key}
              custom={index + 1}
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="mb-4 text-lg font-semibold capitalize text-white">{key}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-emerald-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-3 pt-6 text-sm text-gray-400 md:flex-row md:items-center"
        >
          <p>Copyright {year} SMET Power Systems. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-emerald-300">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              Terms of Use
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              Service Agreement
            </a>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
}
