// Icons removed from Divisions page

const divisionsList = [
  { name: "Tee Ball 3 (Age 3)", desc: "Introduction to baseball fundamentals. Soft balls, hitting off a tee." },
  { name: "Tee Ball 4 (Age 4)", desc: "Continued fundamentals with increased field awareness and team play." },
  { name: "Coach Pitch 5 (Age 5)", desc: "Transitioning from tee to coach pitching. Building hitting mechanics." },
  { name: "Rookie 6 (Age 6)", desc: "Faster pace coach pitch. Focus on defensive outs and base running." },
  { name: "PeeWee (Ages 7-8)", desc: "Introduction to kid pitch. Strikeouts and walks are introduced." },
  { name: "Minor (Ages 9-10)", desc: "Competitive play. Stealing bases and full defensive alignments." },
  { name: "Major (Ages 11-12)", desc: "Preparing for full-size diamonds. Advanced baseball strategies." },
  { name: "13U - 18U", desc: "Full MLB rules on full-size diamonds for teenage players." }
];

export default function Divisions() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">League Divisions</h1>
        <p className="text-riverton-silver text-lg max-w-2xl mx-auto">
          From ages 3 to 18, Riverton Baseball offers a progression system designed to safely build skills and foster a love of the game.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisionsList.map((div, idx) => (
          <div key={idx} className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] hover:border-riverton-purple/50 transition-colors group">
            <h3 className="text-xl font-bold text-white mb-2">{div.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{div.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
