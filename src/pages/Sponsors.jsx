import { useState } from 'react';
import { 
  HeartHandshake, 
  Crown, 
  Trophy, 
  Medal, 
  Award, 
  Star,
  Check,
  Copy,
  Mail,
  Phone
} from 'lucide-react';

export default function Sponsors() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amberc@rivertonbaseball.org');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Our Valued Sponsors */}
      <div className="pt-8 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
            Our Valued Sponsors
          </h2>
          <div className="w-16 h-1 bg-riverton-purple mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-8">
          {[
            {
              name: "South Hills Dental Specialists",
              logo: "https://www.southhillsdentalspecialists.com/wp-content/themes/charlie-child/images/logo.webp",
              website: "https://www.southhillsdentalspecialists.com/",
              description: "South Hills Dental Specialists are proud to offer the convenience of pediatric dental care and orthodontic care for children, teens, and adults at our conveniently located office in Riverton, Utah."
            },
            {
              name: "Dicks Sporting Goods",
              logo: "https://www.goodsports.org/assets/dicks-sporting-goods-logo-298x150.jpg",
              website: "https://www.dickssportinggoods.com/",
              description: "At DICK'S Sporting Goods and the DICK’S Sporting Goods Foundation, we believe Sports Matter because participation in sports makes people better. Sports increase confidence and motivate kids to stay in the classroom and aim for higher education. They help build character and teach life lessons that extend well beyond the playing field. That's why we've made it the mission of our Foundation, Community, and Sports Matter programs to give young athletes opportunities to play. DICK'S Sporting Goods Community Program proudly supports leagues, teams, athletes, and outdoor enthusiasts."
            },
            {
              name: "Utah Marshall's Baseball",
              logo: "https://static.wixstatic.com/media/69e627_e403bbaafffb4d0984681debd3683f73~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/69e627_e403bbaafffb4d0984681debd3683f73~mv2.png",
              website: "https://www.mgfmarshalls.com/",
              description: "Riverton Baseball is thrilled to share an exciting partnership between Riverton Baseball and the MGF Marshalls for the upcoming 2026 season. This collaboration opens up amazing opportunities for our community, giving us exceptional access to high-level baseball and fun-filled events."
            }
          ].map((sponsor, idx) => (
            <div key={idx} className="bg-white dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-[#2a2a2a] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-riverton-purple/30 transition-all duration-300 shadow-sm">
              <div className="w-48 h-48 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-black/20 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-500">
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">{sponsor.name}</h3>
                <p className="text-gray-600 dark:text-riverton-silver leading-relaxed">
                  {sponsor.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={sponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-riverton-purple font-bold hover:gap-3 transition-all"
                  >
                    Visit Website
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-200 dark:bg-[#2a2a2a] max-w-2xl mx-auto"></div>

      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
          Sponsorship Options
        </h2>
        <div className="w-16 h-1 bg-riverton-purple mx-auto rounded-full mt-4"></div>
      </div>

      {/* Hero / Intro Section */}
      <div className="bg-riverton-purple text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold font-serif italic mb-6 text-white drop-shadow-md">
            Dear Community Supporter,
          </h2>
          <p className="text-lg leading-relaxed text-purple-50 font-medium">
            Thank you in advance for your interest in supporting the non-profit Riverton Baseball League.
          </p>
          <p className="text-lg leading-relaxed text-purple-50">
            Support from local businesses, such as yours, has allowed our organization to further provide opportunities to underprivileged children. We look forward to partnering with you as we continue to strive to strengthen the youth in our community.
          </p>
        </div>
      </div>

      {/* Sponsorship Packages Grid */}
      <div className="space-y-8">
        
        {/* Top Tier - Full Width */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#0f0f0f] border-2 border-riverton-purple/30 dark:border-riverton-purple/50 rounded-3xl p-8 relative overflow-hidden group hover:border-riverton-purple transition-all duration-300 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-riverton-purple/5 dark:bg-riverton-purple/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 mb-8 pb-8 border-b border-gray-200 dark:border-[#2a2a2a]">
            <div className="flex items-center gap-4">
              <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-4 rounded-2xl">
                <Crown className="w-10 h-10 text-riverton-purple" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-wider">Grand Slam</h3>
                <p className="text-riverton-purple font-bold tracking-widest uppercase text-sm mt-1">Package</p>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-black text-white px-8 py-3 rounded-full border-r-4 border-riverton-purple text-2xl md:text-3xl font-black shadow-lg">
              $2500
            </div>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
            <li className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full bg-riverton-purple shrink-0"></div>
              <span>Logo on league's homepage</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full bg-riverton-purple shrink-0"></div>
              <span>(4) 4x6' banners in location of choice</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full bg-riverton-purple shrink-0"></div>
              <span>(4) social media posts</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full bg-riverton-purple shrink-0"></div>
              <span>(4) league emails</span>
            </li>
          </ul>
        </div>

        {/* Mid Tiers Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Decorative baseball stitches separator line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-[#333] -translate-x-1/2"></div>
          
          {/* Home Run */}
          <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 relative z-10 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-riverton-purple" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wide">Home Run</h3>
                  <p className="text-gray-500 dark:text-riverton-silver text-xs font-bold uppercase tracking-widest mt-0.5">Package</p>
                </div>
              </div>
              <div className="bg-gray-900 dark:bg-black text-white px-5 py-2 rounded-full border-r-2 border-riverton-purple text-xl font-bold">
                $2000
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>Logo on league's website in visible location</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(3) 4x6' banners in location of choice</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(2) social media posts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(2) league emails</span>
              </li>
            </ul>
          </div>

          {/* Triple */}
          <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 relative z-10 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Medal className="w-8 h-8 text-riverton-purple" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wide">Triple</h3>
                  <p className="text-gray-500 dark:text-riverton-silver text-xs font-bold uppercase tracking-widest mt-0.5">Package</p>
                </div>
              </div>
              <div className="bg-gray-900 dark:bg-black text-white px-5 py-2 rounded-full border-r-2 border-riverton-purple text-xl font-bold">
                $1000
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>Name on league's website</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(2) 4x6' banners in location of choice</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(1) social media mention</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Tiers Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative mt-8">
           {/* Decorative baseball stitches separator line (visible on md+) */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-4 w-px border-l-2 border-dashed border-[#333] -translate-x-1/2"></div>
           
          {/* Double */}
          <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 z-10 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-riverton-purple" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wide">Double</h3>
                  <p className="text-gray-500 dark:text-riverton-silver text-xs font-bold uppercase tracking-widest mt-0.5">Package</p>
                </div>
              </div>
              <div className="bg-gray-900 dark:bg-black text-white px-5 py-2 rounded-full border-r-2 border-riverton-purple text-xl font-bold">
                 $500
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>Name on league's website</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>(1) 4x6' banner at the fields</span>
              </li>
            </ul>
          </div>

          {/* Single */}
          <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 z-10 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-riverton-purple" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wide">Single</h3>
                  <p className="text-gray-500 dark:text-riverton-silver text-xs font-bold uppercase tracking-widest mt-0.5">Package</p>
                </div>
              </div>
              <div className="bg-gray-900 dark:bg-black text-white px-5 py-2 rounded-full border-r-2 border-riverton-purple text-xl font-bold">
                 $250
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span className="leading-snug">Donation goes toward an individual player's registration fee</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-riverton-purple shrink-0"></div>
                <span>Name on league's website</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer / Contact Section */}
      <div className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-8 text-center mt-12 relative overflow-hidden shadow-2xl transition-all duration-300">
        <HeartHandshake className="w-12 h-12 text-riverton-purple mx-auto mb-4 opacity-50" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Interested in Sponsoring?</h3>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-gray-600 dark:text-gray-300 font-medium bg-gray-50 dark:bg-[#1a1a1a] py-6 px-4 rounded-2xl mb-8 border border-gray-100 dark:border-transparent">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-riverton-purple" />
            <span>Amber Christensen <span className="text-gray-900 dark:text-white ml-2 font-bold">801.891.4036</span></span>
          </div>
          <div className="hidden lg:block w-px h-8 bg-gray-300 dark:bg-[#333]"></div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-riverton-purple mt-0.5" />
            <button 
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 border ${
                copied 
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30' 
                  : 'bg-white dark:bg-riverton-purple/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-riverton-purple/20 border-gray-200 dark:border-riverton-purple/30'
              } shadow-sm`}
            >
              <span className="font-semibold tracking-wide">amberc@rivertonbaseball.org</span>
              {copied ? <Check className="w-4 h-4 ml-1" /> : <Copy className="w-4 h-4 ml-1 opacity-70" />}
            </button>
          </div>
        </div>

        <div className="inline-block bg-riverton-purple text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
          Your generous donations are tax deductible
        </div>
      </div>

    </div>
  )
}
