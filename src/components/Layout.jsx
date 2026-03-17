import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, Trophy, BookOpen, Users, MapPin, Handshake, Info, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Registration', path: '/registration', icon: ClipboardList },
  { name: 'Tournament', path: '/tournament', icon: Trophy },
  { name: 'Rules', path: '/rules', icon: BookOpen },
  { name: 'Divisions', path: '/divisions', icon: Users },
  { name: 'Sponsors', path: '/sponsors', icon: Handshake },
  { name: 'AAA Central', path: '/aaacentral', icon: MapPin },
  { name: 'About Us', path: '/about', icon: Info },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-riverton-black text-white selection:bg-riverton-purple selection:text-white">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 flex flex-col items-center border-b border-[#2a2a2a]">
          <img 
            src="/images/RivertonBaseball.png" 
            alt="Riverton Baseball Logo" 
            className="w-32 h-auto mb-4 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-riverton-purple to-purple-400">
            Riverton Baseball
          </h1>
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
                    ? 'bg-riverton-purple/20 text-riverton-purple border border-riverton-purple/30 shadow-[0_0_15px_rgba(88,44,131,0.2)]' 
                    : 'text-riverton-silver hover:bg-[#2a2a2a] hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-riverton-purple' : 'group-hover:text-riverton-purple transition-colors duration-200'}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen pb-20 md:pb-0">
        {/* Global Header & Mobile Top Bar */}
        <header className="sticky top-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#2a2a2a]">
          {/* Live Field Status Banner */}
          <div className="bg-gradient-to-r from-riverton-purple to-purple-900 text-white text-xs md:text-sm font-semibold py-1.5 px-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-2 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-green-400 border border-green-200 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
              <span>FIELDS OPEN</span>
            </div>
            <span>All games are proceeding as scheduled.</span>
          </div>
          
          {/* Mobile Nav Top Bar */}
          <div className="md:hidden flex justify-between items-center p-4">
            <div className="flex items-center space-x-3">
              <img src="/images/RivertonBaseball.png" alt="Logo" className="w-8 h-auto" />
              <span className="font-bold text-white">Riverton Baseball</span>
            </div>
          </div>
        </header>

        {/* Content Render */}
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-riverton-black to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#1a1a1a]/95 backdrop-blur-xl border-t border-[#2a2a2a] flex justify-around p-2 z-50 pb-safe">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full py-1 ${
                isActive ? 'text-riverton-purple' : 'text-riverton-silver'
              }`}
            >
              <div className={`p-1 rounded-full transition-all duration-300 ${isActive ? 'bg-riverton-purple/20 shadow-[0_0_10px_rgba(88,44,131,0.3)]' : ''}`}>
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
