import { AlertCircle, CalendarClock, Users, CheckCircle2 } from 'lucide-react';

export default function Registration() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Player Registration</h1>
        <p className="text-riverton-silver text-lg">Join Riverton Baseball for the upcoming 2026 season!</p>
      </div>

      {/* Main Registration Alert */}
      <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-2xl p-6 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Registration Status update</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Registration for the 2026 season is FULL, with exception of our 18U age group! Any registrations made will place you on a waitlist with a low probability of being placed on a team, unless we have youth that have previously registered decide to not play.
          </p>
          <a shrink-0
            href="https://registration.teamsnap.com/form/41531" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-colors"
          >
            Go to Waitlist Registration
          </a>
        </div>
      </div>

      {/* Season Info Timeline */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a]">
          <CalendarClock className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Schedule Release</h4>
          <p className="text-riverton-silver text-sm">Season Schedule and Games will be available Mid-March.</p>
        </div>
        
        <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a]">
          <CheckCircle2 className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Opening Day</h4>
          <p className="text-riverton-silver text-sm">Games will begin the week of April 6th and run through the end of June.</p>
        </div>

        <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a]">
          <Users className="w-8 h-8 text-riverton-purple mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Commitment</h4>
          <p className="text-riverton-silver text-sm">Plan on approximately 2 games per week scheduled by the league. Practices are organized by individual teams.</p>
        </div>
      </div>

      {/* Division Logic Info */}
      <div className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl p-8 border border-[#2a2a2a]">
        <h2 className="text-2xl font-bold text-white mb-6">Which Division Should I Register For?</h2>
        <div className="space-y-4">
          <p className="text-riverton-silver">
            Riverton Baseball uses a date cutoff to determine your player's league age. Your player's league age dictates which division they should register for.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Tee Ball 3</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Tee Ball 4</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Tee Ball / Coach Pitch 5</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Rookie 6</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">PeeWee (7-8)</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Minor (9-10)</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">Major (11-12)</span>
            </li>
            <li className="flex items-center gap-3 bg-[#222] p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-riverton-purple"></span>
              <span className="text-white font-medium">13U - 18U</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
