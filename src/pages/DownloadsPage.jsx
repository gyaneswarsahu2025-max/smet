const docs = [
  "Corporate Brochure 2026",
  "UPS Sizing Guide",
  "Installation Checklist",
  "AMC Coverage Document",
];

export default function DownloadsPage() {
  return (
    <main className="bg-[#f6f8fb] px-4 py-16 md:px-8 md:py-20">
      <section className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <h1 className="text-4xl font-semibold text-emerald-900 md:text-5xl">Downloads</h1>
        <p className="mt-4 text-lg text-gray-700">
          Access product brochures, installation resources, and technical documentation.
        </p>
        <ul className="mt-8 space-y-3">
          {docs.map((doc) => (
            <li key={doc} className="rounded-xl border border-gray-200 px-4 py-3 text-gray-800">
              {doc}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
