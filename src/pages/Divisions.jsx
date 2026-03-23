import React, { useState } from 'react';
import { Trophy, CalendarCheck, ExternalLink, X, Info } from 'lucide-react';

const divisionsList = [
  { 
    name: "Tee Ball 3 (Age 3)", 
    desc: "Introduction to baseball fundamentals. Soft balls, hitting off a tee.",
    comp: false 
  },
  { 
    name: "Tee Ball 4 (Age 4)", 
    desc: "Continued fundamentals with increased field awareness and team play.",
    comp: false 
  },
  { 
    name: "Coach Pitch 5 (Age 5)", 
    desc: "Transitioning from tee to coach pitching. Building hitting mechanics.",
    comp: false 
  },
  { 
    name: "Rookie 6 (Age 6)", 
    desc: "Faster pace coach pitch. Focus on defensive outs and base running.",
    comp: false 
  },
  { 
    name: "PeeWee (Ages 7-8)", 
    desc: "Introduction to kid pitch. Strikeouts and walks are introduced.",
    comp: true,
    gcWidgetId: "bfe3285b-08bc-4f64-a936-d637cdc5e892",
    gcOrgId: "Ad80gLupCQe8"
  },
  { 
    name: "Minor (Ages 9-10)", 
    desc: "Competitive play. Stealing bases and full defensive alignments.",
    comp: true,
    gcWidgetId: "57b4a099-1d93-4d76-80c4-2487b6a4437f",
    gcOrgId: "GsSt0MLHnNXZ"
  },
  { 
    name: "Major (Ages 11-12)", 
    desc: "Preparing for full-size diamonds. Advanced baseball strategies.",
    comp: true,
    gcWidgetId: "38a93d18-1997-4494-ba70-7c87a26d2f7d",
    gcOrgId: "WapNRfmI1lX0"
  },
  { 
    name: "13U - 18U", 
    desc: "Full MLB rules on full-size diamonds for teenage players.",
    comp: false 
  }
];

export default function Divisions() {
  const [activeDivision, setActiveDivision] = useState(null);

  const openSchedule = (div) => {
    setActiveDivision(div);
    document.body.style.overflow = 'hidden';
  };

  const closeSchedule = () => {
    setActiveDivision(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 italic tracking-tight uppercase">League Divisions</h1>
        <div className="w-24 h-1 bg-riverton-purple mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-riverton-silver text-lg max-w-2xl mx-auto leading-relaxed">
          From ages 3 to 18, Riverton Baseball offers a progression system designed to safely build skills and foster a love of the game.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisionsList.map((div, idx) => (
          <div key={idx} className="flex flex-col bg-white dark:bg-gradient-to-br dark:from-[#151515] dark:to-[#111] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-xl hover:border-riverton-purple/50 transition-all duration-500 group relative overflow-hidden h-full">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0">
                <h3 className="text-xl font-black text-gray-900 dark:text-white leading-none tracking-tight group-hover:text-riverton-purple transition-colors">{div.name}</h3>
              </div>
            </div>

            {div.comp && (
              <div className="space-y-3 mt-6">
                <button 
                  onClick={() => openSchedule(div)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-riverton-purple text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>View Schedule</span>
                </button>
                <a 
                  href={`https://web.gc.com/organizations/${div.gcOrgId}/standings`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 font-bold text-riverton-purple dark:text-purple-400 hover:bg-riverton-purple/5 dark:hover:bg-riverton-purple/10 rounded-xl transition-colors text-sm"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Full Standings</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* GameChanger Schedule Modal */}
      {activeDivision && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#151515] w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-[#2a2a2a] animate-in zoom-in-95 duration-300">
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-[#2a2a2a] flex justify-between items-center bg-gray-50 dark:bg-[#1a1a1a]">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  {activeDivision.name} - Live Schedule
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Powered by GameChanger
                </p>
              </div>
              <button 
                onClick={closeSchedule}
                className="p-2 hover:bg-gray-200 dark:hover:bg-[#2a2a2a] rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors" />
              </button>
            </div>
            <div className="flex-1 bg-white relative">
              <iframe 
                src={`https://widgets.gc.com/scoreboard/${activeDivision.gcWidgetId}?parent=${window.location.origin}&id=gc-embedded-scoreboard-1&maxVerticalGamesVisible=6`}
                className="w-full h-full min-h-[500px] border-none"
                title={`${activeDivision.name} GameChanger Schedule`}
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-[#2a2a2a] text-center">
              <a 
                href={`https://web.gc.com/organizations/${activeDivision.gcOrgId}/home`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-riverton-purple hover:underline"
              >
                View full organization page on GameChanger →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
