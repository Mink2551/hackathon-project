import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">R<span className="text-white">ush</span> Radar</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/map" className="hover:underline">Map</Link>
          <Link href="/transport" className="hover:underline">Public Transport</Link>
          <Link href="/crowded" className="hover:underline">Crowded Zone</Link>
          <Link href="/register" className="hover:underline">Register</Link>
        </div>
      </nav>
    </div>
  );
}
