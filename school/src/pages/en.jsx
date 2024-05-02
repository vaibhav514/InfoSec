import React, { useRef, useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";
import './encryption.css';

function Encryption() {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    // Adjust the height of the text area based on its content
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const encryptText = () => {
    const encrypted = btoa(text); // Basic encryption using base64 encoding
    setEncryptedText(encrypted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encryptedText);
    handleShowBanner();
  };

  function SuccessBanner() {
    return (
      <div className="success-banner">
        <p style={{color: 'black'}}>Copied Successfully!</p>
      </div>
    );
  }
  
  const [showBanner, setShowBanner] = useState(false);

  const handleShowBanner = () => {
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 1500); // Hide the banner after 1.5 seconds
  }

  return (
    <div>
      <BreadCrumps page="Tools/Base 64 Encoder" title="Base 64 Encoder"/>
    <div className="container">
      <center>
        <h2>
          <br />
          <textarea 
            ref={textAreaRef}
            value={text} 
            onChange={handleTextChange} 
            className="textarea"
            placeholder='Plain Text'
            />
          <br />
          <button onClick={encryptText} className="en-btn">Encode</button>
          <br />
          {encryptedText && (
            <div className="encrypted-text">
              <h2>Base64 text: {encryptedText}</h2>
              <button onClick={copyToClipboard} className="en-btn copy-button">Copy Encoded Text</button>
              {showBanner && <SuccessBanner />}
            </div>
          )}
        </h2>
      </center>
    </div>
          </div>
  );
}

export default Encryption;
