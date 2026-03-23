import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Rainouts",
    answer: "The fastest possible way to learn if there is a rainout is to follow Riverton Baseball on Instagram or Facebook. Coaches will try to inform their team at the earliest convience."
  },
  {
    question: "Equipment",
    answer: "Bats, gloves, helmets, etc. are not provided by the league. Please let your coach know if you need access to equipment."
  },
  {
    question: "What are the differences between the divisions?",
    answer: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg border-b border-gray-200 dark:border-[#2a2a2a] pb-1">Recreation Division</h4>
          <p className="mb-2">
            Teams are comprised of 100% league-boundary approved players. This includes all of our traditional age divisions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-riverton-silver">
            <li><strong className="text-gray-900 dark:text-white">Younger Teams</strong> (T-Ball, Quickball 4 & 5, Rookie 6): Organized directly by the Riverton Baseball Board.</li>
            <li><strong className="text-gray-900 dark:text-white">Older Teams:</strong> Created through a coaches' draft following division tryouts.</li>
          </ul>
          <p className="mt-3 text-sm italic text-riverton-purple/90">
            * Players in the Recreation Division are eligible for both the City League Championship and postseason All-Star teams.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg border-b border-gray-200 dark:border-[#2a2a2a] pb-1">AAA - Intact Division</h4>
          <p className="mb-2">
            Teams in this division are formed independently. Instead of participating in the league tryout process, they sign up together as an intact team.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-riverton-silver">
            <li>Within each age group, there are two distinct difficulty divisions: <strong className="text-gray-900 dark:text-white">Silver</strong> and <strong className="text-gray-900 dark:text-white">Gold</strong>.</li>
            <li>Intact teams compete against other teams across different Wasatch Baseball leagues.</li>
            <li><strong className="text-gray-900 dark:text-white">Requirement:</strong> Teams must have at least 66% of their roster living within Riverton Baseball boundaries.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "How much does it cost to play?",
    answer: (
      <div className="space-y-4">
        <div className="overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-lg bg-white dark:bg-[#111] shadow-sm">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-200 dark:border-[#2a2a2a] bg-gray-50 dark:bg-[#1a1a1a]">
                <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Division</th>
                <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">T-Ball</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$125</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">Coach Pitch 4-5</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$125</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">Rookie 6</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$125</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">PeeWee (7&8)</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$200</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">Minor (9-10)</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$200</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">Major (11-12)</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$200</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">13U</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$215</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">14/15</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$215</td></tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50"><td className="py-2 px-4 text-gray-600 dark:text-gray-300">16/18</td><td className="py-2 px-4 font-medium text-gray-900 dark:text-white">$215</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm font-medium italic text-riverton-purple/90">
          * $10 late fee applies to all registrations after registration closes and before tryout date.<br/>
          * Additional $10 late fee applies to all registrations after tryout date.
        </p>
      </div>
    )
  },
  {
    question: "What is included in my registration fee?",
    answer: (
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-riverton-purple mr-3 text-xl leading-none">•</span>
          <div>
            <strong className="text-gray-900 dark:text-white text-base">Team Jersey and Hat</strong>
            <p className="text-sm text-gray-600 dark:text-riverton-silver italic">(Recreation Division Only)</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-riverton-purple mr-3 text-xl leading-none">•</span>
          <div>
            <strong className="text-gray-900 dark:text-white text-base">Team Pictures</strong>
            <p className="text-sm text-gray-600 dark:text-riverton-silver">Includes a "Memory Mate" provided by Riverton Baseball.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-riverton-purple mr-3 text-xl leading-none">•</span>
          <div>
            <strong className="text-gray-900 dark:text-white text-base">14 Regular Season Games</strong>
            <p className="text-sm text-gray-600 dark:text-riverton-silver italic">(Weather permitting)</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-riverton-purple mr-3 text-xl leading-none">•</span>
          <div>
            <strong className="text-gray-900 dark:text-white text-base">End of Year Tournament</strong>
            <p className="text-sm text-gray-600 dark:text-riverton-silver italic">(Weather permitting)</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-riverton-purple mr-3 text-xl leading-none">•</span>
          <div>
            <strong className="text-gray-900 dark:text-white text-base">Awards & Trophies</strong>
            <p className="text-sm text-gray-600 dark:text-riverton-silver">Participation trophies for younger divisions (T-Ball, Rookie 5 & 6), and 1st place awards for older drafted divisions.</p>
          </div>
        </li>
      </ul>
    )
  },
  {
    question: "What is the Player Evaluations (Try Out) schedule?",
    answer: "We make every attempt to hold player evaluations during February or early March, depending largely on weather and field conditions. Please check back frequently as the season approaches for official dates and details."
  },
  {
    question: "When are practices and games?",
    answer: (
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-lg">
            <span className="w-2 h-2 rounded-full bg-riverton-purple"></span>
            Practices
          </h4>
          <p className="text-sm text-gray-600 dark:text-riverton-silver">
            Your individual practice schedule is determined by your coach. Practices typically begin in <strong className="text-gray-900 dark:text-white">March</strong>, but the frequency and specific days depend entirely on your age group and your coach's availability. You will receive more information as soon as your coach reaches out to you.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-lg">
            <span className="w-2 h-2 rounded-full bg-riverton-purple"></span>
            Games
          </h4>
          <p className="text-sm text-gray-600 dark:text-riverton-silver mb-2">
            The official game schedules are usually posted towards the end of March or the beginning of April. 
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>You can expect either <strong className="text-gray-900 dark:text-white">2 weekday games</strong>, or <strong className="text-gray-900 dark:text-white">1 weekday game and 1 Saturday game</strong>.</li>
            <li>The exact days and times will vary from week to week depending on your age division and field availability.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "Do you offer any kind of employment opportunities?",
    answer: "Short answer: Absolutely!\nWe have the following positions available:\n- Snack Shack & Grill - Please apply online on our Snack Shack page.\n- Umpire - If you are at least 12 years old please email Mitch Wanless, our Umpire in Chief - mitch@rivertonbaseball.org."
  }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] rounded-xl overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-riverton-purple flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-riverton-purple flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 text-gray-600 dark:text-riverton-silver leading-relaxed border-t border-gray-200 dark:border-[#2a2a2a] bg-gray-50 dark:bg-[#1a1a1a] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mt-4 whitespace-pre-wrap">{faq.answer}</div>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-4 rounded-full mb-6">
          <HelpCircle className="w-12 h-12 text-riverton-purple" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 dark:text-riverton-silver text-lg max-w-2xl">
          Find answers to common questions about registration, games, equipment, and everything else related to playing in the Riverton Baseball league.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
      
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-riverton-purple/5 to-white dark:from-riverton-purple/10 dark:to-[#151515] border border-riverton-purple/20 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Still have questions?</h3>
        <p className="text-gray-600 dark:text-riverton-silver mb-6">
          If you couldn't find the answer you were looking for, feel free to reach out to us directly or follow us on social media for the latest updates.
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <a href="mailto:pres@rivertonbaseball.org" className="px-6 py-3 rounded-full bg-riverton-purple text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
