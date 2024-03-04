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
    alignItems: 'center',  // Center items horizontally
    textAlign: 'left',     // Align text to the left
    padding: '10px',
    color: 'white',
  };

  const largeText = {
    fontSize: '3em',
    fontWeight: 'bold',
  };

  const firstThreeWords = {
    color: 'white',
    display: 'block', // Ensures each word is on a separate line
  };

  const contentStyle = {
    width: '100%',  // Use 100% width for the content
    maxWidth: '1111px',  // Set a maximum width for the content
    textAlign: 'left',   // Align text to the left within the content
    display: 'flex',  // Use flex display for flexible layout
    justifyContent: 'space-between', // Space between content and images
    alignItems: 'center', // Align items vertically
  };

  const paragraphStyle = {
    marginRight: '30px', // Adjust margin as needed
  };

  const buttonStyle = {
    marginTop: '20px', // Add margin to separate the button from the text
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
    maxWidth: '70%', // Adjust image width as needed
    height: '500px',   // Maintain aspect ratio
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
      {/* Other content of your page */}
    </div>
  );
};

export default App;
