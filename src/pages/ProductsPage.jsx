const products = [
  "Home UPS",
  "Line Interactive UPS",
  "Online UPS",
  "Rack/Tower UPS",
  "Industrial UPS",
  "Battery Solutions",
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f6f8fb] px-4 py-16 md:px-8 md:py-20">
      <section className="mx-auto w-full max-w-7xl">
        <h1 className="text-4xl font-semibold text-emerald-900 md:text-5xl">Products</h1>
        <p className="mt-4 text-lg text-gray-700">Explore our complete range of power backup solutions.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-lg font-medium text-gray-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300"
            >
              {item}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
