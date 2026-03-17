import { ExternalLink, Handshake } from 'lucide-react';

const sponsors = [
  { name: "DICK'S Sporting Goods", url: "https://www.dickssportinggoods.com/", tier: "Platinum" },
  { name: "Riverton City", url: "#", tier: "Gold" },
  { name: "Local MVP Sponsor", url: "#", tier: "Silver" },
  { name: "Community Supporter", url: "#", tier: "Bronze" }
];

export default function Sponsors() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Our Sponsors</h1>
        <p className="text-riverton-silver text-lg">Thank you to the generous businesses that make Riverton Baseball possible.</p>
      </div>

      <div className="bg-gradient-to-br from-[#151515] to-[#111] border border-[#2a2a2a] p-8 md:p-12 rounded-3xl text-center mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-riverton-purple to-transparent"></div>
        <Handshake className="w-16 h-16 text-riverton-purple mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Become a Sponsor Today!</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Sponsorships are vital to providing uniforms, equipment, and field maintenance for our youth. Partner with us and get your brand in front of thousands of local families.
        </p>
        <button className="px-8 py-3 bg-riverton-purple text-white font-bold rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25">
          View Sponsorship Options
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {sponsors.map((sponsor, idx) => (
          <a
            key={idx}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6 rounded-2xl bg-[#151515] border border-[#2a2a2a] hover:border-riverton-purple/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-riverton-purple bg-riverton-purple/10 px-3 py-1 rounded-full">
                {sponsor.tier} Partner
              </span>
              <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-riverton-purple transition-colors">
              {sponsor.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
