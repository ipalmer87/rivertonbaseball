import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, Trophy, BookOpen, Users, MapPin, Handshake, Info, Menu, HelpCircle, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white dark:bg-riverton-black text-gray-900 dark:text-white selection:bg-riverton-purple selection:text-white transition-colors duration-300">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-[#f9f9f9] dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-[#2a2a2a] sticky top-0 h-screen overflow-y-auto transition-colors duration-300">
        <div className="p-6 flex flex-col items-center border-b border-gray-200 dark:border-[#2a2a2a]">
          <img 
            src="/rivertonbaseball/images/RivertonBaseball.png" 
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
                src="/rivertonbaseball/images/RivertonBaseball.png" 
                alt="Logo" 
                className="h-8 w-auto transition-transform active:scale-95"
              />
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Content Render */}
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-riverton-black dark:to-[#0a0a0a] flex flex-col transition-colors duration-300">
          <div className="max-w-7xl mx-auto w-full flex-1 text-gray-900 dark:text-white">
            {children}
          </div>
          
          {/* Global Footer */}
          <footer className="mt-12 pt-8 pb-4 border-t border-gray-200 dark:border-[#2a2a2a] text-center">
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
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#f9f9f9]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border-t border-gray-200 dark:border-[#2a2a2a] flex justify-around p-2 z-50 pb-safe transition-colors duration-300">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full py-1 ${
                isActive ? 'text-riverton-purple' : 'text-gray-500 dark:text-riverton-silver'
              }`}
            >
              <div className={`p-1 rounded-full transition-all duration-300 ${isActive ? 'bg-riverton-purple/10 dark:bg-riverton-purple/20 shadow-[0_0_10px_rgba(88,44,131,0.2)] dark:shadow-[0_0_10px_rgba(88,44,131,0.3)]' : ''}`}>
                <Icon className="w-5 h-5 mb-1" />
              </div>
              <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
