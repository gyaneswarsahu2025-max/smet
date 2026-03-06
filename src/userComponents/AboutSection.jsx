import logo from "../assets/smet-logo.jpeg";
import aboutimg from "../assets/about-img.png";

const circleImages = [
  "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
  "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
  "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
  "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
];

export default function AboutSection() {
  return (
    <section className="bg-[#f2f2f2] py-4 md:py-5 lg:py-6">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div className="relative flex min-h-[380px] items-center justify-center" data-aos="fade-right">
          

          <div className="z-10 w-[100%] rounded-2xl      md:w-[100%]" data-aos="zoom-in" data-aos-delay="120">
          
            <img
              src={aboutimg}
              alt="Server infrastructure"
              className="mt-3 h-44 w-full rounded-xl object-contain md:h-52"
            />
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <h2 className="border-l-4 border-emerald-700 pl-3 text-4xl font-medium text-emerald-700 md:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-800" data-aos="fade-up" data-aos-delay="160">
            We specialize in power protection solutions designed to keep critical systems running
            without interruption. Our focus is on delivering reliable Uninterruptible Power Supply
            (UPS) systems that safeguard equipment from power failures, voltage fluctuations, and
            electrical disturbances.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-800" data-aos="fade-up" data-aos-delay="240">
            With a strong understanding of modern power requirements, we support homes, offices,
            data centers, healthcare facilities, and industrial environments by ensuring
            continuous, stable power when it matters most.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-800" data-aos="fade-up" data-aos-delay="320">
            Our approach combines technology, reliability, and safety, helping users protect
            valuable equipment and maintain operational continuity during unexpected power events.
          </p>
        </div>
      </div>
    </section>
  );
}
