import { Trophy, CalendarCheck, MapPin } from 'lucide-react';

export default function Tournament() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Tournaments</h1>
        <p className="text-gray-600 dark:text-riverton-silver text-lg">Compete at the highest level with the Riverton Baseball Tournament Teams.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#151515] dark:to-[#111] p-8 rounded-3xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md group hover:border-riverton-purple/50 transition-all duration-300">
          <Trophy className="w-12 h-12 text-riverton-purple mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Silverwolves Tournaments</h2>
          <p className="text-gray-600 dark:text-riverton-silver leading-relaxed mb-6">
            Riverton Baseball hosts and participates in several tournaments throughout the state of Utah. Our exclusive tournament teams (the Silverwolves) represent the best talent from our league. 
          </p>
          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-riverton-purple" /> Local and State Tourneys</li>
            <li className="flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-riverton-purple" /> Year-Round Play Options</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gradient-to-br dark:from-[#151515] dark:to-[#111] p-8 rounded-3xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-md group hover:border-riverton-purple/50 transition-all duration-300">
          <CalendarCheck className="w-12 h-12 text-riverton-purple mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border-l-4 border-riverton-purple border border-gray-100 dark:border-[#2a2a2a] border-l-riverton-purple">
              <h3 className="font-bold text-gray-900 dark:text-white">Summer Classic</h3>
              <p className="text-sm text-gray-600 dark:text-riverton-silver">TBD - Riverton City Park</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border-l-4 border-riverton-purple border border-gray-100 dark:border-[#2a2a2a] border-l-riverton-purple">
              <h3 className="font-bold text-gray-900 dark:text-white">Fall State Championships</h3>
              <p className="text-sm text-gray-600 dark:text-riverton-silver">TBD - Regional Complexes</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 italic">* Dates and locations are subject to change based on league scheduling.</p>
        </div>
      </div>
    </div>
  )
}
