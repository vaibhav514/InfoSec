import React, { useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";
import './PasswordGenerator.css';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10); // Default length
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeCapitals, setIncludeCapitals] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeCapitals) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if(length>120){
      setLength(120);
      return 0;
    }
    if(length<1){
      setLength(1);
      return 0;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
  };

  const toggleIncludeNumbers = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const toggleIncludeCapitals = () => {
    setIncludeCapitals(!includeCapitals);
  };

  const toggleIncludeSpecialChars = () => {
    setIncludeSpecialChars(!includeSpecialChars);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    handleShowBanner();
  };

  function SuccessBanner() {
    return (
      <div className="success-banner">
        <p style={{color: 'black'}}>Copied Successfully!</p>
      </div>
    );
  }
  
  const [showBanner, setShowBanner] = useState(false);

  const handleShowBanner = () => {
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 1500); // Hide the banner after 1.5 seconds
  }


  return (
    <div>
      <BreadCrumps page="Tools/Password Generator" title="Password Generator" />
      <center className='pass-gen'>
        <div className="password-length">
          Password Length :
          <input
            type="number"
            value={length}
            onChange={handleLengthChange}
            min="1"
            max="100"
            step="1"
            style={{borderRadius:'10px', marginLeft:'10px'}}
          />
        </div>
        <div className="options">
        <label>
            Include Numbers : 
            <button className={includeNumbers ? 'active' : ''} onClick={toggleIncludeNumbers}>
              {includeNumbers ? ' Yes' : ' No'}
            </button>
          </label>
          <label>
            Include Special Characters : 
            <button className={includeSpecialChars ? 'active' : ''} onClick={toggleIncludeSpecialChars}>
              {includeSpecialChars ? ' Yes' : ' No'}
            </button>
          </label>
          <label>
            Include Capitals : 
            <button className={includeCapitals ? 'active' : ''} onClick={toggleIncludeCapitals}>
              {includeCapitals ? ' Yes' : ' No'}
            </button>
          </label>
        </div>
        <br />
        <button onClick={generatePassword}>Generate Password</button>
        <br />
        <br />
        <h2>Generated Password: {password}</h2>
        <br />
        <button onClick={copyToClipboard}>Copy Password</button>
        <br />
      </center>
      {showBanner && <SuccessBanner />}
    </div>
  );
}

export default PasswordGenerator;
