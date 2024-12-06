import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import './Menu.css';
import hero from '../assets/hero_vdo.mp4';

const Menu = () => {
  return (
    <div className="main">
      <div className="wealth-advisory">
        <div className="content">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-section"
          >
            <h1 className="title">
            JaiHo WealthGroup <br />
            </h1>
            <p className="desc">
            Generate proposals,Empower Your Trades: Live Insights, Smart Analysis, AI-Driven Trends!
            </p>
            <div className="money-pa">
              <button className="money-btn">Your Ultimate Money Making</button>
            </div>
          </motion.div>

          {/* Right Side: Video */}
          <div className="right-contain">
            <video src={hero} autoPlay loop muted></video>
          </div>
        </div>

        {/* Signup Section */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="signup"
        >
        </motion.div>

        {/* Divider Line */}
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Menu;
