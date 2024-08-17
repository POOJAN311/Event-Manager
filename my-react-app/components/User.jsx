// src/components/User.js
import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';

function User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [qrImage, setQrImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/user/submit', { name, email });
        setQrImage(response.data.qrImage);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <button type="submit">Submit</button>
                {qrImage && <img src={qrImage} alt="QR Code" />}
            </form>
        </div>
    );
}

export default User;