import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact';
import './styless.css';

const App = () => {
  const appStyle = {
    backgroundImage: 'url(/LineDesignImage.png)',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(76, 53, 219, 1)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    textAlign: 'left',     
    padding: '10px',
    color: 'white',
  };

  const largeText = {
    fontSize: '3em',
    fontWeight: 'bold',
  };

  const firstThreeWords = {
    color: 'white',
    display: 'block', 
  };

  const contentStyle = {
    width: '100%',  
    maxWidth: '1111px',  
    textAlign: 'left',   
    display: 'flex',  
    justifyContent: 'space-between', 
    alignItems: 'center', 
  };

  const paragraphStyle = {
    marginRight: '30px', 
  };

  const buttonStyle = {
    marginTop: '20px', 
    backgroundColor: 'white',
    color: 'rgba(76, 53, 219, 1)',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2em',
    display: 'inline-block',
  };

  const imageStyle = {
    maxWidth: '70%', 
    height: '500px',   
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div style={contentStyle}>
        <div>
          <h1 style={largeText}>
            <span style={firstThreeWords}>The only AI</span><span style={firstThreeWords}>CRM for small</span>  businesses
          </h1>
          <p style={paragraphStyle}>Respond to leads, organize contacts, and instantly <br  />
            generate client communications with AI CRM</p>
          <div>
            <a href="#" style={buttonStyle}>Start for Free</a>
          </div>
        </div>
        <div>
          <img src="/image.png" alt="" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default App;
