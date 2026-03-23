import React from 'react';
import { Trophy, CalendarDays, MapPin, ExternalLink, CalendarPlus, Users } from 'lucide-react';

const TournamentCard = ({ title, date, location, cost, details, link }) => (
  <div className="bg-white dark:bg-gradient-to-br dark:from-[#151515] dark:to-[#111] p-6 rounded-3xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md group hover:border-riverton-purple/50 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-2xl bg-riverton-purple/10 dark:bg-riverton-purple/20 text-riverton-purple">
        <Trophy className="w-6 h-6" />
      </div>
      {cost && (
        <span className="bg-gray-900 dark:bg-black text-white text-xs font-black px-3 py-1 rounded-full border border-gray-700 dark:border-gray-800">
          {cost}
        </span>
      )}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{title}</h3>
    
    <div className="space-y-2 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
        <CalendarDays className="w-4 h-4 text-riverton-purple/70" />
        {date}
      </div>
      {location && (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 italic">
          <MapPin className="w-4 h-4 text-riverton-purple/70" />
          {location}
        </div>
      )}
    </div>

    <div className="flex-1 text-sm text-gray-600 dark:text-riverton-silver leading-relaxed mb-6">
      {details}
    </div>

    {link && (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-riverton-purple text-white rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-riverton-purple/20"
      >
        <span>Register / Details</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    )}
  </div>
);

export default function Tournament() {
  const allTournaments = [
    {
      title: "Spring Training / Umpire Training #1",
      date: "March 20th & 21st, 2026",
      location: "Riverton Fields",
      cost: "$375",
      details: "4 games, 1:20 game time. Training focus for umpires and game reps for players. WBL League Rules.",
      link: "https://registration.teamsnap.com/form/42021",
    },
    {
      title: "Spring Training / Umpire Training #2",
      date: "March 27th & 28th, 2026",
      location: "Riverton Fields",
      cost: "$375",
      details: "4 games, 1:20 game time. Training focus for umpires and game reps for players. WBL League Rules.",
      link: "https://registration.teamsnap.com/form/42030",
    },
    {
      title: "End of Season Tournament",
      date: "5/30/26 - 6/9/26",
      location: "TBD",
      details: "League championship tournament for Rookie 6, PeeWee, Minors, and Majors divisions.",
    },
    {
      title: "AAA - End of Season Tournament",
      date: "6/9/26 - 6/12/26 & 6/16/26 - 6/19/26",
      location: "TBD",
      details: "Double Elimination tournament for our AAA Intact divisions.",
    },
    {
      title: "Walk Off Tournament",
      date: "6/12/26 - 6/16/26",
      location: "TBD",
      details: "Top recreation teams play against other leagues in a competitive format.",
    },
    {
      title: "All Star Tournament",
      date: "6/23/26 - 6/28/26",
      location: "TBD",
      details: "Top recreation players are selected to represent Riverton against all stars from other leagues.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Tournaments & Events</h1>
        <div className="w-24 h-1 bg-riverton-purple mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-riverton-silver text-lg max-w-2xl mx-auto">
          Riverton Baseball hosts and participates in premier tournaments throughout the season, providing players with high-level competition and development opportunities.
        </p>
      </div>

      {/* Unified Tournaments Section */}
      <section className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTournaments.map((t, i) => (
            <TournamentCard key={i} {...t} />
          ))}
        </div>
      </section>

      <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-2xl text-center border border-gray-200 dark:border-[#2a2a2a]">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          * Dates and locations are subject to change based on league scheduling and weather conditions.
        </p>
      </div>
    </div>
  );
}
