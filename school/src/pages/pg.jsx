import React, { useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";

function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 10; // Change as per requirement
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <BreadCrumps page="Tools/Password Generator" title="Password Generator" />
      <center><h2><button onClick={generatePassword}>Generate Password</button></h2><br></br>
      <h2>Generated Password: {password}</h2></center>
    </div>
  );
}

export default PasswordGenerator;
