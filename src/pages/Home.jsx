import { Calendar, Users, Trophy, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-riverton-purple/20 to-riverton-black border border-[#2a2a2a] p-8 md:p-12 mb-12">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-riverton-purple/10">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v5.5l4.5 2.5-1 1.5-5.5-3.5v-6z"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Youth Baseball <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-riverton-purple to-purple-400">Done Right</span>
          </h1>
          <p className="text-lg text-riverton-silver mb-8 leading-relaxed">
            Welcome to Riverton Baseball! We provide a competitive, fun, and safe environment for youth baseball players to develop their skills and love for the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/registration" className="px-6 py-3 rounded-full bg-riverton-purple text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Register Now
            </Link>
            <a href="https://www.teamsnap.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-white font-semibold hover:bg-[#222] transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5 text-riverton-silver" />
              TeamSnap Login
            </a>
          </div>
        </div>
      </div>

      {/* Quick LinksGrid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Registration", icon: Users, desc: "Join us for the 2026 season", path: "/registration" },
          { title: "Divisions", icon: Trophy, desc: "Explore age groups & leagues", path: "/divisions" },
          { title: "Field Locations", icon: MapPin, desc: "Find practice and game fields", path: "/about/fields" },
          { title: "Calendar", icon: Calendar, desc: "Upcoming events & tryouts", path: "/tournament" }
        ].map((item, i) => (
          <Link 
            key={i}
            to={item.path}
            className="group flex flex-col p-6 rounded-2xl bg-[#151515] border border-[#2a2a2a] hover:border-riverton-purple/50 hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="bg-riverton-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6 text-riverton-purple group-hover:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-riverton-silver">{item.desc}</p>
          </Link>
        ))}
      </div>

      {/* Announcements */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
          Latest Information
        </h2>
        <div className="bg-[#151515] rounded-2xl border border-[#2a2a2a] p-6">
          <div className="border-l-4 border-riverton-purple pl-4 py-2">
            <h3 className="text-lg font-bold text-white">2026 Season Schedule</h3>
            <p className="text-riverton-silver mt-2">Season Schedule and Games will be available Mid-March. You can plan on two games per week between Monday and Saturday. Practices will be organized by the individual teams. Games will begin the week of April 6th and run through the end of June.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
