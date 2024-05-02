import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import BreadCrumps from "../components/BreadCrumps";
import './checker.css';

function calculateEntropy(password) {
  const symbols = "!@#$%^&*()_-+=~`[]{}|;:,.<>?";
  const length = password.length;
  let entropy = 0;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;
  let hasSymbol = false;

  for (let i = 0; i < length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
    } else if (symbols.indexOf(char) !== -1) {
      hasSymbol = true;
    }
  }

  const possibilities = (hasUpperCase ? 26 : 0) +
                        (hasLowerCase ? 26 : 0) +
                        (hasDigit ? 10 : 0) +
                        (hasSymbol ? symbols.length : 0);
  
  entropy = Math.log2(Math.pow(possibilities, length));

  return entropy;
}

function Checker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [entropy, setEntropy] = useState(0);
  const [hasCapital, setHasCapital] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);

  function handleChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const newEntropy = calculateEntropy(newPassword).toFixed(2);
    setEntropy(newEntropy);
    setHasCapital(/[A-Z]/.test(newPassword));
    setHasNumber(/[0-9]/.test(newPassword));
    setHasSpecial(/[!@#$%^&*()_\-+=~`[\]{}|;:,.<>?]/.test(newPassword));
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

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
      <BreadCrumps page="Tools/Password Strength Checker" title="Password Strength Checker"/>
      <div className="password-container">
        <label>
          Password:
          <p className={`password-entropy ${entropy >= 95 ? 'strong' : entropy >= 70 ? 'good' : entropy >= 45 ? 'fair' : 'weak'}`} >Entropy: {entropy}</p>
          <input
            className="password-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            maxLength={50}
          />
          <PasswordStrengthBar password={password} />
          <div className="password-indicators">
            <span className={`password-indicator ${hasCapital ? 'success' : 'failure'}`}>Capital</span>
            <span className={`password-indicator ${hasNumber ? 'success' : 'failure'}`}>Number</span>
            <span className={`password-indicator ${hasSpecial ? 'success' : 'failure'}`}>Special</span>
          </div>
          <button className="toggle-button" onClick={copyToClipboard}>Copy Password</button>
          <button className="toggle-button" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
          {showBanner && <SuccessBanner />}
          <br />
        </label>
      </div>
    </div>
  );
}

export default Checker;
