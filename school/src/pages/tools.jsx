// In your Tools tab file (e.g., ToolsTab.js)
import React from 'react';
import BreadCrumps from "../components/BreadCrumps";

function Tools() {
  return (
    <div>
      <BreadCrumps page="Tools" title="Tools" />
      <div>
      <h3><a href="checker">Password Strength Checker</a></h3>
      </div>
      <div>
        <h3><a href="pg">Password Generator</a></h3>
      </div>
      <div>
        <h3><a href="en">Encryption</a></h3>
      </div>
      <div>
        <h3><a href="de">Deception</a></h3>
      </div>
    </div>
  );
}
export default Tools;

