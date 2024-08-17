// src/components/Admin.js
import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
    const [uniqueCode, setUniqueCode] = useState('');
    const [message, setMessage] = useState('');

    const handleScan = async () => {
        const response = await axios.post('http://localhost:5000/admin/scan', { uniqueCode });
        setMessage(response.data.message);
    };

    return (
        <div>
            <input type="text" value={uniqueCode} onChange={(e) => setUniqueCode(e.target.value)} placeholder="Enter QR Code" />
            <button onClick={handleScan}>Scan</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Admin;
