import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import upsB1 from "../assets/ups-b-1.png";
import upsB2 from "../assets/ups-b-2.png";
import upsB3 from "../assets/ups-b-3.png";

const slides = [
  {
    id: 1,
    title: "Superior Energy Efficiency In AI",
    subtitle: "From grid to chip, engineered for high-performance infrastructure.",
    cta: "Explore Solutions",
    image: upsB1,
  },
  {
    id: 2,
    title: "Delta At COP30",
    subtitle: "Coral and green building innovations with AI-enabled sustainability.",
    cta: "View Products",
    image: upsB2,
  },
  {
    id: 3,
    title: "Greening Intelligence",
    subtitle: "Charting the future of sustainable AI with practical energy solutions.",
    cta: "Contact Team",
    image: upsB3,
  },
];

export default function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full">
      <div className="relative h-[62svh] min-h-[340px] w-full overflow-hidden sm:h-[68svh] sm:min-h-[420px] md:h-[72svh] md:min-h-[500px] lg:h-[calc(100svh-72px)] lg:min-h-[560px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/50 sm:bg-black/45" />
            <div className="relative flex h-full items-end px-4 pb-10 sm:px-6 sm:pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-24">
              <div className="max-w-[92%] text-white sm:max-w-3xl">
                <p className="mb-3 inline-block rounded-full border border-white/40 px-2.5 py-1 text-[10px] tracking-[0.18em] sm:mb-4 sm:px-3 sm:text-xs md:text-sm">
                  SMET TECHNOLOGY
                </p>
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl">
                  {slide.title}
                </h2>
                <p className="mt-3 max-w-xl text-xs leading-5 text-white/90 sm:mt-4 sm:text-sm sm:leading-6 md:max-w-2xl md:text-base lg:text-xl">
                  {slide.subtitle}
                </p>
                <button className="mt-5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-transform duration-300 hover:scale-105 sm:mt-6 sm:px-5 sm:py-3 sm:text-base md:mt-7 md:px-6 md:py-3">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-1.5 text-white backdrop-blur transition hover:bg-white/30 sm:left-3 sm:p-2 md:left-4 lg:left-6"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-1.5 text-white backdrop-blur transition hover:bg-white/30 sm:right-3 sm:p-2 md:right-4 lg:right-6"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-5 sm:gap-2 md:bottom-7">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all ${
                index === activeIndex ? "h-2 w-7 bg-white sm:h-2.5 sm:w-9" : "h-2 w-2 bg-white/60 sm:h-2.5 sm:w-2.5"
              }`}
              aria-label={`Go to slide ${slide.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
