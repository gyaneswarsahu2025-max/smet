import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import AboutSection from "../userComponents/AboutSection";
import {
  BadgeCheck,
  Building2,
  Factory,
  Leaf,
  ShieldCheck,
  Target,
  Telescope,
  Zap,
} from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import aboutImg from "../assets/about-3.jpg";
import ups7 from "../assets/about-2.jpg";
import ups8 from "../assets/about-1.jpg";
import ups9 from "../assets/company-overview.jpg";
import ups10 from "../assets/vision-mission.jpg";
import ups11 from "../assets/ups-11.png";

const infrastructure = [
  {
    title: "R&D and Engineering Lab",
    detail: "Design validation, power-quality testing, and reliability simulations.",
    image: ups9,
  },
  {
    title: "Assembly and Integration Unit",
    detail: "Precision assembly workflow with QA gates at each stage.",
    image: ups10,
  },
  {
    title: "Field Service Network",
    detail: "Responsive on-site support and preventive maintenance programs.",
    image: ups11,
  },
  {
    title: "Supply and Logistics Backbone",
    detail: "Planned inventory and dispatch process for faster delivery cycles.",
    image: ups8,
  },
];

const certifications = [
  "ISO 9001 Quality Management",
  "ISO 14001 Environmental Management",
  "CE Compliant Product Lines",
  "RoHS Conformant Components",
];

export default function AboutPage() {
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
        number: { value: 36, density: { enable: true, area: 900 } },
        color: { value: ["#10b981", "#06b6d4", "#f59e0b"] },
        links: { enable: true, distance: 120, opacity: 0.2, color: "#ffffff", width: 1 },
        move: { enable: true, speed: 0.9, outModes: { default: "bounce" } },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.2, max: 0.55 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 130, links: { opacity: 0.35 } } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <main className="bg-[#f6f8fb]">
      <section className="relative overflow-hidden bg-[#0b1320] px-4 py-14 text-white md:px-8 md:py-16">
        {ready && (
          <Particles id="about-particles" options={particleOptions} className="pointer-events-none absolute inset-0" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.24),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(6,182,212,0.2),transparent_36%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-[0.18em] text-emerald-300">
              <Building2 size={14} />
              ABOUT SMET
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
              Power Continuity Engineering With Modern Infrastructure And Proven Delivery Discipline
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-lg">
              SMET builds dependable UPS and power-protection solutions for homes, enterprises, and mission-critical operations. Our approach combines practical engineering, responsive service, and long-term reliability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-semibold text-emerald-300">500+</p>
                <p className="text-xs text-white/70">Installations</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-300">30+</p>
                <p className="text-xs text-white/70">Cities Served</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-semibold text-amber-300">24/7</p>
                <p className="text-xs text-white/70">Support</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur"
            >
              <img src={aboutImg} alt="SMET infrastructure" className="h-52 w-full rounded-xl object-cover" />
            </Motion.div>
            <div className="grid gap-4">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur"
              >
                <img src={ups7} alt="UPS system panel" className="h-24 w-full rounded-xl object-cover" />
              </Motion.div>
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur"
              >
                <img src={ups8} alt="Power engineering setup" className="h-24 w-full rounded-xl object-cover" />
              </Motion.div>
            </div>
          </div>
        </div>
      </section>
 <AboutSection />
      <section className="px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-2">
          <Motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
            data-aos="fade-up"
          >
            <img src={ups9} alt="Company overview" className="h-44 w-full object-cover md:h-52" />
            <div className="p-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
              <Telescope size={25} />
            <h4 className="sm:text-2xl md:text-3xl "> Company Overview </h4>  
            </div>
            <p className="mt-4 text-gray-700 leading-7">
              SMET delivers scalable UPS systems and power backup architectures tailored for different load profiles, continuity goals, and site conditions. We focus on stable performance, clean output power, and lifecycle support from planning to post-installation service.
            </p>
            </div>
          </Motion.article>

          <Motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm"
            data-aos="fade-up"
            data-aos-delay="90"
          >
            <img src={ups10} alt="Vision and mission" className="h-44 w-full object-cover md:h-52" />
            <div className="p-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-700">
              <Target size={25} />
                  <h4 className="sm:text-2xl md:text-3xl ">Vision & Mission</h4>
            </div>
            <p className="mt-4 text-gray-700 leading-7">
              Our vision is to make dependable power continuity accessible across sectors. Our mission is to engineer efficient and safe backup systems, reduce downtime risk, and build long-term client trust through transparent service and measurable performance.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                <span className="font-semibold text-emerald-700">Vision:</span> Reliable power for every critical operation.
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                <span className="font-semibold text-cyan-700">Mission:</span> Efficient products, responsive service, sustained uptime.
              </div>
            </div>
            </div>
          </Motion.article>
        </div>
      </section>

      <section className="px-4 pb-10 md:px-8 md:pb-14">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">Manufacturing & Infrastructure</h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Our operational backbone is designed for precision, quality assurance, and quick service coverage.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-[#f9fbfd]"
              >
                <img src={item.image} alt={item.title} className="h-36 w-full object-cover" />
                <div className="flex items-start gap-3 p-4">
                  <div className="mt-1 rounded-lg bg-emerald-100 p-2 text-emerald-700">
                    <Factory size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{item.detail}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:px-8 md:pb-16">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200 bg-white p-6 md:p-8" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">Certifications & Compliance</h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Quality and compliance standards that support performance, safety, and sustainability goals.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item, index) => (
              <Motion.article
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-[#f9fbfd] p-5 shadow-sm"
              >
                <div className="inline-flex rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  {index % 2 === 0 ? <BadgeCheck size={18} /> : <ShieldCheck size={18} />}
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-gray-800">{item}</p>
              </Motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900 md:grid-cols-3">
            <p className="inline-flex items-center gap-2 font-semibold"><Zap size={16} /> Engineering Reliability</p>
            <p className="inline-flex items-center gap-2 font-semibold"><Leaf size={16} /> Sustainable Practices</p>
            <p className="inline-flex items-center gap-2 font-semibold"><Building2 size={16} /> Scalable Infrastructure</p>
          </div>
        </div>
      </section>
    </main>
  );
}
