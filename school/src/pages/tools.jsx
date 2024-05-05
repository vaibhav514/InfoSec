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
      <div className="button-grid">
          {/* Render buttons dynamically */}
          {buttons.map((button, index) => (
            <Button key={index} label={button.label} link={button.link} />
          ))}
        </div>
      </center>
    </div>
  );
}
export default Tools;

