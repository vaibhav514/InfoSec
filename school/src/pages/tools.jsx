// In your Tools tab file (e.g., ToolsTab.js)
import React from 'react';
import BreadCrumps from "../components/BreadCrumps";
import './tools.css';

const buttons = [
  { label: "Password Generator", link: "pg" },
  { label: "Password Strength Checker", link: "checker" },
  { label: "Base 64 Encoder", link: "en" },
  { label: "Base 64 Decoder", link: "de" },
  { label: "Hash Creater", link: "hasher" },
  // Add more buttons as needed
];

const Button = ({ label, link }) => (
  <div>
    <h3>
      <a href={link} className="button">{label}</a>
    </h3>
  </div>
);

function Tools() {
  return (
    <div>
      <BreadCrumps page="Tools" title="Tools" />
      <center>
<<<<<<< HEAD
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
=======
      <div className="button-grid">
          {/* Render buttons dynamically */}
          {buttons.map((button, index) => (
            <Button key={index} label={button.label} link={button.link} />
          ))}
        </div>
>>>>>>> dd5cb6a0d4550020d2d1731dc5c522ab6d7e7c20
      </center>
    </div>
  );
}
export default Tools;

