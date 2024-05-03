import React, { useState } from "react";
import BreadCrumps from "../components/BreadCrumps";
import "./hasher.css";

function Hasher() {
  const [text, setText] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");
  const [sha1Hash, setSha1Hash] = useState("");
  const [md5Hash, setMd5Hash] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const generateHashes = () => {
    if (text.length < 1) return 0;
    const sha256 = require("crypto-js/sha256");
    const sha1 = require("crypto-js/sha1");
    const md5 = require("crypto-js/md5");

    const sha256Result = sha256(text).toString();
    const sha1Result = sha1(text).toString();
    const md5Result = md5(text).toString();

    setSha256Hash(sha256Result);
    setSha1Hash(sha1Result);
    setMd5Hash(md5Result);
  };

  const copyToClipboard = (result) => {
    if (result.length < 1) return 0;
    navigator.clipboard.writeText(result);
    handleShowBanner();
  };

  function SuccessBanner() {
    return (
      <div className="success-banner">
        <p style={{ color: "black" }}>Copied Successfully!</p>
      </div>
    );
  }

  const [showBanner, setShowBanner] = useState(false);

  const handleShowBanner = () => {
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 1500); // Hide the banner after 1.5 seconds
  };

  return (
    <div>
      <BreadCrumps page="Tools/Hasher" title="Hash Generator" />
      <div className="hasher-full">
        <h1>Plain Text</h1>
        <div className="container">
          <div className="input-box">
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text to hash"
              className="hash-text"
            />
          </div>
          <button className="gen-hash" onClick={generateHashes}>
            Generate Hashes
          </button>
          <div className="hashes">
            <div>
              <h2>MD5</h2>
              <p>{md5Hash}</p>
              <button
                className="hash-copy"
                onClick={() => copyToClipboard(md5Hash)}
              >
                Copy MD5
              </button>
            </div>
            <div>
              <h2>SHA-1</h2>
              <p>{sha1Hash}</p>
              <button
                className="hash-copy"
                onClick={() => copyToClipboard(sha1Hash)}
              >
                Copy SHA-1
              </button>
            </div>
            <div>
              <h2>SHA-256</h2>
              <p>{sha256Hash}</p>
              <button
                className="hash-copy"
                onClick={() => copyToClipboard(sha256Hash)}
              >
                Copy SHA-256
              </button>
            </div>
          </div>
        </div>
        {showBanner && <SuccessBanner />}
      </div>
    </div>
  );
}

export default Hasher;
