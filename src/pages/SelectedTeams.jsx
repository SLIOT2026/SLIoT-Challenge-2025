import GuilineHeader from '@/components/GuideLineHeader';
import { useState } from 'react';
import { motion } from "framer-motion";

const SelectedTeams = () => {
  const [activeTab, setActiveTab] = useState('school');

  const teams = {
    school: [
        { name: "RC Rescue Robot", school: "G/Dharmasoka College, Ambalangoda" },
        { name: "LakminaGCK_OcrDigiDic", school: "Gateway College" },
        { name: "TechRiders", school: "Gateway College Kandy" },
        { name: "Quantum Pioneers", school: "R/Ehe/Darmapala College" },
        { name: "Aloka Tek Teach", school: "Ananda Sastralaya Mathugama" },
        { name: "Alfa bot 3.0", school: "R/Kuruwita Central College" },
        { name: "REVORA", school: "R/Kuruwita Central College" },
        { name: "Pathsence", school: "R/Kuruwita Central College (National School)" },
        { name: "Online Voting Hub", school: "R/Kuruwita Central College (National School)" },
        { name: "Hydro Hackers", school: "Taxila Central College" },
        { name: "Smart Pouch", school: "R/Kuruwita Central College (National School)" },
        { name: "ROBO X EXPLORES", school: "R/EMB/President's College" },
        { name: "W.S.A.Randunu Bandara", school: "A/Thabuthegama National College" },
        { name: "Smart Squad", school: "BT/BC Kathankudy Central College" },
        { name: "SightSync", school: "Gateway College Dehiwala" },
        { name: "Neos", school: "Visakha Vidyalaya" },
        { name: "Blacksheep", school: "Swarna Jayanthi National College" },
        { name: "U.Luthmin Lesandu", school: "G/Dharmasoka College" },
        { name: "The Innovation Hub", school: "St. Michael's College" },
        { name: "BlitZ", school: "Gateway College Colombo" },
        { name: "Rover", school: "Wycherley International School-Gampaha" },
        { name: "Smart Deafblind Kit", school: "Nalanda College Colombo 10" },
        { name: "SoloDev", school: "B/Bandarawela Central College" },
        { name: "Robetics 2008", school: "J/Holy Family Convent" },
        { name: "REAL_PROGRAMMER", school: "St. Joseph's College, Colombo 10" },
        { name: "Quarista", school: "Royal College, Colombo 7" },
        { name: "Ocular Ds", school: "Senanayake College" },
        { name: "Insight Seekers", school: "Rahula College Matara" },
        { name: "GCC12", school: "Gateway College Colombo" },
        { name: "R.Pasindu Pinsara", school: "Urapola Central College" },
        { name: "Mahinda College Galle", school: "Mahinda College Galle" },
        { name: "Wellfocus", school: "Dr. Richard Pathirana College" },
        { name: "Miyuru Sathsara (Leader)", school: "Sathsara MadhubahanaKa/Dhe/Ruwanwella Royal College" },
        { name: "Batti Royal Kings", school: "Bt/Bt Methodist Central College" },
        { name: "R.J.W. Sineth Induwara", school: "H/Meegahawela K.V" },
        { name: "Crew X", school: "Nalanda College" },
        { name: "Innovative Minders", school: "Mahinda Rajapaksha Maha Vidyalaya, Matara" },
        { name: "DPN OF ROBOTECH", school: "H/Ambalantota N.S" },
        { name: "Team Trinity Syntax", school: "Trinity College Kandy" },
        { name: "LORD OF CODE", school: "AK/Munawwara Junior College" },
        { name: "APCUTL", school: "Ak/Munawwara Junior College" },
        { name: "Nexovate", school: "Mercy Education Institute" },
        { name: "Smart Sense Innovators", school: "Mercy Education Institute" },
        { name: "Senuka", school: "R/EMB/Bodhiraja College" },
        { name: "Evolution", school: "Dharmapala College, Pannipitiya" },
        { name: "M.U.Yasir Umar", school: "Kattankudy Center College" },
        { name: "Team Alpha", school: "Royal College Horana" },
        { name: "TEAM ALPHA", school: "Mercy Education Institute" },
        { name: "RCH IOT", school: "Royal College Horana" },
        { name: "Pahan Methsara", school: "H/Therapuththa National School" },
        { name: "Ahkam Tanjiro", school: "Zahira College Colombo" },
        { name: "MediLink", school: "Ananda College" },
        { name: "Sentinel", school: "St. Joseph's College, Colombo 10" },
        { name: "NeuroVerse", school: "Galahitiyawa Central College" },
        { name: "Go Jetters", school: "MR/Rahula College" },
        { name: "I.C.T Ninjas of Sri Lanka", school: "J/Hartley College, Point Pedro" },
        { name: "APOLA", school: "Zahira College" },
        { name: "Lion King", school: "H/Therapuththa Primary School" },
        { name: "Therapuththa", school: "H/Therapuththa National School" },
        { name: "Richwolf", school: "G/Richmond College" },
        { name: "Cyber Storm", school: "Rahula College" },
        { name: "Night Fire", school: "H/Therapuththa N.S" },
        { name: "Little Star", school: "H/Weraketiya Rajapaksha Central" },
        { name: "Innovate Infinity", school: "President's College - Kotte" },
        { name: "Synapsnex", school: "Dharmaraja College Kandy" },
        { name: "Monkey King", school: "Therapuththa" },
        { name: "IRTS Inventions", school: "WP/HO/Mahinda Rajapaksha College" },
        { name: "Innovation Legends", school: "Zahira College Colombo 10" },
        { name: "Team NC", school: "Nalanda College, Colombo" },
        { name: "FuTech_Divers", school: "Sujatha Vidyalaya" },
        { name: "EL FI", school: "Hanwella Rajasinghe Central College" },
        { name: "Tech Wizards", school: "St. Joseph's College, Colombo 10" }
    ],
    university: [],
    open: []
  };

  const splitTeams = (teams) => {
    const mid = Math.ceil(teams.length / 2);
    return [teams.slice(0, mid), teams.slice(mid)];
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <GuilineHeader />
      <motion.h2
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 1 }}
          className="mb-12 text-3xl font-bold text-center text-white md:text-4xl"
        >
          Selected Teams
        </motion.h2>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        <button
          onClick={() => setActiveTab('school')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === 'school' ? 'bg-[#393185] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          School Category
        </button>
        <button
          onClick={() => setActiveTab('university')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === 'university' ? 'bg-[#ff00a4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          University Category
        </button>
        <button
          onClick={() => setActiveTab('open')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === 'open' ? 'bg-[#2b0091] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Open Category
        </button>
      </div>

      {/* Teams Display - Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {teams[activeTab].length > 0 ? splitTeams(teams[activeTab]).map((columnTeams, colIndex) => (
          <div key={colIndex} className="space-y-2">
            {columnTeams.map((team, index) => (
              <div key={index} className="flex flex-col md:flex-row items-stretch rounded overflow-hidden shadow-sm">
                <div 
                  className="md:w-2/5 w-full py-2 px-3 text-white font-medium text-sm text-center md:text-left"
                  style={{
                    backgroundColor: activeTab === 'school' ? '#393185' : 
                                  activeTab === 'university' ? '#ff00a4' : '#2b0091'
                  }}
                >
                  <div className="line-clamp-1 hover:line-clamp-none">{team.name}</div>
                </div>
                <div className="md:w-3/5 w-full py-2 px-3 bg-white">
                  <div className="text-gray-700 text-sm line-clamp-1 hover:line-clamp-none text-center md:text-left">
                    {team.school}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )) : (
          <div className="col-span-1 md:col-span-2 text-center py-6 text-gray-500">
            No teams have been selected for this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedTeams;
