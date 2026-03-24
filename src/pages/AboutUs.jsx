import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FileText, Navigation, Users, HelpCircle, MapPin, BadgeDollarSign, Mail, Copy, CheckCircle2, BookOpen, TrendingUp, CalendarClock, DollarSign, ExternalLink } from 'lucide-react';

const BoardMemberCard = ({ member }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(member.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-[#151515] p-5 rounded-xl border border-gray-200 dark:border-[#2a2a2a] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h4>
        <p className="text-riverton-purple text-sm font-semibold mb-3">{member.role}</p>
      </div>
      <button 
        onClick={handleCopy}
        className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer text-left group"
        title="Click to copy email"
      >
        {copied ? (
          <><CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-500" /> <span className="text-green-600 dark:text-green-500 font-bold">Copied!</span></>
        ) : (
          <><Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" /> <span className="break-all font-medium">{member.email}</span></>
        )}
      </button>
    </div>
  );
};

const Board = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Riverton Baseball Board</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Sample Board Members Based on the Web View */}
      {[
        { name: "Randy Smith", role: "League President", email: "randy.smith@rivertonbaseball.org" },
        { name: "Jenny Hendricks", role: "General Manager", email: "jenny.hendricks@rivertonbaseball.org" },
        { name: "Amber Elkins", role: "Secretary", email: "amber.elkins@rivertonbaseball.org" },
        { name: "McKade Christensen", role: "Scheduler/Tournament Director", email: "mckade.christensen@rivertonbaseball.org" },
        { name: "Caton Hansen", role: "Legal Counsel", email: "caton.hansen@rivertonbaseball.org" },
        { name: "Jeff Warner", role: "Rules Manager", email: "jeff.warner@rivertonbaseball.org" },
        { name: "Zach Bawden", role: "AAA Commissioner", email: "zach.bawden@rivertonbaseball.org" },
        { name: "Kelsie Bawden", role: "Social Media Manager", email: "kelsie.bawden@rivertonbaseball.org" },
        { name: "Mitch Wanlass", role: "Umpire In Chief", email: "mitch.wanless@rivertonbaseball.org" },
        { name: "Amber Christensen", role: "Community Partner Manager", email: "amber.christensen@rivertonbaseball.org" },
        { name: "Scott Mullins", role: "Commissioner 7-12yr", email: "scott.mullins@rivertonbaseball.org" },
        { name: "Dustin Tycksen", role: "Asst. Commissioner 7-12yr", email: "dustin.tycksen@rivertonbaseball.org" },
        { name: "Kayla Penman", role: "Asst. Commissioner 7-12yr", email: "kayla.penman@rivertonbaseball.org" },
        { name: "Nate Elkins", role: "Equipment Manager", email: "nate.elkins@rivertonbaseball.org" },
        { name: "Austin Dansie", role: "Asst. Equipment Manager", email: "austin.dansie@rivertonbaseball.org" },
        { name: "Marissa Dansie", role: "Asst. Schedule Manager", email: "marissa.dansie@rivertonbaseball.org" },
        { name: "Lars Lundberg", role: "Commissioner 3-6yr", email: "lars.lundberg@rivertonbaseball.org" },
        { name: "Alex Harrison", role: "Team Manager Coordinator", email: "alex.harrison@rivertonbaseball.org" },
        { name: "Scott Harrison", role: "Team Manager Coordinator", email: "scott.harrison@rivertonbaseball.org" },
        { name: "Jaime Sieverts", role: "Snack Shack Manager", email: "jamie.sieverts@rivertonbaseball.org" },
        { name: "Angelo DeJesus", role: "Fall Ball Commissioner", email: "angelo.deJesus@rivertonbaseball.org" },
        { name: "Laurel Penman", role: "Community Partner Support", email: "laurel.penman@rivertonbaseball.org" },
        { name: "Jenny Ambrose", role: "Apparel Manager", email: "jenny.ambrose@rivertonbaseball.org" },
        { name: "Ben Pearson", role: "13U-18U Commissioner", email: "ben.pearson@rivertonbaseball.org" },
        { name: "Brad Thorup", role: "13U-18U Asst. Commissioner", email: "brad.thorup@rivertonbaseball.org" },
        { name: "Ian Palmer", role: "Fall Ball Asst. Commissioner", email: "ian.palmer@rivertonbaseball.org" },
        { name: "Justin Whitney", role: "Fall Ball Asst. Commissioner", email: "justin.whitney@rivertonbaseball.org" },
        { name: "Bridgette Turner", role: "Communications Manager", email: "bridgette.turner@rivertonbaseball.org" }
      ].map((member, idx) => (
        <BoardMemberCard key={idx} member={member} />
      ))}
    </div>
  </div>
);

const Placeholder = ({ title }) => (
  <div className="bg-white dark:bg-[#151515] p-8 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] text-center min-h-[400px] flex flex-col justify-center shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <p className="text-gray-600 dark:text-gray-400">Content for this section is being updated.</p>
  </div>
);

