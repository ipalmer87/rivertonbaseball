import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function CoachsCorner() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-4 rounded-full mb-6">
          <GraduationCap className="w-12 h-12 text-riverton-purple" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Coach's Corner</h1>
        <p className="text-gray-600 dark:text-riverton-silver text-lg max-w-2xl">
          Resources, drills, and information to help our dedicated Riverton Baseball coaches succeed.
        </p>
      </div>

      <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl p-12 shadow-xl text-center flex flex-col items-center gap-4 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">More Resources Coming Soon</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
          We are currently building out the Coach's Corner with specialized drills, practice plans, and league guidelines. Check back soon!
        </p>
      </div>
    </div>
  );
}
