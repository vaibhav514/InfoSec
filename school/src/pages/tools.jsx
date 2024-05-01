// In your Tools tab file (e.g., ToolsTab.js)
import React from 'react';
import BreadCrumps from "../components/BreadCrumps";

// import PasswordStrengthChecker from './checker';
// import PasswordGenerator from './pg';
// import Encryption from './en';
// import Deception from './de';

function Tools() {
  return (
    <div>
      <BreadCrumps page="Tools" title="Tools" />
      <div>
        <h3>Password Strength Checker</h3>
        {/* <PasswordStrengthChecker /> */}
      </div>
      <div>
        <h3>Password Generator</h3>
        {/* <PasswordGenerator /> */}
      </div>
      <div>
        <h3>Encryption</h3>
        {/* <Encryption /> */}
      </div>
      <div>
        <h3>Deception</h3>
        {/* <Deception /> */}
      </div>
    </div>
  );
}
export default Tools;

