//static page and under development

import React from 'react';
import './TradeSphere.css'; // Import the CSS file

const TradeSphere = () => {
  return (
    <div className="tradesphere-body">
      <div className="btn">
        <button>Contest</button>
        <button>Workshop</button>
      </div>

      <div className="tradesphere-container">
        <h2 className="tradesphere-title">All Upcoming Trading Contests</h2>

        {/* Match List */}
        {matches.map((match, index) => (
          <div key={index} className="match-container">
            <div className="match">
              <h3 className="match-title">{match.title}</h3>
              <div className="match-card">
                <div>
                  <span className="team-name">{match.team1.name}</span>
                  <span className="time-remaining">{match.remainingTime}</span>
                  <span className="match-time">{match.time}</span>
                  <p className="team-description">{match.team1.description}</p>
                </div>
                <div>
                  <span className="team-name">{match.team2.name}</span>
                  <span className="team-subtitle">{match.team2.subtitle}</span>
                </div>
              </div>
              <p className="prize-amount">{match.prize}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Match Data (Static for now; replace with API call or dynamic data)
const matches = [
  {
    title: 'ECS T10 Malta',
    team1: { name: 'SOC', description: 'Southern Crusaders...' },
    team2: { name: 'GZZ', subtitle: 'Gozo Zalmi' },
    remainingTime: '1h 01m',
    time: '05:00 PM',
    prize: 'Mega ₹24 Lakhs',
  },
  {
    title: 'Namibia Castle Lite T20 Franchise',
    team1: { name: 'GWJ', description: 'Green Windhoek J...' },
    team2: { name: 'FRE', subtitle: 'Fish River Eagles' },
    remainingTime: '1h 46m',
    time: '05:45 PM',
    prize: 'Mega ₹8 Lakhs',
  },
  {
    title: 'Emirates D50',
    team1: { name: 'FUJ', description: 'Fujairah' },
    team2: { name: 'SHA', subtitle: 'Sharjah' },
    remainingTime: '2h 01m',
    time: '06:00 PM',
    prize: 'Mega ₹5.5 Lakhs',
  },
  {
    title: 'West Indies Super50 Cup',
    team1: { name: 'TRI', description: 'T&T Red Force' },
    team2: { name: 'BAR', subtitle: 'Barbados Pride' },
    remainingTime: '2h 31m',
    time: '06:30 PM',
    prize: 'Mega ₹6 Lakhs',
  },
];

export default TradeSphere;
