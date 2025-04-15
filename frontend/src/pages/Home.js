import React from "react";
import "./Home.css"; // Make sure this file exists in the same folder or update the path

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to AI Solutions</h1>
        <p>Empowering businesses with AI automation and smart technology.</p>
    {/* <button className="cta">Get Started</button>*/}
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Solutions</h2>
        <div className="service-grid">
          <div className="service-card">
            <span role="img" aria-label="AI">🤖</span>
            <h3>AI Automation</h3>
            <p>Streamline operations with intelligent automation tools.</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="Analytics">📊</span>
            <h3>Smart Analytics</h3>
            <p>Get data-driven insights to boost productivity.</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="Chatbot">💬</span>
            <h3>Messaging Applications</h3>
            <p>Promoting the communication and reelation witht your Customers.</p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Trusted by Companies Worldwide</h2>
        <div className="client-logos">
          <img src="https://logomakerr.ai/blog/wp-content/uploads/2022/08/2019-to-Present-Zara-logo-design-1024x538.jpg" alt="Client 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="Client 2" />
          <img src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg" alt="Client 3" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/1200px-New_Balance_logo.svg.png" alt="Client 4" />
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
