import { vercelStegaCombine, vercelStegaDecode } from "@vercel/stega";
import React, { useState } from "react";
import BreadCrumps from "../../components/BreadCrumps";
import "./StegText.css";

function StegText() {
  const [mode, setMode] = useState("encode"); // 'encode' or 'decode'
  const [inputText, setInputText] = useState("");
  const [inputSecret, setInputSecret] = useState("");
  const [outputText, setOutputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setErrorMessage("");
    setInputText("");
    setInputSecret("");
    setOutputText("");
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSecretChange = (event) => {
    setInputSecret(event.target.value);
  };

  const handleEncode = () => {
    if (!inputText || !inputSecret) {
      setErrorMessage("Please enter text and secret.");
      return;
    }
    try {
      const encodedText = vercelStegaCombine(inputText, inputSecret);
      console.log(encodedText);
      setOutputText(encodedText);
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
  };

  const handleDecode = () => {
    if (!inputText) {
      setErrorMessage("Please enter text.");
      return;
    }
    try {
      const decodedText = vercelStegaDecode(inputText);
      setOutputText(decodedText);
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
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
      <BreadCrumps page="Tools/Secret" title="Secret Text Generator" />
      <h1>Text Steganography</h1>
      <div className="app">
        <div className="mode-buttons">
          <button
            onClick={() => handleModeChange("encode")}
            className={mode === "encode" ? "active" : ""}
          >
            Encode
          </button>
          <button
            onClick={() => handleModeChange("decode")}
            className={mode === "decode" ? "active" : ""}
          >
            Decode
          </button>
        </div>
        <div className="input-section">
          <textarea
            placeholder="Enter text"
            value={inputText}
            onChange={handleTextChange}
          ></textarea>
          {mode === "encode" && (
            <input
              type="text"
              placeholder="Enter secret"
              value={inputSecret}
              onChange={handleSecretChange}
            ></input>
          )}
        </div>
        <button
          className="handlebtn"
          onClick={mode === "encode" ? handleEncode : handleDecode}
        >
          {mode === "encode" ? "Encode Text" : "Decode Text"}
        </button>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {outputText && (
          <div className="output">
            <p className="otxt">{outputText}</p>
            <p>
              <button onClick={copyToClipboard} className="tst-btn">
                Copy Text
              </button>
            </p>
            {showBanner && <SuccessBanner />}
          </div>
        )}
      </div>
    </div>
  );
}

export default StegText;
