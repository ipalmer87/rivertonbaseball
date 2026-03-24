import { useState } from 'react';
import { AlertCircle, CalendarClock, Users, CheckCircle2, Calculator } from 'lucide-react';

export default function Registration() {
  const [birthDate, setBirthDate] = useState('');

  const calculateDivision = (dateString) => {
    if (!dateString) return null;
    
    const [year, month, day] = dateString.split('-').map(Number);
    // League age depends on the player's age on April 30th of the season year (2026)
    // If born in May or later, they haven't had their birthday by cutoff date
    const baseballAge = 2026 - year - (month >= 5 ? 1 : 0);

    if (baseballAge >= 16 && baseballAge <= 18) return { name: "16-18", ageGroup: "16-18" };
    if (baseballAge >= 14 && baseballAge <= 15) return { name: "14-15", ageGroup: "14-15" };
    if (baseballAge === 13) return { name: "13U", ageGroup: "13" };
    if (baseballAge >= 11 && baseballAge <= 12) return { name: "Majors", ageGroup: "11-12" };
    if (baseballAge >= 9 && baseballAge <= 10) return { name: "Minors", ageGroup: "9-10" };
    if (baseballAge >= 7 && baseballAge <= 8) return { name: "PeeWee", ageGroup: "7-8" };
    if (baseballAge === 6) return { name: "Rookie 6", ageGroup: "6" };
    if (baseballAge === 5) return { name: "Coach Pitch 5", ageGroup: "5" };
    if (baseballAge === 4) return { name: "Coach Pitch / T-Ball 4", ageGroup: "4" };
    if (baseballAge === 3) return { name: "Tee-Ball 3", ageGroup: "3" };
    
    return { name: "Not Eligible", error: "Player age is outside of standard divisions (3-18)" };
  };

  const divisionResult = calculateDivision(birthDate);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Player Registration</h1>
        <p className="text-gray-600 dark:text-riverton-silver text-lg">Join Riverton Baseball for the upcoming 2026 season!</p>
      </div>

      {/* Fall Ball Registration Info */}
      <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl transition-all duration-300 group hover:border-riverton-purple/30">
        <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-5 rounded-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
          <Users className="w-10 h-10 text-riverton-purple" />
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Fall Ball Registration</h3>
          <p className="text-gray-700 dark:text-riverton-silver leading-relaxed">
            Riverton Baseball is proud to partner with Riverton City to offer a recreational Fall Ball league focused on skill-building and fun for players ages 3–8. Registration officially opens on <span className="text-riverton-purple font-bold">April 1, 2026</span>, with a general fee of <span className="font-bold text-gray-900 dark:text-white">$55</span> that includes a full Jr. Bees uniform, hat, and two tickets to a Bees game.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            The season runs from August 5 through August 27 at the CR Hamilton Sports Complex, featuring two evening games per week. Parents are encouraged to register early to secure a spot.
          </p>
          <div className="pt-2">
            <a 
              href="https://www.rivertonutah.gov/recreation/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-riverton-purple text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
            >
              Riverton City Recreation
              <CheckCircle2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Season Info Timeline */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow">
          <CalendarClock className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Schedule Release</h4>
          <p className="text-gray-600 dark:text-riverton-silver text-sm">Season Schedule and Games will be available Mid-March.</p>
        </div>
        
        <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow">
          <CheckCircle2 className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Opening Day</h4>
          <p className="text-gray-600 dark:text-riverton-silver text-sm">Games will begin the week of April 6th and run through the end of June.</p>
        </div>

        <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow">
          <Users className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Commitment</h4>
          <p className="text-gray-600 dark:text-riverton-silver text-sm">Plan on approximately 2 games per week scheduled by the league. Practices are organized by individual teams.</p>
        </div>
      </div>

      {/* Division Calculator Tool */}
      <div className="mt-12 bg-gradient-to-br from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2a2a2a] shadow-lg transition-colors duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-riverton-purple" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Which Division Should I Register For?</h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-riverton-silver">
            Riverton Baseball uses a date cutoff of April 30th to determine your player's league age. Select your child's birthday below to see their recommended division for the Spring 2026 season.
          </p>

          <div className="max-w-sm">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Player's Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full bg-white dark:bg-[#222] border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-riverton-purple/50 focus:border-riverton-purple transition-all"
            />
          </div>

          <div className="h-px bg-gray-200 dark:bg-[#333] my-6"></div>

          {/* Result Display */}
          <div className="min-h-[100px] flex items-center">
            {!birthDate ? (
              <p className="text-gray-500 italic">Enter a birthdate above to calculate your division.</p>
            ) : divisionResult?.error ? (
              <div className="text-red-400 bg-red-400/10 px-4 py-3 rounded-xl border border-red-400/20 w-full">
                {divisionResult.error}
              </div>
            ) : (
              <div className="w-full animate-in slide-in-from-bottom-2 fade-in duration-300">
                <p className="text-sm text-gray-500 dark:text-riverton-silver uppercase tracking-wider font-bold mb-2">
                  Recommended Division (League Age: {divisionResult.ageGroup})
                </p>
                <div className="flex items-center justify-between bg-white dark:bg-[#222] border-l-4 border-riverton-purple p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#333] border-l-riverton-purple dark:border-l-riverton-purple">
                  <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{divisionResult.name}</span>
                  <a 
                    href="#registration"
                    className="hidden sm:inline-flex items-center justify-center bg-riverton-purple text-white px-5 py-2 rounded-lg font-bold hover:bg-purple-600 transition-colors text-sm"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
