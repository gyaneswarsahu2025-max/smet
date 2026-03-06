import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fb] px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold tracking-[0.3em] text-emerald-700">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900">Page Not Found</h1>
        <p className="mt-3 text-gray-600">The page you requested does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
