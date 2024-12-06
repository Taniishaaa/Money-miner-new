import React from 'react';
import './Features.css';

const Widget = () => (
    <div className="widget-container">
    <h4 className='widget-head'>FEATURES</h4>
    <h2 className="widget-title">Powerful features just for you</h2>
    <div className="widget-grid">
        <div className="widget-card">
            <div className="icon-container">
            <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png 760w" alt="Analytics &amp; report graphics" class="column-image corners-xl"></img>
            </div>
            <h3 className="card-title">Live Analysis</h3>
            <p className="card-description">
            Stay ahead in the market with our real-time stock analysis feature. Monitor live price movements, volume changes, and key indicators as they happen, all visualized through dynamic
             and interactive charts. Our AI-powered insights decode market trends instantly, 
             helping you make informed trading decisions at the right time.
                </p>
        </div>
        <div className="widget-card">
            <div className="icon-container">
            <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png 760w" alt="Analytics &amp; report graphics" class="column-image corners-xl"></img>
            </div>
            <h3 className="card-title">Analayze Past Trends</h3>
            <p className="card-description">
                Unlock the power of historical data with our past analysis feature. 
                Dive deep into previous market trends, analyze stock performance over time, 
                and identify patterns that drive smarter trading strategies.</p>
        </div>
        <div className="widget-card">
            <div className="icon-container">
                <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png 760w" alt="Analytics &amp; report graphics" class="column-image corners-xl"></img>
            </div>
            <h3 className="card-title">Generate Reports</h3>
            <p className="card-description">
                Transform your trading insights into actionable reports with ease. 
                Our report generation feature compiles live and historical analysis, 
                highlights key trends, and delivers personalized insights tailored to your trading strategy. </p>
        </div>
    </div>
</div>
);

export default Widget;
