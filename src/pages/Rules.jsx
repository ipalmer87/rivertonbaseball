import { BookOpen, Scale, AlertTriangle, ScrollText } from 'lucide-react';
import { useState } from 'react';

const rulesData = [
  {
    division: "Tee Ball 3 & 4",
    rules: [
      "All players hit off a tee. No pitching.",
      "Scores and standings are not kept.",
      "Continuous batting order (every player bats each inning).",
      "No outs recorded. If a player is 'out' on a play, they remain on base."
    ]
  },
  {
    division: "Coach Pitch 5 / Rookie 6",
    rules: [
      "Coach pitches to their own team.",
      "Batter receives a maximum of 5 pitches. If no hit, they may use a tee.",
      "Outs are recorded, but innings end after 5 runs or 3 outs.",
      "No stealing or leading off."
    ]
  },
  {
    division: "PeeWee (7-8)",
    rules: [
      "Player pitch is introduced.",
      "Pitch count limits strongly enforced (max 50 pitches/day).",
      "No leading off; stealing allowed only after the ball crosses home plate.",
      "5 run limit per inning."
    ]
  },
  {
    division: "Minor (9-10) & Major (11-12)",
    rules: [
      "Standard baseball rules largely apply.",
      "Leading off and stealing permitted.",
      "Dropped third strike rule in effect for Majors.",
      "Balks enforced with warnings (Minors) or strict enforcement (Majors)."
    ]
  }
];

export default function Rules() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">League Rules</h1>
        <p className="text-riverton-silver text-lg">Quick Reference Guide for Riverton Baseball Divisions</p>
      </div>

      {/* Global Rules / Code of Conduct Alert */}
      <div className="bg-[#151515] border border-riverton-purple/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="bg-riverton-purple/10 p-4 rounded-full">
          <Scale className="w-8 h-8 text-riverton-purple" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Sportsmanship First</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            All players, coaches, and spectators must adhere to our Code of Conduct. Harassment of umpires or aggressive behavior will result in immediate ejection from the park. Remember, it's about the kids.
          </p>
        </div>
      </div>

      {/* Division Rules Tabs */}
      <div className="bg-[#151515] rounded-3xl border border-[#2a2a2a] overflow-hidden mt-8">
        <div className="flex flex-wrap border-b border-[#2a2a2a]">
          {rulesData.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[140px] py-4 px-6 text-sm font-bold transition-all ${
                activeTab === idx 
                  ? 'bg-riverton-purple/20 text-riverton-purple border-b-2 border-riverton-purple' 
                  : 'text-gray-500 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {tab.division}
            </button>
          ))}
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <ScrollText className="w-6 h-6 text-riverton-purple" />
            {rulesData[activeTab].division} Rules
          </h2>
          <ul className="space-y-4">
            {rulesData[activeTab].rules.map((rule, idx) => (
              <li key={idx} className="flex gap-4 p-4 rounded-xl bg-[#1a1a1a] border border-[#222]">
                <AlertTriangle className="w-5 h-5 text-riverton-purple shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
