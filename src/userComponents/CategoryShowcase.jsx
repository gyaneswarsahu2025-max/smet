import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ups1 from "../assets/ups-1.png";
import ups2 from "../assets/ups-2.png";
import ups3 from "../assets/ups-3.png";
import ups4 from "../assets/ups-4.png";
import ups5 from "../assets/ups-5.png";
import ups6 from "../assets/ups-6.png";

const categories = [
  {
    title: "Office & Commercial Use",
    image: ups1,
    to: "/products#office-commercial",
  },
  {
    title: "Data Centers & IT Infrastructure",
    image: ups2,
    to: "/products#data-centers",
  },
  {
    title: "Industrial & Manufacturing",
    image: ups3,
    to: "/products#industrial",
  },
  {
    title: "Telecom & Networking",
    image: ups4,
    to: "/products#telecom",
  },
  {
    title: "Education & Institutions",
    image: ups5,
    to: "/products#education",
  },
  {
    title: "Home & Personal Use",
    image: ups6,
    to: "/products#home",
  },
];

export default function CategoryShowcase() {
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(categories.length / cardsPerSlide);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const goNext = () => setActiveSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative overflow-hidden bg-[#f1f2f2] py-10 md:py-14">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="pl-3 text-3xl font-semibold text-emerald-800 sm:text-4xl md:text-5xl bg-gradient-to-r from-emerald-700 via-cyan-700 to-sky-700 bg-clip-text text-transparent">
            Explore Our Wide Range Of Categories
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-60 rounded-full bg-emerald-600 md:w-84" />
        </div>

        <div className="relative mt-7 lg:hidden" data-aos="fade-up">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={`slide-${slideIndex}`} className="w-full shrink-0">
                  <div className="grid grid-cols-3 gap-3">
                    {categories
                      .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                      .map((category) => (
                        <article
                          key={category.title}
                          className="group rounded-xl border border-white/60 bg-white/90 p-2 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(5,150,105,0.22)]"
                        >
                          <Link to={category.to} className="block">
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={category.image}
                                alt={category.title}
                                className="h-10 w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                            <p className="mt-2 text-center text-[11px] font-medium leading-4 text-gray-800 transition-colors duration-300 group-hover:text-emerald-700 sm:text-xs">
                              {category.title}
                            </p>
                          </Link>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute -left-1 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200 bg-white/90 p-1.5 text-emerald-800 shadow-md transition hover:bg-emerald-50"
            aria-label="Previous categories"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-1 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200 bg-white/90 p-1.5 text-emerald-800 shadow-md transition hover:bg-emerald-50"
            aria-label="Next categories"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to category slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? "w-7 bg-emerald-700" : "w-2.5 bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 hidden lg:grid lg:grid-cols-6 lg:gap-5">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className="group rounded-2xl border border-white/60 bg-white/90 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(5,150,105,0.22)]"
              data-aos="fade-up"
              data-aos-delay={String(90 + index * 70)}
            >
              <Link to={category.to} className="block">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-28 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 md:h-32"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-3 text-center text-sm font-medium leading-5 text-gray-800 transition-colors duration-300 group-hover:text-emerald-700">
                  {category.title}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
