import Navbar from '../components/navbar'
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">R<span className="text-white">ush</span> Radar</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#register" className="hover:underline">Register</a>
          <a href="#map" className="hover:underline">Map</a>
          <a href="#transport" className="hover:underline">Public Transport</a>
          <a href="#crowded" className="hover:underline">Crowded Zone</a>
        </div>
      </nav>



    </div>
  );
}
