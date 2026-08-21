const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================
// Using cors() allows requests from any frontend port (like Vite 5173 or React 3000)
app.use(cors());
app.use(express.json());

// ==========================================
// POSTGRESQL CONNECTION POOL
// ==========================================
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Test Database Connection on startup
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error connecting to PostgreSQL database:', err.stack);
    }
    console.log('Connected to PostgreSQL database successfully!');
    release();
});

// ==========================================
// 1. APPOINTMENTS API ENDPOINT
// ==========================================
app.post('/api/appointments', async (req, res) => {
    const { patientName, phone, email, doctor, treatment, date, time, notes } = req.body;

    if (!patientName || !phone || !treatment || !date || !time) {
        return res.status(400).json({ error: 'Missing required appointment fields.' });
    }

    try {
        const query = `
            INSERT INTO appointments (patient_name, phone, email, treatment, doctor, appointment_date, appointment_time, notes)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `;
        const values = [patientName, phone, email || null, treatment, doctor, date, time, notes || null];
        
        const result = await pool.query(query, values);
        
        res.status(201).json({
            success: true,
            message: 'Appointment booked successfully!',
            data: result.rows[0]
        });
    } catch (err) {
        console.error('Database insertion error (Appointments):', err.message);
        res.status(500).json({ error: 'Internal server error while saving appointment.' });
    }
});

// ==========================================
// 2. CONTACT MESSAGES API ENDPOINT
// ==========================================
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'All contact fields are required.' });
    }

    try {
        const query = `
            INSERT INTO contact_messages (name, email, phone, message)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [name, email, phone, message];
        
        const result = await pool.query(query, values);
        
        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: result.rows[0]
        });
    } catch (err) {
        console.error('Database insertion error (Contact):', err.message);
        res.status(500).json({ error: 'Internal server error while sending message.' });
    }
});

// ==========================================
// START SERVER
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sakthi Dental Clinic backend running on port ${PORT}`);
});

// ==========================================
// COOKIE POLICY API ENDPOINT
// ==========================================
app.get('/api/cookies/policy', (req, res) => {
    res.json({
        title: "Cookies & User Experience Policy",
        statement: "Our website may use 'cookies' to enhance the user experience. Cookies are small files stored on a user’s device for record-keeping purposes and to track preferences or site activity.",
        categories: [
            { id: "essential", name: "Strictly Essential", defaultState: true, configurable: false },
            { id: "preferences", name: "Preference & Doctor Selection", defaultState: true, configurable: true },
            { id: "analytics", name: "Anonymous Telemetry", defaultState: true, configurable: true }
        ]
    });
});