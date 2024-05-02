import React, { useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const checkStrength = () => {
    let strengthLevel = 'Weak';
    if (password.length >= 8 && /\d/.test(password) && /[a-z]/i.test(password)) {
      strengthLevel = 'Medium';
    }
    if (password.length >= 12 && /\d/.test(password) && /[a-z]/i.test(password) && /[!@#$%^&*()_+[\]{}|;:',./<>?]/.test(password)) {
      strengthLevel = 'Strong';
    }
    setStrength(strengthLevel);
  };

  return (
    <div>
      <BreadCrumps page="Tools/Password Strength Checker" title="Password Strength Checker" />
      <center>
      <h3>
      <input type="password" value={password} onChange={handleChange} />
      <br></br>
      <br></br>
      <button onClick={checkStrength}>Check Strength</button>
      </h3>
      <br></br>
      <h2>Password Strength: {strength}</h2>
      </center>
    </div>
  );
}

export default PasswordStrengthChecker;
