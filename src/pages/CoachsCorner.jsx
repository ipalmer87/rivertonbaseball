import React from 'react';
import { GraduationCap, Calendar, Clock, AlertCircle, ExternalLink, MapPin } from 'lucide-react';

export default function CoachsCorner() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-4 rounded-full mb-6">
          <GraduationCap className="w-12 h-12 text-riverton-purple" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Coach's Corner</h1>
      </div>

      {/* Practice Field Sign-Ups */}
      <section className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl overflow-hidden shadow-xl transition-all duration-300">
        <div className="bg-riverton-purple p-6 text-white text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight">Practice Field Sign-Ups</h2>
          <p className="text-purple-100 font-bold mt-1">SELECT ONE TIME SLOT PER TEAM</p>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-riverton-purple/10 p-2 rounded-lg shrink-0">
                  <Calendar className="w-5 h-5 text-riverton-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Active Dates</h4>
                  <p className="text-sm text-gray-600 dark:text-riverton-silver mt-1">
                    Practice times are available from <span className="font-bold text-gray-900 dark:text-white">March 2nd to April 4th</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-riverton-purple/10 p-2 rounded-lg shrink-0">
                  <Clock className="w-5 h-5 text-riverton-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Light Schedule</h4>
                  <p className="text-sm text-gray-600 dark:text-riverton-silver mt-1">
                    LIGHTS GO OFF AT <span className="font-bold text-gray-900 dark:text-white">10 PM</span> FOR PRACTICES.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Tournament Closures</h4>
                  <p className="text-sm text-gray-600 dark:text-riverton-silver mt-1 italic">
                    Fields will be closed <span className="font-bold">March 20th & 21st</span> and <span className="font-bold">27th & 28th</span> for a tournament.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-2xl border border-dashed border-gray-300 dark:border-[#333]">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">SignUp Instructions</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-riverton-silver">
                <li className="flex gap-2">
                  <span className="text-riverton-purple font-black">1.</span>
                  Sign up with your team name and division (e.g. Marlins PeeWee).
                </li>
                <li className="flex gap-2">
                  <span className="text-riverton-purple font-black">2.</span>
                  Ensure you are only selecting one slot per week to allow all teams access.
                </li>
                <li className="flex gap-2">
                  <span className="text-riverton-purple font-black">3.</span>
                  If you cannot edit the form, please use the alternate link below.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://docs.google.com/spreadsheets/d/1OnNQYpMs_ESvBDPH9XiI9V6tOluLFqa1MF51x2oUdCY/edit?pli=1&gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-riverton-purple text-white px-8 py-4 rounded-2xl font-black text-center hover:bg-purple-700 transition-all shadow-lg shadow-riverton-purple/20 flex items-center justify-center gap-2 group"
            >
              Access Practice Schedule
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
