import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FileText, Navigation, Users, HelpCircle, MapPin, BadgeDollarSign, Mail, Copy, CheckCircle2 } from 'lucide-react';

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

export default function AboutUs() {
  const location = useLocation();

  const links = [
    { name: "Board Members", path: "/about", icon: Users, exact: true },
    { name: "Code of Conduct", path: "/about/conduct", icon: FileText },
    { name: "Umpires", path: "/about/umpires", icon: Navigation },
    { name: "Field Locations", path: "/about/fields", icon: MapPin },
    { name: "Refund Policy", path: "/about/refunds", icon: BadgeDollarSign },
    { name: "FAQ", path: "/about/faq", icon: HelpCircle },
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
          <Route path="/conduct" element={<Placeholder title="Code of Conduct" />} />
          <Route path="/umpires" element={<Placeholder title="Umpires" />} />
          <Route path="/fields" element={<Placeholder title="Field Locations" />} />
          <Route path="/refunds" element={<Placeholder title="Refund Policy" />} />
          <Route path="/faq" element={<Placeholder title="Frequently Asked Questions" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        </Routes>
      </div>
    </div>
  )
}