const FieldLocations = () => (
  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
    <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#2a2a2a]">
      <img 
        src="/images/fields.jpg" 
        alt="Riverton Baseball Fields" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">Our Fields & Facilities</h2>
          <p className="text-riverton-silver font-medium text-lg">CR Hamilton Park, Riverton Utah</p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-riverton-purple" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Main Location</h3>
        </div>
        <p className="text-gray-600 dark:text-riverton-silver leading-relaxed mb-6">
          All Riverton Baseball games are held at the beautiful CR Hamilton Park. This facility features multiple well-maintained diamonds, batting cages, and a concession stand.
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-riverton-purple pl-4">
            <h4 className="font-bold text-gray-900 dark:text-white">CR Hamilton Park</h4>
            <p className="text-sm text-gray-500">3700 W 13800 S, Riverton, UT 84065</p>
          </div>
          <a 
            href="https://www.google.com/maps/dir//CR+Hamilton+Park,+3700+W+13800+S,+Riverton,+UT+84065" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-riverton-purple text-white text-sm font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
          >
            Get Directions
            <Navigation className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-riverton-purple" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Info</h3>
          </div>
          <ul className="space-y-3 text-gray-600 dark:text-riverton-silver text-sm">
            <li className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <a href="https://www.ksl.com/weather/forecast?zip=84065" target="_blank" rel="noopener noreferrer" className="hover:text-riverton-purple transition-colors font-semibold">
                KSL Weather Forecast (84065)
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-riverton-purple/10 flex items-center justify-center text-riverton-purple">
                <Navigation className="w-4 h-4" />
              </div>
              <a href="https://www.rivertonutah.gov/parks/recreation-facilities/cr-hamilton-sports-complex.php" target="_blank" rel="noopener noreferrer" className="hover:text-riverton-purple transition-colors font-semibold">
                Official City Facility Page
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-4">Facility Rules</h3>
          <ul className="space-y-2 text-gray-600 dark:text-riverton-silver text-sm">
            <li className="flex items-start gap-2">
              <span className="text-riverton-purple font-bold">•</span>
              No pets allowed inside the fenced field areas.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-riverton-purple font-bold">•</span>
              No smoking or vaping on park property.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-riverton-purple font-bold">•</span>
              Please clean up all trash in the dugouts after games.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Umpires = () => (
  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
    <div className="bg-riverton-purple text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      <div className="relative z-10 text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Umpires</h2>
        <p className="text-xl text-purple-100 font-bold max-w-2xl mx-auto">
          Interested in Becoming a Riverton Baseball Umpire?
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        { 
          title: "Learning Opportunity", 
          text: "Umpiring allows you to learn more about the rules of the sport and gain a deeper understanding of the game.",
          icon: BookOpen,
          color: "blue"
        },
        { 
          title: "Personal Growth", 
          text: "Umpiring requires good decision making skills, quick thinking, and the ability to handle difficult situations.",
          icon: TrendingUp,
          color: "green"
        },
        { 
          title: "Flexibility", 
          text: "You indicate the days or times you are available to work games.",
          icon: CalendarClock,
          color: "purple"
        },
        { 
          title: "Financial Gain", 
          text: "Umpires typically make $35-60 per game, depending on level and experience.",
          icon: DollarSign,
          color: "amber"
        }
      ].map((benefit, idx) => (
        <div key={idx} className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-all">
          <div className={`w-12 h-12 rounded-xl bg-${benefit.color}-500/10 flex items-center justify-center mb-4`}>
            <benefit.icon className={`w-6 h-6 text-${benefit.color}-500`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
          <p className="text-gray-600 dark:text-riverton-silver text-sm leading-relaxed">
            {benefit.text}
          </p>
        </div>
      ))}
    </div>

    <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">2026 Spring Season</h3>
          <div className="flex items-center justify-center md:justify-start gap-4 text-purple-200">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-green-500" />
               <span className="font-semibold">Minimum Age: 12</span>
             </div>
          </div>
          <p className="text-gray-400 max-w-md">Register now on TeamSnap to join our officiating team for the upcoming season.</p>
        </div>
        <a 
          href="https://registration.teamsnap.com/form/49178"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-riverton-purple text-white px-8 py-4 rounded-2xl font-black text-center hover:bg-purple-700 transition-all shadow-lg flex items-center gap-2"
        >
          Register to Umpire
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  const location = useLocation();

  const links = [
    { name: "Board Members", path: "/about", icon: Users, exact: true },
    { name: "Umpires", path: "/about/umpires", icon: Navigation },
    { name: "Field Locations", path: "/about/fields", icon: MapPin },
    { name: "Contact Us", path: "/about/contact", icon: Mail },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 animate-in fade-in duration-500">
      {/* Sidebar Navigation for About Section */}
      <div className="w-full md:w-64 shrink-0">
        <div className="sticky top-24 space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 px-4">About Us Hub</h3>
          {links.map((link) => {
            const isActive = link.exact ? location.pathname === link.path : location.pathname.startsWith(link.path);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-riverton-purple text-white shadow-lg' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/umpires" element={<Umpires />} />
          <Route path="/fields" element={<FieldLocations />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        </Routes>
      </div>
    </div>
  )
}
