import { useState } from 'react';
import ComingSoon from '../src/ComingSoon/ComingSoon.jsx';
import './App.css'; // Add the CSS for the button here

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleButtonClick = () => {
    setShowComingSoon(true);
  };

  return (
    <div>
      {!showComingSoon && (
        <div className="fullscreen-button-container">
          <button className="glow-button" onClick={handleButtonClick}>
            Enter
          </button>
        </div>
      )}
      {showComingSoon && <ComingSoon />}
    </div>
  );
}

export default App;
