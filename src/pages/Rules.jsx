import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, BookOpen, Shield, ShieldCheck, Table, Check, X, Calculator, CheckSquare } from 'lucide-react';
import PitchingCalculator from './PitchingCalculator';

const generalRules = [
  {
    title: "Riverton Baseball – Code of Conduct",
    content: `Riverton Baseball strives to create a positive atmosphere where children learn the game of baseball, develop values, and have fun. All members of the Riverton Baseball community have a role to play in creating this positive atmosphere. By giving careful thought to the following Code of Conduct and putting effort into living up to it, you can help create this positive atmosphere.

**Code of Conduct:**
Please read and adhere to the following:
- Be a positive role model for the players in our league and demonstrate fair play and sportsmanship to all players.
- Coaches have tremendous influence, for either good or ill, on the education of the player and, thus, shall never place the value of winning above the value of instilling the highest ideals of character.
- Always remember that this is youth baseball and that the game is for children and not for adults.
- Learn the Riverton Baseball league rules. Rules of play are based on the National Federation of State High School (NFHS) rules, not MLB.
- Respect and support all game officials. Each umpire has attended training, spent many hours learning NFHS rules and received certification. When an umpire makes a difficult judgment call, do not indulge in conduct which would demean or ridicule an umpire, player, spectator, Riverton Baseball staff, or other attendee.
- Place the emotional and the physical wellbeing of all participants ahead of a personal desire to win.

**Conduct subject to discipline:**
- Making physical contact with any opposing coach, umpire, Riverton Baseball staff, or spectator.
- Taunting or threatening any player, coach, umpire, Riverton Baseball staff, or spectator.
- Using profane and/or vulgar language or mannerisms.
- Not leaving the field or premises when instructed to do so.
- Being involved in any activity that would warrant the summoning of law enforcement officials.

Riverton Baseball Staff and League Officials reserve the right to eject any offender from the facility or to suspend the offender from future Riverton Baseball games who violates any provision of the Code of Conduct.`
  },
  {
    title: "Player Safety",
    content: `Riverton Baseball expects all teams to comply with the following important game regulations to ensure safety and fair play.

**Loose Equipment**
Any loose equipment, such as gloves, bats, helmets or catcher's gear, of either team may not be on or near the field.
Penalty: If loose equipment interferes with play, the umpire may call an out(s), award bases or return runners, based on the umpire's judgment and the circumstances concerning the play. (NFHS Rule 1-3 Article 7)

Please keep all loose equipment in the dugout area. This includes buckets. If a coach chooses to sit on a bucket, they may do so only inside the dugout. 

**Batter Safety**
To maintain a safe playing environment, only two batters from the team at bat should be outside the dugout at any time: the current batter and the on-deck batter.
This rule applies at all times, including between innings. 
Penalty: the umpire shall warn the offender unless the offense is judged to be major, in which case an ejection shall occur. (NFHS Rule 3-3 Article 1i)`
  },
  {
    title: "Run Rules",
    content: "The Run Rules apply to all innings including the final inning of any game.\nIn the event during the final offensive play of any inning when multiple runs score after the max run count, those runs are not counted in the official score.",
    component: (
      <div className="mt-4 overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] shadow-sm">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
              <th className="py-3 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a]">Age Division</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Max Runs/Half Inning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
            {[
              { div: "T-Ball, Coach Pitch", limit: "No Score Is Kept" },
              { div: "Rookie 6", limit: "6 Runs" },
              { div: "PeeWee", limit: "6 Runs" },
              { div: "Minors", limit: "6 Runs" },
              { div: "Majors", limit: "7 Runs" },
              { div: "13U", limit: "7 Runs" },
              { div: "14/15", limit: "7 Runs" },
              { div: "16/18", limit: "No Limit" }
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                <td className="py-2 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.div}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium">{row.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "Pitch Counts & Rest Periods",
    content: `**Pitch Count Limits and Rest Periods**

**Daily Maximum**
Represents the highest number of pitches allowed per day for a pitcher. Reaching this limit requires a mandatory 2-day rest period before pitching again.

**Rest Period Guidelines:**
Even if the daily maximum isn't reached, certain pitch counts still require rest. Rest periods vary based on the number of pitches thrown and player's age division. Refer to the table below for specific pitch count ranges and corresponding rest days.

**No Rest Required (0 Days Rest):**
If a pitcher throws fewer than the specified amount for 0 Days Rest in their age division, they may pitch again the next day without rest. A day rest is a full day, not 24 hours from the last pitch.
*Example: if a pitcher throws on Monday and is required one day of rest, they are not eligible to pitch again until Wednesday.*

Coaches must remove a pitcher when they reach the daily maximum pitch count for their age division. The pitcher may continue playing at another position. 

Note: If the daily maximum pitch limit is reached mid-batter, the pitcher may continue until:
- The batter reaches base, or
- The batter is put out

**Penalty- failure to comply with the pitch count rules:**
- 1st Offense: ejection of the head coach and the pitcher exceeding the limit must be removed from the mound (player may remain in the game at another position).
- 2nd+ Offense: game forfeit.

**Important Notes:**
- Pitch count violations do not nullify results of pitched balls.
- Umpires do not track or mediate pitch count disputes.
- Pitch count concerns or disputes must be addressed by coaches and a Riverton Baseball board member. 

**Pitch Count Dispute Policy**
In the event of a dispute regarding a player’s pitch count, the following policy will apply:

**Scorekeeper Discrepancy:** If the official scorekeeper does not correctly record a pitch count and there is a disagreement about the number of pitches thrown by a player, the burden of proof lies with the coach or team of the player in question.

**Failure to Provide Proof:** If the coach or team is unable to verify the pitch count, the player will be deemed to have reached the maximum threshold requiring rest, and will not be eligible to pitch again until the full required rest period is completed based on the maximum pitch count for that age division.

This rule is in place to prioritize player safety and maintain fair play for all teams involved.`,
    component: (
      <div className="mt-4 overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] shadow-sm">
        <table className="w-full text-center border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
              <th className="py-3 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a] text-left">Age Division</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">Daily Max</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">0 Days Rest</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">1 Days Rest</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">2 Days Rest</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
            {[
              { div: "PeeWee", max: "50", r0: "1-19", r1: "20-35", r2: "36+" },
              { div: "Minor", max: "65", r0: "1-29", r1: "30-45", r2: "46+" },
              { div: "Major", max: "75", r0: "1-34", r1: "35-55", r2: "56+" },
              { div: "13U", max: "80", r0: "1-44", r1: "45-59", r2: "60+" },
              { div: "14/15", max: "95", r0: "1-49", r1: "50-65", r2: "66+" },
              { div: "16/18", max: "95", r0: "1-49", r1: "50-65", r2: "66+" }
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                <td className="py-2 px-4 font-bold text-gray-900 dark:text-white text-left border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.div}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.max}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.r0}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.r1}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium">{row.r2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "Field Dimensions",
    content: "The following are the standard base paths and pitching distances for each age division:",
    component: (
      <div className="mt-4 overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] shadow-sm">
        <table className="w-full text-center border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
              <th className="py-3 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a] text-left">Age Division</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">Base Paths</th>
              <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Pitching Distance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
            {[
              { div: "T-Ball - 3", base: "55'", pitch: "N/A" },
              { div: "T- Ball or Coach Pitch - 4/5", base: "55'", pitch: "N/A" },
              { div: "Rookie 6", base: "55'/60'", pitch: "40'" },
              { div: "PeeWee – 7/8", base: "60'", pitch: "42'" },
              { div: "Minor – 9/10", base: "60'", pitch: "46'" },
              { div: "Major – 11/12", base: "70'", pitch: "50'" },
              { div: "13U", base: "80'", pitch: "54'" },
              { div: "14/15", base: "90'", pitch: "60' 6\"" },
              { div: "16/18", base: "90'", pitch: "60' 6\"" }
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                <td className="py-2 px-4 font-bold text-gray-900 dark:text-white text-left border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.div}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.base}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium">{row.pitch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "Double First Base",
    content: `**1. Base Configuration**
A double first base is used at first base.
The base consists of two adjoining sections forming one base, approximately 15 inches by 30 inches.
The white portion is placed entirely in fair territory.
The colored portion (i.e. orange or green) is placed entirely in foul territory.
The first base foul line runs between the two portions, with no space separating them.

**2. Fair and Foul Ball Determination**
A batted ball that contacts or passes over the white portion of the base is ruled fair.
A batted ball that contacts or passes over only the colored portion of the base is ruled foul.

**3. Batter-Runner Use of the Base (Initial Play)**
On any batted ball where a play is being made at first base, the batter-runner must use the colored portion of the base on their first touch.
Exceptions: The batter runner may use the white portion of the base in the following situations:
- On a batted ball hit to the outfield when no play is being made at first base.
- On a base on balls.
- On a dropped third strike when the defensive player fielding the ball is positioned in foul territory. In this situation, either portion of the base may be used by the batter runner and the defensive player.

**4. Defensive Player Use of the Base**
On any play at first base resulting from a batted ball, all defensive players must use the white portion of the base to record the out.

**5. Runner Use of the Base After Reaching First**
Once the batter runner safely reaches first base, they become a runner.
The runner must use the white portion of the base for all subsequent actions, including:
- Leading off
- Returning on a pickoff attempt
- Tagging up on a fly ball

The colored portion is not used by runners after the initial play at first base.

**6. Collisions, Interference, and Obstruction**

**Offensive Interference**
If the batter-runner uses the white portion of the base during an initial force play and interferes with a defensive player properly using the white portion, interference is called.
Ruling: Dead ball. Batter runner is out. Other runners return to the last base legally touched.

**Defensive Obstruction**
If a defensive player uses the colored portion of the base during an initial force play and obstructs a batter runner who is properly using the colored portion, obstruction is called.
Ruling: Delayed dead ball. The umpire awards bases to the affected runner(s) based on what would have occurred without the obstruction.`
  },
  {
    title: "Bat Rules",
    component: (
      <div className="space-y-8 mt-4">
        {/* Drafted Division */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 text-center">Drafted Division</h3>
          <div className="overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] mb-4 shadow-sm">
            <table className="w-full text-center border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
                  <th className="py-3 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a] text-left">Age Division</th>
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">Stamp</th>
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Drop Maximum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
                {[
                  { div: "T-Ball - 3", stamp: "USA BASEBALL", drop: "N/A" },
                  { div: "T- Ball or Coach Pitch - 4/5", stamp: "USA BASEBALL", drop: "N/A" },
                  { div: "Rookie 6", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "PeeWee – 7/8", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "Minor – 9/10", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "Major – 11/12", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "13U", stamp: "USA BASEBALL / USSSA", drop: "-8" },
                  { div: "14/15", stamp: "BBCOR", drop: "-3" },
                  { div: "16/18", stamp: "BBCOR", drop: "-3" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                    <td className="py-2 px-4 font-bold text-gray-900 dark:text-white text-left border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.div}</td>
                    <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.stamp}</td>
                    <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium">{row.drop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-riverton-silver leading-relaxed p-2">
            <p>BBCOR bats are always allowed in younger age divisions.</p>
            <p>Wood bats made from a single piece of solid wood are allowed. Multi-piece wood bats must be examined to verify they are constructed with a solid barrel. Wood bats do not require a BBCOR certification mark or sticker.</p>
            <p>Any bat that has been Withdrawn/Disallowed will no longer be permitted for use on any league or post season game. We will use the list provided by USSSA baseball.</p>
            <a href="https://www.usssa.com/baseball/baseball-withdrawn-and-or-non-compliant-baseball-bat-models" target="_blank" rel="noopener noreferrer" className="text-riverton-purple hover:text-purple-400 underline underline-offset-4 break-all block transition-colors">
              https://www.usssa.com/baseball/baseball-withdrawn-and-or-non-compliant-baseball-bat-models
            </a>
          </div>
        </div>

        {/* AAA Intact Division */}
        <div className="pt-8 border-t border-gray-200 dark:border-[#2a2a2a]">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">AAA Intact Division</h3>
          <div className="overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] mb-4 shadow-sm">
            <table className="w-full text-center border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
                  <th className="py-3 px-4 font-bold text-gray-900 dark:text-white border-r border-gray-200 dark:border-[#2a2a2a] text-left">Age Division</th>
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-[#2a2a2a]">Stamp</th>
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Drop Maximum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
                {[
                  { div: "8U", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "9U", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "10U", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "11U", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "12U", stamp: "USA BASEBALL / USSSA", drop: "No Max" },
                  { div: "13U", stamp: "USA BASEBALL / USSSA", drop: "-8" },
                  { div: "14U", stamp: "BBCOR", drop: "-3" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                    <td className="py-2 px-4 font-bold text-gray-900 dark:text-white text-left border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.div}</td>
                    <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium border-r border-gray-200 dark:border-[#2a2a2a]">{row.stamp}</td>
                    <td className="py-2 px-4 text-gray-600 dark:text-gray-300 font-medium">{row.drop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-riverton-silver leading-relaxed p-2">
            <p>BBCOR bats are always allowed at younger age groups.</p>
            <p>Any bat that has been Withdrawn/Disallowed will no longer be permitted for use on any league or post season game. We will use the list provided by USSSA baseball.</p>
            <a href="https://www.usssa.com/baseball/baseball-withdrawn-and-or-non-compliant-baseball-bat-models" target="_blank" rel="noopener noreferrer" className="text-riverton-purple hover:text-purple-400 underline underline-offset-4 break-all block transition-colors">
              https://www.usssa.com/baseball/baseball-withdrawn-and-or-non-compliant-baseball-bat-models
            </a>
          </div>
        </div>
      </div>
    )
  }
];

const divisionRules = [
  {
    title: "T-BALL 3",
    content: "1. Players must be 3 years old on or before April 30th of the current season.\n2. No score will be kept.\n3. Every kid should wear a helmet when batting.\n4. One kid with a bat in his hands at a time.\n5. Try to place players in traditional fielding positions.\n6. Every kid on each team hits – no outs are tracked.\n7. A batter will always hit off a tee. If the batter doesn't put the ball in play after 5 swings, have them drop the bat and run to 1st base on their 5th swing.\n8. Try to get in two innings at a minimum."
  },
  {
    title: "T-Ball 4",
    content: "1. Players must be 4 years old on or before April 30th of the current season.\n2. No score will be kept.\n3. Every kid should wear a helmet when batting.\n4. One kid with a bat in his hands at a time.\n5. Try to place players in traditional fielding positions.\n6. Every kid on each team hits – no outs are tracked.\n7. Players should use a tee for the first 6 games. After that, coach pitch is allowed and encouraged. After 5 unsuccessful swings with coach pitch, the coach should bring out the tee and let the batter hit off the tee and then run to 1st base.\n8. Try to get in two innings at a minimum."
  },
  {
    title: "Coach Pitch 5",
    content: "1. Players must be 4 or 5 years old on or before April 30th of the current season.\n2. No score will be kept.\n3. Every kid should wear a helmet when batting.\n4. One kid with a bat in his hands at a time.\n5. Try to place players in traditional fielding positions.\n6. Every kid on each team hits – no outs are tracked.\n7. Coaches pitch to the players from 30-40' away. After 5 unsuccessful swings, the coach should bring out the tee and let the player hit off the tee.\n8. Try to get in two innings at a minimum."
  },
  {
    title: "ROOKIE 6",
    content: "1. Players must be 5 or 6 years old on or before April 30th of the current season.\n2. The Riverton Baseball Board shall assign players to their respective teams.\n3. Teams are responsible for keeping score throughout the game and should reconcile any discrepancies as the game progresses.\n4. Standings will determine the seeding in the end of year tournament.\n5. Teams are encouraged to use a coach or a parent to umpire the game.\n6. Games will start as long as each team has a minimum of 7 players. When additional players arrive, they will be added to the end of the batting order.\n7. All players will play the field. The six infield positions will have one player per position. The remaining players will be positioned in the outfield no closer than 15 feet behind the bases.\n8. The pitching machine will be set at approximately 40 feet and at a speed between 30-35 mph.\n9. Each batter will receive a maximum of six pitches. Walks are not permitted. If the batter fails to record a hit within those six pitches, it is recorded as a strikeout. If the sixth pitch results in a foul ball, the batter will receive an additional pitch.\n10. If a ball is hit to the outfield, runners may advance until the ball is returned to the infield.\n11. No stealing bases in any situation including past balls or overthrows.\n12. Limit of 6 runs per half inning.\n13. Every player will have an at-bat each inning.\n14. No new inning after 1 hour 20 minutes.\n15. No more than 5 total coaches on the field at one time: 2 defensive, 1 pitching, 2 base coaches.\n16. Any game that has played 3 full innings or 60 minutes will be considered a complete game."
  },
  {
    title: "PEEWEE 7-8",
    content: `**Rosters & Lineups**
1. Players must be 7 or 8 years old on or before April 30th of the current season. A player may play up one division with league approval.
2. A player may only be on one Riverton Baseball roster and cannot roster with any other league (including AAA, tournament, or travel teams).
3. Teams must bat their entire lineup.
4. Games will begin as long as a team has a minimum of 7 players. Late arrivals are added to the bottom of the order.
   - If a team has fewer than 9 players, the opposing coach chooses whether the missing spots (up to 9) result in an **Automatic Out** or are just **Skipped** without penalty.
   - Injured players who cannot bat are skipped without an out recorded.
5. **Fill-In Players**: Teams with fewer than 9 available players may use fill-ins to reach 9. They must be Riverton Baseball recreation players from the same or younger division, wear their regular team jersey, be approved by the league, and **cannot pitch**.

**Game Length, Scoring, & Field Use**
1. Maximum of 6 innings per game. No new inning after 1 hour and 40 minutes.
2. Limit of 6 runs per half inning.
3. **Mercy Rule**: Game is declared final if a team leads by 15 runs after 3 complete innings or 10 runs after 4+ innings.
4. Games can end in ties.
5. **Complete Game**: Any game that has played 3 full innings or 60 minutes. If called early due to weather/light, the score reverts to the last completed inning (unless the home team tied or took the lead in the incomplete inning).
6. **Pregame warmups**: Not allowed on the infield dirt. Teams must use the outfield and foul territory.

**Equipment & Safety**
1. No metal cleats allowed.
2. Only bats with the USA or USSSA stamp are allowed.
3. Catchers must wear all appropriate protective gear, including a helmet covering both ears, face mask, throat guard, chest protector, shin/leg guards, and a **protective cup** (required for all players, male or female).

**Defensive Positioning**
1. Teams may use 6 infielders and 4 outfielders.
2. Outfielders must be spaced evenly and cannot play on the infield dirt.
3. No player shall sit defensively for more than 2 innings in any game, and **never for consecutive innings**.

**General Gameplay Rules**
1. **Base Running (60-foot bases)**: Runners cannot leave their base until the pitched ball reaches home plate. If a runner leaves early, the umpire will signal a delayed dead ball, and runners may be forced to return depending on the play's result. Once the catcher secures the ball and the runner stops forward progress, the runner must promptly return to their base.
2. **Speed Up Rule**: A courtesy runner may be used for the catcher with two (2) outs. The runner must be the last recorded out.
3. **No Slash Bunting**: Fake bunting and then attempting a full swing on the same pitch is illegal. The batter is called out, and runners return.
4. **No Malicious Contact**: Runners intentionally and maliciously running into a defensive player will be called out and ejected.

**Game Formats & Coaching**
Games will be machine pitch, developmental, or kid pitch. (For kid pitch, please follow standard pitch count rules. Developmental games do not count in standings).
Coaches are allowed on the field for machine pitch and developmental games ONLY.

**Format: Pitching Machine Games**
- Machine set at approx 42 feet. Final adjustments agreed upon by both coaches at the top of an inning.
- Batter receives a maximum of 5 pitches. Strikeout after 3 swinging misses. No walks. Foul on 5th pitch earns another pitch.
- Pitcher must remain behind the machine until the ball is hit.
- Hits to the outfield: Runners advance until the ball is returned to the infield (does not need to be in pitcher's hand). Runners halfway to the next base may continue, but no further.
- No stealing bases on past balls or overthrows.
- Coaches on the field must position themselves behind the outfielders.

**Format: Developmental Games**
- **Batting**: Bat exactly 6 players per half inning, regardless of outs. Inning ends automatically after 6 batters. No walks.
- **Pitching**: Every at-bat begins with kid pitch. If the pitcher throws 4 balls, the offensive coach steps in to throw 4 pitches. If the batter fails to put it in play after 4 coach pitches, they are out.
- **Base Running**: Follows 60-foot base running rules. Stealing bases is allowed (including home).
- **Coaching**: Intended for real-time coaching. Coaches should be active on the field prioritizing skill development and fundamental instruction.`
  },
  {
    title: "MINOR (9-10)",
    content: `1. Players must be 9 or 10 years old on or before April 30th.
2. Teams are formed through tryouts and draft.
3. Players may only be on one Riverton Baseball roster.
4. All games will be kid pitch.
5. Pregame field use: no warming up on the infield. Outfield and foul territory only.
6. **No metal cleats** are allowed.
7. Catcher must wear full protective gear including a protective cup (required for all players, male/female).
8. Maximum of 6 innings per game. No new inning after 1 hour and 40 minutes.
9. Limit of 6 runs per half inning.
10. Mercy Rule: 15 runs after 3 complete innings or 10 runs after 4 or more complete innings.
11. Games begin with minimum 7 players. Missing spots to reach 9 players can be taken as an Automatic Out or Skipped with no out recorded (opposing coach choice).
12. Fill-in players are allowed up to 9 players, must be from same or younger division, wear their regular jersey, be league approved, and cannot pitch.
13. No player shall sit defensively for more than 2 innings in any game, and never for consecutive innings.
14. Games can end in ties.
15. Only bats with USA or USSSA stamp will be allowed.`
  },
  {
    title: "MAJOR (11-12)",
    content: `1. Players must be 11 or 12 years old on or before April 30th.
2. Teams are formed through tryouts and draft.
3. Players may only be on one Riverton Baseball roster.
4. Pitchers are subject to pitch count limits.
5. Pregame field use: no warming up on the infield. Outfield and foul territory only.
6. **No metal cleats** are allowed.
7. Catcher must wear full protective gear including a protective cup.
8. Maximum of 6 innings per game. No new inning after 1 hour and 40 minutes.
9. Limit of 7 runs per half inning.
10. Mercy Rule: 15 runs after 3 complete innings or 10 runs after 4 or more complete innings.
11. Games begin with minimum 7 players. Missing spots up to 9 players can be taken as an Automatic Out or Skipped with no out recorded.
12. Fill-in players are allowed up to 9 players, must be from same or younger division, and cannot pitch.
13. No player shall sit defensively for more than 2 innings in any game, and never for consecutive innings.
14. Games can end in ties.
15. Only bats with USA or USSSA stamp will be allowed.`
  },
  {
    title: "13U",
    content: `1. Players must be 12 or 13 years old on or before April 30th.
2. Teams are formed through tryouts and draft.
3. Players may only be on one Riverton Baseball roster.
4. Pitchers are subject to pitch count limits.
5. Pregame field use: no warming up on the infield. Outfield and foul territory only.
6. **Metal cleats are allowed**, BUT NOT on any temporary pitching mound. Violators are removed for game remainder.
7. Catcher must wear full protective gear including a protective cup.
8. Maximum of 7 innings per game. No new inning after 1 hour and 40 minutes.
9. Limit of 7 runs per half inning.
10. Mercy Rule: 15 runs after 3 complete innings or 10 runs after 4 or more complete innings.
11. Games begin with minimum 7 players.
12. Fill-in players are allowed up to 9 players, must be from same or younger division, and cannot pitch.
13. No player shall sit defensively for more than 2 innings, and never for consecutive innings.
14. Games can end in ties.`
  },
  {
    title: "14/15",
    content: `1. Players must be 13, 14 or 15 years old on or before April 30th.
2. Teams are formed through tryouts and draft.
3. Players may only be on one Riverton Baseball roster. Not allowed to roster in High School (Varsity/Sub-Varsity).
4. Pregame field use: no warming up on the infield. Outfield and foul territory only.
5. **Metal cleats are allowed**, BUT NOT on any temporary pitching mound.
6. Catcher must wear full protective gear.
7. Maximum of 7 innings per game. No new inning after 1 hour and 40 minutes.
8. Limit of 7 runs per half inning.
9. Mercy Rule: 15 runs after 3 complete innings or 10 runs after 4 or more complete innings.
10. No player shall sit defensively for more than 2 innings, and never for consecutive innings.
11. **Only bats with the BBCOR stamp will be allowed.**
12. Teams may have 6 infielders and 3 outfielders.
13. Runners are allowed to lead off. Dropped 3rd strike rule is in play. Balks will be called.`
  },
  {
    title: "16/18",
    content: `1. Players must be 15, 16, 17 or 18 years old on or before April 30th.
2. Players may only be on one Riverton Baseball roster. Not allowed to roster in High School.
3. **Metal cleats are allowed**, BUT NOT on any temporary pitching mound.
4. Catcher must wear full protective gear.
5. Maximum of 7 innings per game. No new inning after 1 hour and 40 minutes.
6. **No run limit per half inning.**
7. Mercy Rule: 15 runs after 3 complete innings or 10 runs after 4 or more complete innings.
8. No player shall sit defensively for more than 2 innings, and never for consecutive innings.
9. **Only bats with the BBCOR stamp will be allowed.**
10. Runners are allowed to lead off. Dropped 3rd strike rule is in play. Balks will be called.
11. **No Malicious Contact**: If a runner attempting to reach a base intentionally and maliciously runs into a defensive player, he will be called out and ejected.
12. **Speed Up Rule**: A speed up runner may be used for catchers only with two (2) outs (runner is the last recorded out).`
  }
];

const quickRefData = [
  { division: "PeeWee", bases: "60'", mound: "42'", innings: "6", runs: "6", drop3: false, lead: false, balks: false, slash: false, speedUp: "C ONLY", metal: false },
  { division: "Minor", bases: "60'", mound: "46'", innings: "6", runs: "6", drop3: false, lead: false, balks: false, slash: false, speedUp: "C ONLY", metal: false },
  { division: "Major", bases: "70'", mound: "50'", innings: "6", runs: "7", drop3: true, lead: true, balks: true, slash: false, speedUp: "C ONLY", metal: false },
  { division: "13U", bases: "80'", mound: "54'", innings: "7", runs: "7", drop3: true, lead: true, balks: true, slash: true, speedUp: "P & C", metal: true },
  { division: "15U", bases: "90'", mound: "60' 6\"", innings: "7", runs: "7", drop3: true, lead: true, balks: true, slash: true, speedUp: "P & C", metal: true },
  { division: "18U", bases: "90'", mound: "60' 6\"", innings: "7", runs: false, drop3: true, lead: true, balks: true, slash: true, speedUp: "P & C", metal: true }
];

const RenderCheckX = ({ value }) => {
  if (value === true) return <Check className="w-6 h-6 text-green-500 mx-auto" strokeWidth={3} />;
  if (value === false) return <X className="w-6 h-6 text-[#ef4444] mx-auto" strokeWidth={3} />;
  return <span className="text-gray-900 dark:text-white text-center block font-medium">{value}</span>;
}

const RuleAccordion = ({ rule }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Simple parser to render **bold** markdown tags properly
  const renderContent = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] rounded-xl overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 dark:text-white pr-4">{rule.title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-riverton-purple flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-riverton-purple flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 text-gray-600 dark:text-riverton-silver leading-relaxed border-t border-gray-200 dark:border-[#2a2a2a] bg-gray-50/30 dark:bg-[#1a1a1a] animate-in fade-in slide-in-from-top-2 duration-300">
          {rule.content && <div className="mt-4 whitespace-pre-wrap font-medium">{renderContent(rule.content)}</div>}
          {rule.component && rule.component}
        </div>
      )}
    </div>
  );
};

export default function Rules() {
  const [activeTab, setActiveTab] = useState('quick-reference');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGeneralRules = useMemo(() => {
    if (!searchQuery) return generalRules;
    const lowerQuery = searchQuery.toLowerCase();
    return generalRules.filter(r => 
      r.title.toLowerCase().includes(lowerQuery) || 
      r.content.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const filteredDivisionRules = useMemo(() => {
    if (!searchQuery) return divisionRules;
    const lowerQuery = searchQuery.toLowerCase();
    return divisionRules.filter(r => 
      r.title.toLowerCase().includes(lowerQuery) || 
      r.content.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const filteredQuickRef = useMemo(() => {
    if (!searchQuery) return quickRefData;
    const lowerQuery = searchQuery.toLowerCase();
    return quickRefData.filter(row => {
      const rowText = Object.values(row).map(v => typeof v === 'boolean' ? (v ? 'yes check allowed' : 'no x not allowed') : String(v)).join(' ').toLowerCase();
      return rowText.includes(lowerQuery);
    });
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="bg-riverton-purple/10 dark:bg-riverton-purple/20 p-4 rounded-full mb-6">
          <BookOpen className="w-12 h-12 text-riverton-purple" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Official League Rules</h1>
        <p className="text-gray-600 dark:text-riverton-silver text-lg max-w-2xl">
          Everything you need to know about playing in Riverton Baseball. Read up on our general standards or browse specific age divisions.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-[#111] border border-gray-300 dark:border-[#333] rounded-full text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-riverton-purple focus:border-transparent transition-all shadow-lg text-lg"
          placeholder="Search rules, divisions, pitching..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row bg-gray-100 dark:bg-[#111] p-1.5 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] max-w-3xl mx-auto mb-8 gap-2 sm:gap-1">
        <button
          onClick={() => setActiveTab('quick-reference')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
            activeTab === 'quick-reference'
              ? 'bg-riverton-purple text-white shadow-lg'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <CheckSquare className="w-5 h-5" />
          Quick Reference
        </button>
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
            activeTab === 'general'
              ? 'bg-riverton-purple text-white shadow-lg'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <ShieldCheck className="w-5 h-5" />
          General Rules
        </button>
        <button
          onClick={() => setActiveTab('division')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
            activeTab === 'division'
              ? 'bg-riverton-purple text-white shadow-lg'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#1a1a1a]'
          }`}
        >
          <Shield className="w-5 h-5" />
          Division Rules
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'quick-reference' ? (
          <div className="animate-in fade-in duration-300">
            {/* Division Matrix Accordion */}
            <RuleAccordion rule={{
              title: "Division Matrix",
              content: "A quick reference matrix for all Riverton Baseball divisions including field dimensions, base paths, run limits, and more.",
              component: (
                <div className="overflow-x-auto border border-gray-200 dark:border-[#2a2a2a] rounded-xl bg-white dark:bg-[#151515] mt-4 shadow-sm">
                  {filteredQuickRef.length > 0 ? (
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-[#2a2a2a]">
                          <th className="py-4 px-4 font-bold text-gray-900 dark:text-white text-center border-r border-gray-200 dark:border-[#2a2a2a]">Division</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Bases</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Mound</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Innings</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Runs</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Drop 3rd</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Lead Offs</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Balks</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Slash</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Speed Up</th>
                          <th className="py-4 px-3 font-bold text-gray-500 dark:text-gray-400 text-center">Metal Cleats</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
                        {filteredQuickRef.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a]/50 transition-colors">
                            <td className="py-3 px-4 font-bold text-gray-900 dark:text-white text-center border-r border-gray-200 dark:border-[#2a2a2a] bg-riverton-purple/5 dark:bg-riverton-purple/10">{row.division}</td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.bases} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.mound} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.innings} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.runs} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.drop3} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.lead} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.balks} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.slash} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.speedUp} /></td>
                            <td className="py-3 px-3 text-center text-gray-600 dark:text-gray-300"><RenderCheckX value={row.metal} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center text-gray-400 py-12">No quick reference data matching your search.</div>
                  )}
                </div>
              )
            }} />

            {/* Pitching Calculator Accordion */}
            <RuleAccordion rule={{
              title: "Pitching Rest Calculator",
              content: "Use our interactive tool to calculate mandatory rest days and next eligible pitch dates based on a player's division and pitch count.",
              component: (
                <div className="mt-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] rounded-xl p-4 sm:p-6 overflow-hidden relative shadow-inner">
                  <div className="absolute -top-4 -right-4 bg-riverton-purple/5 dark:bg-riverton-purple/10 w-32 h-32 rounded-full blur-3xl pointer-events-none"></div>
                  <PitchingCalculator />
                </div>
              )
            }} />
          </div>
        ) : activeTab === 'general' ? (
          filteredGeneralRules.length > 0 ? (
            filteredGeneralRules.map((rule, idx) => <RuleAccordion key={idx} rule={rule} />)
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12 bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-sm">
              No rules found matching your search.
            </div>
          )
        ) : (
          filteredDivisionRules.length > 0 ? (
            filteredDivisionRules.map((rule, idx) => <RuleAccordion key={idx} rule={rule} />)
          ) : (
            <div className="text-center text-gray-400 py-12 bg-[#151515] rounded-2xl border border-[#2a2a2a]">
              No division rules found matching your search.
            </div>
          )
        )}
      </div>
    </div>
  );
}
