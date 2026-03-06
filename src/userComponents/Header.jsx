import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/SMET.png";

const megaMenuSections = [
  {
    title: "UPS Solutions",
    links: [
      { label: "All Products", description: "Browse full UPS product catalog", to: "/products" },
      { label: "Online UPS", description: "For critical IT and server loads", to: "/products#online-ups" },
      { label: "Line Interactive UPS", description: "Smart backup for office systems", to: "/products#line-interactive" },
      { label: "Industrial UPS", description: "Heavy-duty power protection", to: "/products#industrial" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", description: "Reliable backup for hospitals", to: "/products#healthcare" },
      { label: "Data Centers", description: "Scalable high uptime architecture", to: "/products#data-centers" },
      { label: "Manufacturing", description: "Reduce production downtime", to: "/products#manufacturing" },
      { label: "Enterprise Offices", description: "Clean power for business systems", to: "/products#enterprise" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Downloads", description: "Datasheets, manuals, brochures", to: "/downloads" },
      { label: "Get Quote", description: "Share requirements with our team", to: "/contact" },
      { label: "Service Request", description: "Raise installation or support queries", to: "/contact#service" },
      { label: "Talk to Expert", description: "Consultation for sizing and planning", to: "/contact#expert" },
    ],
  },
];

export default function Header() {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isProductsActive = pathname.startsWith("/products");
  const desktopNavClass = ({ isActive }) =>
    `transition-colors hover:text-green-600 ${isActive ? "text-green-700 font-semibold" : ""}`;
  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl border px-4 py-3 text-base shadow-sm transition ${
      isActive
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-transparent bg-white/80 hover:border-green-100 hover:bg-green-50 hover:text-green-700"
    }`;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur transition-all duration-300 ${
        isScrolled ? "border-gray-200 shadow-md" : "border-transparent shadow-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="SMET Logo"
            className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-14 xl:h-16"
          />
          
        </Link>

        <nav className="hidden items-center gap-8 font-medium text-gray-800 lg:flex">
          <NavLink className={desktopNavClass} to="/">
            Home
          </NavLink>
          <NavLink className={desktopNavClass} to="/about">
            About Us
          </NavLink>
          <div
            className="relative py-2"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 transition-colors hover:text-green-600 ${
                isProductsActive ? "font-semibold text-green-700" : ""
              }`}
              onClick={() => setDesktopDropdownOpen((prev) => !prev)}
              aria-expanded={desktopDropdownOpen}
              aria-label="Toggle products mega menu"
            >
              Products
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  desktopDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`absolute left-1/2 top-full w-[820px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-7 shadow-xl transition-all duration-300 ${
                desktopDropdownOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="grid grid-cols-3 gap-6">
                {megaMenuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            className="block rounded-lg px-3 py-2 transition hover:bg-green-50"
                          >
                            <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NavLink className={desktopNavClass} to="/downloads">
            Downloads
          </NavLink>
          <NavLink className={desktopNavClass} to="/contact">
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact#distributor"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-md bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 px-3 py-2 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm lg:hidden"
          >
            <span className="relative z-10">Find A distributor</span>
            <ArrowUpRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -left-8 top-0 h-full w-8 -skew-x-12 bg-white/35 blur-sm transition-transform duration-500 group-hover:translate-x-32" />
            </span>
          </Link>

          <Link
            to="/contact#distributor"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            <span className="relative z-10">Find A distributor</span>
            <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -left-8 top-0 h-full w-8 -skew-x-12 bg-white/35 blur-sm transition-transform duration-500 group-hover:translate-x-40" />
            </span>
          </Link>

          <button
            className="inline-flex rounded-md border border-gray-300 p-2 text-gray-700 transition hover:bg-gray-50 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-emerald-50/40 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-h-[85vh] space-y-3 overflow-y-auto px-4 pb-6 pt-4 font-medium text-gray-800 sm:px-6">
          <NavLink
            className={mobileNavClass}
            to="/"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={mobileNavClass}
            to="/about"
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
          <button
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-base shadow-sm transition ${
              isProductsActive
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-transparent bg-white/80 hover:border-green-100 hover:bg-green-50 hover:text-green-700"
            }`}
            onClick={() => setMobileProductsOpen((prev) => !prev)}
          >
            Products
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                mobileProductsOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileProductsOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 space-y-3">
              {megaMenuSections.map((section) => (
                <div key={section.title} className="rounded-xl border border-emerald-100 bg-white p-3 shadow-sm">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    {section.title}
                  </p>
                  <div className="space-y-1">
                    {section.links.map((item) => (
                      <Link
                        key={item.label}
                        className="block rounded-lg px-3 py-2 transition hover:bg-emerald-50"
                        to={item.to}
                        onClick={closeMobileMenu}
                      >
                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NavLink
            className={mobileNavClass}
            to="/downloads"
            onClick={closeMobileMenu}
          >
            Downloads
          </NavLink>
          <NavLink
            className={mobileNavClass}
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
