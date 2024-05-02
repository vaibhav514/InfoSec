import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import BreadCrumps from "../components/BreadCrumps";



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
  // const [strength, setStrength] = useState('Weak');


  function handleChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const newEntropy = calculateEntropy(newPassword);
    // if (newEntropy >= 110) {
    //   setStrength('Strong');
    // } else if (newEntropy >= 70) {
    //   setStrength('Good');
    // } else if (newEntropy >= 50) {
    //   setStrength('Fair');
    // } else {
    //   setStrength('Weak');
    // }
    setEntropy(newEntropy);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <BreadCrumps page="Tools/Password Strength Checker" title="Password Strength Checker" />
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
        />
        <PasswordStrengthBar password={password} />
      <p className={`password-strength ${entropy >= 70 ? 'strong' : 'weak'}`}>
        {/* {entropy >= 110 ? 'Strong' : entropy >= 70 ? 'Good' : entropy >= 50 ? 'Fair' : 'Weak'} */}
      </p>
      <br></br>
      </label>
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
      <p>Password Entropy: {entropy}</p>
      {/* <p>Password Strength: {strength}</p> */}
    </div>
  );
}

export default Checker;
