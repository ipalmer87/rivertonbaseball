import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, UserPlus } from 'lucide-react';

const AAADashboard = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-[#151515] p-8 rounded-3xl border border-[#2a2a2a] hover:border-riverton-purple/50 transition-colors group">
      <UserPlus className="w-12 h-12 text-riverton-purple mb-6 group-hover:scale-110 transition-transform" />
      <h2 className="text-2xl font-bold text-white mb-4">Free Agents</h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        Looking for a team in the drafted AAA Division? Register as a free agent so coaches can find and recruit you for the upcoming season.
      </p>
      <Link to="/aaacentral/free-agents" className="inline-block px-6 py-2 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
        View Free Agent Board
      </Link>
    </div>

    <div className="bg-[#151515] p-8 rounded-3xl border border-[#2a2a2a] hover:border-riverton-purple/50 transition-colors group">
      <Users className="w-12 h-12 text-riverton-purple mb-6 group-hover:scale-110 transition-transform" />
      <h2 className="text-2xl font-bold text-white mb-4">Team Tryouts</h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        Coaches, post your open tryouts here. Players, browse the listing of AAA teams currently holding open tryouts to fill their rosters.
      </p>
      <Link to="/aaacentral/tryouts" className="inline-block px-6 py-2 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
        View Tryout Listings
      </Link>
    </div>
  </div>
);

const Placeholder = ({ title }) => (
  <div className="bg-[#151515] p-8 rounded-2xl border border-[#2a2a2a] text-center min-h-[400px] flex flex-col justify-center">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <p className="text-gray-400">Listings are currently closed for the off-season. Check back in February.</p>
    <div className="mt-8">
      <Link to="/aaacentral" className="text-riverton-purple hover:underline">← Back to AAA Central</Link>
    </div>
  </div>
);

export default function AAACentral() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">AAA Central</h1>
        <p className="text-riverton-silver text-lg">The dedicated hub for the competitive AAA Drafted Division.</p>
      </div>

      <Routes>
        <Route path="/" element={<AAADashboard />} />
        <Route path="/free-agents" element={<Placeholder title="Free Agent Registration & Listings" />} />
        <Route path="/tryouts" element={<Placeholder title="Open Team Tryouts" />} />
      </Routes>
    </div>
  )
}
