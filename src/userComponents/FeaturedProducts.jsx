import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import ups1 from "../assets/ups-1.png";
import ups2 from "../assets/ups-2.png";
import ups3 from "../assets/ups-3.png";
import ups4 from "../assets/ups-4.png";
import ups5 from "../assets/ups-5.png";
import ups6 from "../assets/ups-6.png";
import ups7 from "../assets/ups-7.png";
import ups8 from "../assets/ups-8.png";
import ups9 from "../assets/ups-9.png";
import ups10 from "../assets/ups-10.png";
import ups11 from "../assets/ups-11.png";

const products = [
  {
    id: 1,
    tag: "Best Seller",
    tagClass: "bg-emerald-600",
    name: "Home UPS 900VA",
    description: "Compact backup solution for routers, PCs, and home office setups.",
    image: ups1,
    action: "More Info",
    to: "/products#home-ups",
  },
  {
    id: 2,
    tag: "New",
    tagClass: "bg-blue-600",
    name: "Line Interactive UPS 1500VA",
    description: "Voltage regulation and smart battery charging for office workloads.",
    image: ups2,
    action: "More Info",
    to: "/products#line-interactive",
  },
  {
    id: 3,
    tag: "Top Rated",
    tagClass: "bg-emerald-700",
    name: "Online UPS 2KVA Rack/Tower",
    description: "Pure sine wave backup for servers, networking, and sensitive electronics.",
    image: ups3,
    action: "More Info",
    to: "/products#online-ups",
  },
  {
    id: 4,
    tag: "Popular",
    tagClass: "bg-cyan-600",
    name: "Online UPS 3KVA",
    description: "High efficiency system for small data rooms and branch IT infrastructure.",
    image: ups4,
    action: "More Info",
    to: "/products#online-ups",
  },
  {
    id: 5,
    tag: "Industry Choice",
    tagClass: "bg-emerald-600",
    name: "Industrial UPS 10KVA",
    description: "Rugged power continuity for production lines and automation systems.",
    image: ups5,
    action: "More Info",
    to: "/products#industrial",
  },
  {
    id: 6,
    tag: "Reliable",
    tagClass: "bg-teal-600",
    name: "SMF Battery Bank",
    description: "Long-life maintenance-free battery packs for extended backup duration.",
    image: ups6,
    action: "More Info",
    to: "/products#battery-bank",
  },
  {
    id: 7,
    tag: "Smart Pick",
    tagClass: "bg-sky-600",
    name: "AVR Servo Stabilizer",
    description: "Stable voltage output and surge protection for equipment safety.",
    image: ups7,
    action: "More Info",
    to: "/products#stabilizer",
  },
  {
    id: 8,
    tag: "Enterprise",
    tagClass: "bg-indigo-600",
    name: "Lithium UPS Backup System",
    description: "Fast charging, longer cycle life, and intelligent remote monitoring support.",
    image: ups8,
    action: "More Info",
    to: "/products#lithium",
  },
  {
    id: 9,
    tag: "New",
    tagClass: "bg-cyan-700",
    name: "Rack UPS 6KVA",
    description: "High-density backup for server cabinets and edge data racks.",
    image: ups9,
    action: "More Info",
    to: "/products#rack-ups",
  },
  {
    id: 10,
    tag: "Premium",
    tagClass: "bg-violet-600",
    name: "Modular UPS 20KVA",
    description: "Scalable modular UPS platform for enterprise and mission-critical loads.",
    image: ups10,
    action: "More Info",
    to: "/products#modular",
  },
  {
    id: 11,
    tag: "Heavy Duty",
    tagClass: "bg-amber-600",
    name: "Three Phase UPS 40KVA",
    description: "Three-phase online protection for industrial and infrastructure systems.",
    image: ups11,
    action: "More Info",
    to: "/products#three-phase",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.12, ease: "easeOut" },
  }),
};

export default function FeaturedProducts() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleProducts = products.slice(0, visibleCount);
  const canViewMore = visibleCount < products.length;

  return (
    <section className="relative overflow-hidden bg-[#f1f2f2] py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-7 md:mb-10" data-aos="fade-up">
          <h2 className="border-l-4 border-emerald-700 pl-3 text-3xl font-semibold text-emerald-800 sm:text-4xl md:text-5xl bg-gradient-to-r from-emerald-700 via-cyan-700 to-sky-700 bg-clip-text text-transparent">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-8">
          {visibleProducts.map((product, index) => (
            <Motion.article
              key={product.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              className="group relative isolate overflow-hidden rounded-2xl border border-gray-200 bg-transparent p-2.5 transition-all duration-300 hover:border-transparent sm:p-3 md:p-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-[120%] rounded-[40%] bg-[conic-gradient(from_0deg,_#10b981,_#06b6d4,_#3b82f6,_#10b981)] opacity-90 blur-[1px] group-hover:animate-[spin_3.5s_linear_infinite]" />
              </div>
              <div className="absolute inset-[1.5px] z-[1] rounded-[15px] bg-white" />

              <span
                className={`relative z-10 inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium text-white sm:px-3 sm:text-xs md:px-4 md:text-sm ${product.tagClass}`}
              >
                {product.tag}
              </span>

              <div className="relative z-10 mt-3 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-32 md:h-44 lg:h-56"
                />
              </div>

              <h3 className="relative z-10 mt-3 text-sm font-semibold leading-5 text-emerald-800 sm:text-base md:mt-4 md:text-lg lg:mt-5 lg:text-xl lg:leading-7">
                {product.name}
              </h3>
              <p className="relative z-10 mt-1.5 hidden line-clamp-3 text-[11px] leading-4 text-gray-600 md:mt-2 md:block md:text-sm md:leading-6">
                {product.description}
              </p>

              <Link
                to={product.to}
                className="relative z-10 mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-50 hover:pr-4 sm:mt-4 sm:px-3 sm:py-2 sm:text-sm md:mt-5 md:text-base lg:mt-6"
              >
                {product.action}
                <Motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white sm:h-6 sm:w-6"
                >
                  <ArrowRight size={12} className="sm:h-[14px] sm:w-[14px]" />
                </Motion.span>
              </Link>
            </Motion.article>
          ))}
        </div>

        {canViewMore && (
          <div className="mt-6 flex justify-center md:mt-8">
            <button
              type="button"
              onClick={() => setVisibleCount(products.length)}
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-600 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 md:text-base"
            >
              View More
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
