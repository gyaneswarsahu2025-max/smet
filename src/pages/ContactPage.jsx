export default function ContactPage() {
  return (
    <main className="bg-[#f6f8fb] px-4 py-16 md:px-8 md:py-20">
      <section className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <h1 className="text-4xl font-semibold text-emerald-900 md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Connect with our experts for product selection, installation, and support plans.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Email</p>
            <p className="mt-1 text-lg font-medium text-gray-800">sales@smetpower.com</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="mt-1 text-lg font-medium text-gray-800">+91 98765 43210</p>
          </div>
        </div>
      </section>
    </main>
  );
}
