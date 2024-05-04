import React, { useState, useRef } from 'react';
import BreadCrumps from "../components/BreadCrumps";

function Base64Decoder() {
  const [encodedText, setEncodedText] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const decodedTextAreaRef = useRef(null);

  const handleInputChange = (event) => {
    setEncodedText(event.target.value);
  };
  
  const decodeBase64 = () => {
    try {
      const decoded = atob(encodedText);
      setDecodedText(decoded);
    } catch (error) {
      console.error('Error decoding Base64:', error.message);
      setDecodedText('Error decoding Base64');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Optionally provide user feedback
    alert('Text copied to clipboard!');
  };

  return (
    <div>
      <BreadCrumps page="Tools/Base 64 Decoder" title="Base 64 Decoder" />
      <center>
      <h2><textarea
        value={encodedText}
        onChange={handleInputChange}
        placeholder="Enter Base64 encoded text here"
        rows={5}
        cols={50}
      />
      <br />
      <br />
      <button onClick={decodeBase64}>Decode</button>
      <br />
      <br />
      <textarea
        ref={decodedTextAreaRef}
        value={decodedText}
        readOnly
        placeholder="Decoded text will appear here"
        rows={5}
        cols={50}
        style={{ resize: 'none' }}
        onChange={() => {
          if (decodedTextAreaRef.current) {
            decodedTextAreaRef.current.style.height = 'auto';
            decodedTextAreaRef.current.style.height = decodedTextAreaRef.current.scrollHeight + 'px';
          }
        }}
      />
      <br />
      <br />
      <button onClick={() => copyToClipboard(decodedText)}>Copy Decoded Text</button>
      <br />
      <br />
      </h2>
      </center>
    </div>
  );
}

export default Base64Decoder;
