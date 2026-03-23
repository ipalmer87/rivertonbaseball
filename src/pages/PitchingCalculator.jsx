import React, { useState, useMemo } from 'react';
import { Calculator, Calendar, AlertTriangle, ArrowRight, Info, ShieldAlert } from 'lucide-react';

const PITCH_DATA = {
  "PeeWee": { max: 50, r0: 19, r1: 35 },
  "Minor": { max: 65, r0: 29, r1: 45 },
  "Major": { max: 75, r0: 34, r1: 55 },
  "13U": { max: 80, r0: 44, r1: 59 },
  "14/15": { max: 95, r0: 49, r1: 65 },
  "16/18": { max: 95, r0: 49, r1: 65 }
};

export default function PitchingCalculator() {
  const [division, setDivision] = useState('Minor');
  const [datePitched, setDatePitched] = useState('');
  const [pitchesThrown, setPitchesThrown] = useState('');

  const result = useMemo(() => {
    if (!division || !datePitched || pitchesThrown === '' || isNaN(pitchesThrown)) return null;
    
    const p = Math.max(0, Number(pitchesThrown));
    if (p === 0) return null;

    const data = PITCH_DATA[division];
    
    let requiredRest = 0;
    if (p <= data.r0) {
      requiredRest = 0;
    } else if (p <= data.r1) {
      requiredRest = 1;
    } else {
      requiredRest = 2;
    }

    const [year, month, day] = datePitched.split('-');
    const pitchedDate = new Date(year, month - 1, day);
    
    const nextEligible = new Date(pitchedDate);
    nextEligible.setDate(pitchedDate.getDate() + requiredRest + 1);

    const formatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const nextDateStr = nextEligible.toLocaleDateString(undefined, formatOptions);
    const ptFormat = { weekday: 'long' };
    const pitchedWeekdayStr = pitchedDate.toLocaleDateString(undefined, ptFormat);

    return {
      dailyMax: data.max,
      requiredRest,
      nextEligibleDate: nextDateStr,
      pitchedWeekday: pitchedWeekdayStr,
      exceededMax: p > data.max
    };
  }, [division, datePitched, pitchesThrown]);

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Input Form */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] p-6 lg:p-8 rounded-2xl shadow-xl flex flex-col gap-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Game Details</h2>
          
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 dark:text-gray-400 font-medium">Age Division</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white rounded-lg p-3 xl:p-4 focus:ring-2 focus:ring-riverton-purple focus:border-transparent transition-all outline-none"
            >
              <option value="PeeWee">PeeWee (50 Max)</option>
              <option value="Minor">Minor (65 Max)</option>
              <option value="Major">Major (75 Max)</option>
              <option value="13U">13U (80 Max)</option>
              <option value="14/15">14/15 (95 Max)</option>
              <option value="16/18">16/18 (95 Max)</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 dark:text-gray-400 font-medium">Date Pitched</label>
            <input
              type="date"
              value={datePitched}
              onChange={(e) => setDatePitched(e.target.value)}
              className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white rounded-lg p-3 xl:p-4 focus:ring-2 focus:ring-riverton-purple focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 dark:text-gray-400 font-medium">Pitches Thrown</label>
            <input
              type="number"
              min="1"
              placeholder="0"
              value={pitchesThrown}
              onChange={(e) => setPitchesThrown(e.target.value)}
              className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white rounded-lg p-3 xl:p-4 focus:ring-2 focus:ring-riverton-purple focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>

        {/* Results Box */}
        <div className="bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] p-6 lg:p-8 rounded-2xl shadow-xl flex flex-col gap-6 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Calendar className="w-48 h-48 text-gray-900 dark:text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 z-10">Calculated Results</h2>

          {!result ? (
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-[#333] rounded-xl p-8 text-center text-gray-400 z-10">
              Please fill out all the details to calculate rest days.
            </div>
          ) : (
            <div className="flex flex-col gap-5 z-10 h-full animate-in fade-in">
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] p-4 rounded-xl flex justify-between items-center transition-all hover:border-riverton-purple/50">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Daily Max:</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{result.dailyMax} Pitches</span>
              </div>

              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] p-4 rounded-xl flex justify-between items-center transition-all hover:border-riverton-purple/50">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Required Rest:</span>
                <span className="text-2xl font-bold text-riverton-purple">{result.requiredRest} Days</span>
              </div>

              <div className="bg-gradient-to-br from-riverton-purple/10 to-transparent dark:from-riverton-purple/20 border border-riverton-purple/20 dark:border-riverton-purple/30 p-5 rounded-xl flex flex-col gap-2 mt-auto">
                <span className="text-riverton-purple font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Next Eligible Date:
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{result.nextEligibleDate}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 italic mt-1 leading-snug">
                  (Pitched on {result.pitchedWeekday}. {result.requiredRest} full days of rest logic = {result.requiredRest === 1 ? 'Next eligible pitch date is 2 days later' : result.requiredRest === 2 ? 'Next eligible pitch date is 3 days later' : 'Next eligible pitch date is tomorrow'})
                </span>
              </div>

              {result.exceededMax && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 mt-4 text-red-600 dark:text-red-400">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Daily Max Exceeded:</strong> A pitcher throwing {pitchesThrown} pitches exceeds the {result.dailyMax} pitch limit for the {division} division.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Disclaimers & Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="bg-gray-50 dark:bg-[#111]/80 border border-gray-200 dark:border-[#2a2a2a] p-5 rounded-xl flex items-start gap-4 transition-colors duration-300">
          <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <strong>Consecutive Rule Note:</strong> This tool cannot enforce "no pitching 3 consecutive days" because it does not track pitch history across multiple games. Please track consecutive days pitched independently.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-[#111]/80 border border-gray-200 dark:border-[#2a2a2a] p-5 rounded-xl flex items-start gap-4 transition-colors duration-300">
          <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <strong>Rest Days Definition:</strong> "Rest Days" means full calendar days with no pitching. <br/>
            <em>Example:</em> If a player pitches Monday and needs 1 day rest, their next eligible date is Wednesday.
          </p>
        </div>
      </div>

    </div>
  );
}
