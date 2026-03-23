import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, Trophy, BookOpen, Users, MapPin, Handshake, Info, Menu, HelpCircle, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Registration', path: '/registration', icon: ClipboardList },
  { name: 'Tournaments', path: '/tournament', icon: Trophy },
  { name: 'Rules', path: '/rules', icon: BookOpen },
  { name: 'Divisions', path: '/divisions', icon: Users },
  { name: 'Sponsors', path: '/sponsors', icon: Handshake },
  { name: 'AAA Central', path: '/aaacentral', icon: MapPin },
  { name: "Coach's Corner", path: '/coachs-corner', icon: GraduationCap },
  { name: 'FAQ', path: '/faq', icon: HelpCircle },
  { name: 'About Us', path: '/about', icon: Info },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const logoSrc = theme === 'dark' 
    ? '/rivertonbaseball/images/RivertonBaseballDark.png' 
    : '/rivertonbaseball/images/RivertonBaseball.png';

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white dark:bg-riverton-black text-gray-900 dark:text-white selection:bg-riverton-purple selection:text-white transition-colors duration-300">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-[#f9f9f9] dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-[#2a2a2a] sticky top-0 h-screen overflow-y-auto transition-colors duration-300">
        <div className="p-6 flex flex-col items-center border-b border-gray-200 dark:border-[#2a2a2a]">
          <img 
            src={logoSrc} 
            alt="Riverton Baseball Logo" 
            className="w-32 h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-riverton-purple/10 dark:bg-riverton-purple/20 text-riverton-purple border border-riverton-purple/20 dark:border-riverton-purple/30 shadow-[0_0_15px_rgba(88,44,131,0.1)] dark:shadow-[0_0_15px_rgba(88,44,131,0.2)]' 
                    : 'text-gray-600 dark:text-riverton-silver hover:bg-gray-200 dark:hover:bg-[#2a2a2a] hover:text-riverton-purple dark:hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-riverton-purple' : 'group-hover:text-riverton-purple transition-colors duration-200'}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-[#2a2a2a] flex justify-center">
          <ThemeToggle />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen pb-20 md:pb-0">
        {/* Global Header & Mobile Top Bar */}
        <header className="sticky top-0 z-50 bg-[#f9f9f9]/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#2a2a2a] md:hidden transition-colors duration-300">
          {/* Mobile Nav Top Bar */}
          <div className="flex justify-between items-center p-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="h-8 w-auto transition-transform active:scale-95"
              />
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Desktop Header (Breadcrumbs/Context) */}
        <header className="hidden md:flex h-16 items-center justify-between px-8 bg-white dark:bg-riverton-black border-b border-gray-200 dark:border-[#2a2a2a] transition-colors duration-300">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 dark:text-gray-500 font-medium">Riverton Baseball</span>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <span className="text-gray-900 dark:text-white font-bold capitalize">
              {location.pathname === '/' ? 'Home' : location.pathname.substring(1).replace('/', ' > ').replace('-', ' ')}
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden">
          <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 min-h-full flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            
            {/* Global Footer */}
            <footer className="mt-16 pt-8 pb-4 border-t border-gray-200 dark:border-[#2a2a2a] text-center">
              <p className="text-gray-500 dark:text-riverton-silver text-sm">
                Riverton Baseball is a member of{' '}
                <a 
                  href="https://www.wasatchbaseball.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-riverton-purple hover:text-purple-400 font-semibold transition-colors underline decoration-riverton-purple/30 underline-offset-4"
                >
                  Wasatch Baseball League
                </a>.
              </p>
            </footer>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-lg border-t border-gray-200 dark:border-[#2a2a2a] transition-colors duration-300">
          <div className="flex justify-around items-center h-16 px-4">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-riverton-purple bg-riverton-purple/10 scale-110' 
                      : 'text-gray-400 dark:text-gray-500 hover:text-riverton-purple dark:hover:text-riverton-purple'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-0.5" />
                  <span className="text-[10px] font-bold leading-none capitalize">{item.name === 'Coach\'s Corner' ? 'Coach' : item.name.split(' ')[0]}</span>
                </Link>
              )
            })}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col items-center justify-center w-12 h-12 text-gray-400 dark:text-gray-500"
            >
              <Menu className="w-6 h-6" />
              <span className="text-[10px] font-bold leading-none">More</span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Full Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-riverton-black animate-in fade-in slide-in-from-bottom duration-300 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-[#2a2a2a]">
              <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full"
              >
                <Menu className="w-6 h-6 rotate-90" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] hover:bg-riverton-purple/5 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-riverton-purple" />
                    <span className="text-lg font-bold">{item.name}</span>
                  </Link>
                )
              })}
            </div>
            <div className="p-8 text-center border-t border-gray-100 dark:border-[#2a2a2a]">
              <ThemeToggle />
              <p className="mt-4 text-xs text-gray-400">© 2026 Riverton Baseball</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
