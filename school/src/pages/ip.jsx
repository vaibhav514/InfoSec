import React, { useState } from 'react';
import axios from 'axios';

function DomainIPLookup() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const lookupDomainOrIP = () => {
    setLoading(true);
    setResult('');

    const isIP = /^[0-9.]+$/.test(input);
    const type = isIP ? 'PTR' : 'A';
    const url = ('http://ip-api.com/json/${input}');

    axios.get(url)
      .then((response) => {
        setLoading(false);
        const data = response.data;
        if (data.Answer && data.Answer.length > 0) {
          const ipAddress = isIP ? data.Answer[0].data : data.Answer[0].data.split(' ')[1];
          setResult(ipAddress);
        } else {
          setResult('No result found');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error performing domain/IP lookup:', error);
        setResult('Error performing lookup');
      });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Domain/IP Lookup</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter domain name or IP address"
      />
      <button onClick={lookupDomainOrIP}>Lookup</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
}

export default DomainIPLookup;