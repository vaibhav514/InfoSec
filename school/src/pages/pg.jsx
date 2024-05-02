import React, { useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10); // Default length

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    // Optionally provide user feedback
    alert('Password copied to clipboard!');
  };

  return (
    <div>
      <BreadCrumps page="Tools/Password Generator" title="Password Generator" />
      <center>
        <h2>
          <button onClick={generatePassword}>Generate Password</button>
        </h2>
        <br></br>
        <h4><input
          type="number"
          value={length}
          onChange={handleLengthChange}
          min="1"
          max="100"
          step="1"
        /></h4>
        <br></br>
        <br></br>
        <h2>Generated Password: {password}</h2>
        <br></br>
        <h4><button onClick={copyToClipboard}>Copy Password</button></h4>
        <br></br>
      </center>
    </div>
  );
}

export default PasswordGenerator;
