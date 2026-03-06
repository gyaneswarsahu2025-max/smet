import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  BadgeCheck,
  BatteryCharging,
  Building2,
  ChevronRight,
  CircleCheck,
  Clock3,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const whyChoose = [
  { icon: ShieldCheck, title: "99.9% Uptime Focus", text: "Engineered redundancy and protection architecture." },
  { icon: Clock3, title: "Fast Service Response", text: "Quick site assistance with trained support teams." },
  { icon: BatteryCharging, title: "Battery Life Optimization", text: "Intelligent charging logic for longer backup life." },
  { icon: Zap, title: "High Efficiency Design", text: "Reduced power loss and lower operating costs." },
];

const industries = [
  { icon: Building2, name: "Data Centers", detail: "Rack and modular UPS for mission-critical continuity." },
  { icon: HeartPulse, name: "Healthcare", detail: "Stable power for diagnostic, ICU, and surgical systems." },
  { icon: Factory, name: "Manufacturing", detail: "Protection against spikes, sags, and outage downtime." },
  { icon: Landmark, name: "BFSI & Enterprise", detail: "Reliable backup for financial and office infrastructure." },
];

const caseStudies = [
  { title: "Hospital Power Resilience Upgrade", result: "37% lower downtime during grid instability.", sector: "Healthcare" },
  { title: "Tier-II Data Center Expansion", result: "Achieved 99.98% backup reliability target.", sector: "Data Center" },
  { title: "Factory Line Protection Program", result: "Reduced production stoppage events by 42%.", sector: "Industrial" },
];

const plans = [
  { name: "Essential AMC", price: "₹12,999/yr", points: ["2 preventive visits/year", "Basic health report", "Phone support"], featured: false },
  { name: "Business AMC", price: "₹24,999/yr", points: ["4 preventive visits/year", "Priority breakdown support", "Battery audit"], featured: true },
  { name: "Enterprise AMC", price: "Custom Quote", points: ["SLA-based response", "Spare coverage options", "Dedicated engineer"], featured: false },
];

const faqs = [
  { q: "How do I choose the right UPS size?", a: "Share your load list and backup time target. We provide a sizing recommendation with headroom." },
  { q: "Do you provide on-site installation?", a: "Yes. We provide complete installation, commissioning, and handover support." },
  { q: "Can you support multi-location businesses?", a: "Yes. We handle centralized support plans across multiple cities and facilities." },
];

const sectionTitle = "mx-auto max-w-7xl px-4 md:px-8";

export default function HomeEnhancements() {
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
        number: { value: 45, density: { enable: true, area: 700 } },
        color: { value: ["#10b981", "#22d3ee", "#facc15"] },
        links: { enable: true, distance: 110, opacity: 0.2, color: "#ffffff", width: 1 },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.25, max: 0.65 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 130, links: { opacity: 0.4 } } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      <section className="bg-[#f6f7f8] py-14 md:py-18">
        <div className={sectionTitle}>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-emerald-900 md:text-5xl"
          >
            Why Choose SMET
          </Motion.h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, idx) => (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className={sectionTitle}>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">Solutions by Industry</h2>
            <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-emerald-700 md:inline-flex">
              View all sectors <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((item, idx) => (
              <Motion.div
                key={item.name}
                initial={{ opacity: 0, x: idx % 2 ? 28 : -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 transition hover:border-emerald-300"
              >
                <item.icon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.detail}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#09111e] py-16 text-white">
        {ready && (
          <Particles
            id="trust-particles"
            options={particleOptions}
            className="pointer-events-none absolute inset-0"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_40%)]" />
        <div className={`${sectionTitle} relative z-10`}>
          <h2 className="text-3xl font-semibold md:text-5xl">Trust Metrics</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["500+", "Installations"],
              ["99.9%", "Power Continuity"],
              ["24/7", "Support"],
              ["30+", "Cities Served"],
            ].map(([value, label], i) => (
              <Motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-3xl font-bold text-emerald-300 md:text-4xl">{value}</p>
                <p className="mt-2 text-sm text-white/80">{label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f8] py-14 md:py-18">
        <div className={sectionTitle}>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">Case Studies</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item, i) => (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{item.sector}</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.result}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className={sectionTitle}>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">Product Comparison</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-emerald-50 text-gray-800">
                <tr>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Capacity</th>
                  <th className="px-4 py-3">Backup</th>
                  <th className="px-4 py-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["BR1500G-IN", "1500VA", "25-45 min", "Office & Workstations"],
                  ["Amplon RT 2K", "2KVA", "30-55 min", "Server / Network"],
                  ["Liebert GXT5 3K", "3KVA", "35-60 min", "Critical Loads"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    {row.map((cell, idx) => (
                      <td key={`${row[0]}-${idx}`} className="px-4 py-3 text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f8] py-14 md:py-18">
        <div className={sectionTitle}>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">Service & AMC Plans</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-6 ${
                  plan.featured
                    ? "border-emerald-500 bg-emerald-50 shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-lg font-bold text-emerald-700">{plan.price}</p>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {plan.points.map((point) => (
                    <li key={point} className="inline-flex items-center gap-2">
                      <CircleCheck size={16} className="text-emerald-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 rounded-full border border-emerald-600 px-5 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-100">
                  Request Plan
                </button>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className={sectionTitle}>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">What Clients Say</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ["Their UPS planning reduced our outages significantly.", "IT Manager, Fintech"],
              ["Great post-sales support and battery diagnostics.", "Facility Head, Hospital"],
              ["Professional installation with clear documentation.", "Operations Lead, Manufacturing"],
            ].map(([quote, by], i) => (
              <Motion.blockquote
                key={by}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
              >
                <p className="text-gray-700">"{quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-emerald-700">{by}</footer>
              </Motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f8] py-14 md:py-18">
        <div className={sectionTitle}>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl">Certifications & Compliance</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["ISO 9001", "ISO 14001", "CE Compliant", "RoHS Certified"].map((item, i) => (
              <Motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                <BadgeCheck className="mx-auto h-8 w-8 text-emerald-600" />
                <p className="mt-3 font-semibold text-gray-800">{item}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#09111e] py-16 text-white">
        <div className={sectionTitle}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">FAQ & Expert Support</h2>
              <p className="mt-4 max-w-xl text-white/75">
                Answers to common questions and direct help from our engineering team.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400">
                Talk to an Expert <PhoneCall size={18} />
              </button>
            </div>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-xl border border-white/15 bg-white/5 p-4 open:bg-white/10">
                  <summary className="cursor-pointer list-none font-semibold">{item.q}</summary>
                  <p className="mt-3 text-sm text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
