import { Calendar, Users, Trophy, MapPin, ExternalLink, CalendarDays, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const specialEvents = [
  { date: "1/01/2026", title: "Open Registration", desc: "For Spring Season (Rec League)" },
  { date: "2/28/2026 or 3/07/2026", title: "Tryouts", desc: "Weather depending" },
  { date: "4/01/2026", title: "Fall Ball Registration (Riverton City)", desc: "For all children ages 7 and under" },
  { date: "4/06/2026", title: "Opening Week", desc: "Opening Week of Games" },
  { date: "4/11/2026", title: "Opening Day", desc: "Official Opening Day Ceremonies" },
  { date: "4/11/2026", title: "Picture Day", desc: "Riverton Baseball Team and Individual picture day" },
  { date: "5/30/2026 - 6/9/2026", title: "Riverton End of Season Tournament", desc: "Divisions: Rookie 6, PeeWee, Minors, Majors (dates may change)" },
  { date: "6/02/2026", title: "Fall Ball Registration (Riverton Baseball)", desc: "For all children ages 8+" },
  { date: "6/9/2026 - 6/19/2026", title: "AAA End of Season Tournament", desc: "6/9-6/12 & 6/16-6/19. Double Elimination (dates may change)" },
  { date: "6/12/2026 - 6/16/2026", title: "Walk Off Tournament", desc: "Top recreation teams play other leagues (dates may change)" },
  { date: "6/23/2026 - 6/28/2026", title: "All Star Tournament", desc: "Top recreation players are selected and play all stars from other leagues (dates may change)" }
];

const sponsors = [
  {
    name: "South Hills Dental Specialists",
    logo: "https://www.southhillsdentalspecialists.com/wp-content/themes/charlie-child/images/logo.webp",
    url: "https://www.southhillsdentalspecialists.com/"
  },
  {
    name: "Dicks Sporting Goods",
    logo: "https://www.goodsports.org/assets/dicks-sporting-goods-logo-298x150.jpg",
    url: "https://www.dickssportinggoods.com/"
  },
  {
    name: "Utah Marshall's Baseball",
    logo: "https://static.wixstatic.com/media/69e627_e403bbaafffb4d0984681debd3683f73~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/69e627_e403bbaafffb4d0984681debd3683f73~mv2.png",
    url: "https://www.mgfmarshalls.com/"
  }
];

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-[#2a2a2a] mb-12 transition-colors duration-300 min-h-[400px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(/images/fields.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 w-full p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Youth Baseball <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-riverton-purple to-purple-400">Done Right</span>
          </h1>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed drop-shadow-md">
            Welcome to Riverton Baseball! We provide a competitive, fun, and safe environment for youth to develop their skills and love for the game.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link to="/registration" className="px-6 py-3 rounded-full bg-riverton-purple text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Register Now
            </Link>
            <a href="https://www.teamsnap.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5 text-white/70" />
              TeamSnap Login
            </a>
          </div>
        </div>
      </div>

      {/* Two Column Layout for Links and Events */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Quick Links Grid (Left 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
            Quick Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Registration", icon: Users, desc: "Join us for the 2026 season", path: "/registration" },
              { title: "Rules", icon: FileText, desc: "League rules & code of conduct", path: "/rules" },
              { title: "Field Locations", icon: MapPin, desc: "Find practice and game fields", path: "/about/fields" },
              { title: "FAQ", icon: HelpCircle, desc: "Commonly asked questions", path: "/faq" }
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] hover:border-riverton-purple/50 dark:hover:border-riverton-purple/50 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="bg-riverton-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-riverton-purple group-hover:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-riverton-silver">{item.desc}</p>
              </Link>
            ))}
          </div>

          {/* Announcements */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
              Latest Information
            </h2>
            <div className="bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-6 shadow-sm">
              <div className="border-l-4 border-riverton-purple pl-4 py-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">2026 Season Schedule</h3>
                <p className="text-gray-600 dark:text-riverton-silver mt-2">Season Schedule and Games will be available Mid-March. You can plan on two games per week between Monday and Saturday. Practices will be organized by the individual teams. Games will begin the week of April 6th and run through the end of June.</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
              Social Media
            </h2>
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#151515] dark:to-[#111] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-6 shadow-sm">
              <p className="text-gray-600 dark:text-riverton-silver mb-6">
                For the very latest and most up-to-date information regarding weather delays, field closures, and league announcements, please follow our social media pages!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.facebook.com/rivertonbaseballleague"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#1877F2] text-white font-semibold hover:bg-[#166fe5] transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-[#1877F2]/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Follow on Facebook
                </a>

                <a
                  href="https://www.instagram.com/riverton_baseball/?utm_source=ig_embed&ig_rid=cfc00874-137a-4c07-b392-22e829daf22d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg hover:shadow-pink-500/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Our Sponsors */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
                Our Sponsors
              </h2>
              <Link to="/sponsors" className="text-sm font-semibold text-riverton-purple hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sponsors.map((sponsor, i) => (
                <a
                  key={i}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-4 flex items-center justify-center grayscale hover:grayscale-0 hover:border-riverton-purple/50 transition-all duration-300 group shadow-sm"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Special Dates (Right 1/3) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 rounded-full bg-riverton-purple"></span>
            Special Dates
          </h2>

          <div className="bg-white dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-[#2a2a2a] overflow-hidden relative shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-riverton-purple/5 rounded-bl-full -mr-8 -mt-8"></div>

            <div className="p-6 relative z-10 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <CalendarDays className="w-6 h-6 text-riverton-purple" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">2026 Season</h3>
              </div>

              <div className="space-y-5">
                {specialEvents.map((event, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-[-20px] before:w-[2px] before:bg-gray-200 dark:before:bg-[#2a2a2a] last:before:hidden">
                    <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-riverton-purple ring-4 ring-white dark:ring-[#151515]"></div>
                    <div className="text-riverton-purple font-bold text-sm tracking-wide mb-1 flex items-center gap-2">
                      {event.date}
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-bold leading-tight">{event.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-riverton-silver mt-1 leading-snug">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
