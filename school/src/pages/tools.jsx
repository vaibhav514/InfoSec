// In your Tools tab file (e.g., ToolsTab.js)
import React from 'react';
import BreadCrumps from "../components/BreadCrumps";

function Tools() {
  return (
    <div>
      <BreadCrumps page="Tools" title="Tools" />
      <center>
      <div>
      <h3><a href="checker">Password Strength Checker</a></h3>
      </div>
      <div>
        <h3><a href="pg">Password Generator</a></h3>
      </div>
      <div>
        <h3><a href="en">Base 64 Encoder</a></h3>
      </div>
      <div>
        <h3><a href="de">Base 64 Decoder</a></h3>
      </div>
      <div>
        <h3><a href="ip">IP Lookup</a></h3>
      </div>
      </center>
    </div>
  );
}
export default Tools;

