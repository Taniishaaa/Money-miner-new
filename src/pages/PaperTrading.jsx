//under development

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './PaperTrading.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PaperTrading = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Stock Price',
        data: [120, 135, 150, 145, 160, 175, 180],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Stock Price Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="papertrading-page">
      <header className="papertrading-header">
        <h1>Welcome to Paper Trading</h1>
        <p>Practice trading in a risk-free environment and refine your strategies.</p>
      </header>

      <section className="papertrading-benefits">
        <h2>Why Paper Trading?</h2>
        <div className="benefit-card">
          <h3>Risk-Free Learning</h3>
          <p>Trade with virtual money to understand market trends without any financial loss.</p>
        </div>
        <div className="benefit-card">
          <h3>Real-Time Market Data</h3>
          <p>Access live market data to practice trading in realistic scenarios.</p>
        </div>
        <div className="benefit-card">
          <h3>Sharpen Your Skills</h3>
          <p>Build confidence and refine your trading strategies over time.</p>
        </div>
      </section>

      <section className="chart-section">
        <h2>Stock Price Chart</h2>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </section>

      <section className="papertrading-steps">
        <h2>How to Get Started?</h2>
        <div className="step">
          <span>1</span>
          <p>Create an account and log in to the platform.</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Access the virtual trading interface to start exploring.</p>
        </div>
        <div className="step">
          <span>3</span>
          <p>Analyze, trade, and track your performance without risks!</p>
        </div>
      </section>

      <section className="papertrading-call-to-action">
        <h2>Begin Your Trading Journey Today</h2>
        <p>Join Paper Trading and take the first step towards mastering the market.</p>
        <button className="cta-button">Start Now</button>
      </section>
    </div>
  );
};

export default PaperTrading;
