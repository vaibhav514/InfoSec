import React, { useRef, useState } from 'react';
import BreadCrumps from "../components/BreadCrumps";
import './decryption.css';

function Decryption() {
  const [text, setText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    // Adjust the height of the text area based on its content
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const decryptText = () => {
    try {
      const decrypted = atob(text); // Basic encryption using base64 encoding
      if (btoa(decrypted) === text){
        setDecryptedText(decrypted);
      }
      else{
        setDecryptedText('Not Base64 Encoded');
      }

    }catch (error) {
      console.error('Error decoding Base64:', error.message);
      setDecryptedText('Not Base64 Encoded');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decryptedText);
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
      <BreadCrumps page="Tools/Base 64 Decoder" title="Base 64 Decoder"/>
    <div className="container">
      <center>
        <h2>
          <br />
          <textarea 
            ref={textAreaRef}
            value={text} 
            onChange={handleTextChange} 
            className="textarea"
            placeholder='Base64 Text'
            />
          <br />
          <button onClick={decryptText} className="de-btn">Decode</button>
          <br />
          {decryptedText && (
            <div className="decrypted-text">
              <h2>Plain text: {decryptedText}</h2>
              <button onClick={copyToClipboard} className="de-btn copy-button">Copy Decoded Text</button>
              {showBanner && <SuccessBanner />}
            </div>
          )}
        </h2>
      </center>
    </div>
          </div>
  );
}

export default Decryption;
