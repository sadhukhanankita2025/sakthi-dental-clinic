const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================
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
// 1. SIGNUP API ENDPOINT
// ==========================================
app.post('/api/signup', async (req, res) => {
    const { name, emailOrPhone, password } = req.body;

    if (!name || !emailOrPhone || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = `
            INSERT INTO users (name, email_or_phone, password, role)
            VALUES ($1, $2, $3, 'patient')
            RETURNING id, name, email_or_phone, role;
        `;
        const values = [name, emailOrPhone, hashedPassword];

        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            user: {
                id: result.rows[0].id,
                name: result.rows[0].name,
                email: result.rows[0].email_or_phone,
                role: result.rows[0].role
            }
        });
    } catch (err) {
        console.error('Database insertion error (Signup):', err.message);
        if (err.code === '23505') {
            return res.status(400).json({ error: 'Email or Phone already registered.' });
        }
        res.status(500).json({ error: 'Internal server error during registration.' });
    }
});

// ==========================================
// 2. LOGIN API ENDPOINT (With Doctor Role Check)
// ==========================================
app.post('/api/login', async (req, res) => {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone || !password) {
        return res.status(400).json({ error: 'Email/Phone and password are required.' });
    }

    try {
        const query = `SELECT * FROM users WHERE email_or_phone = $1;`;
        const result = await pool.query(query, [emailOrPhone]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials or user not found.' });
        }

        const user = result.rows[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        // Specifically assign Dr. Anupriya as a doctor role
        const role = (user.email_or_phone === 'anupriya@sakthidental.com' || user.role === 'doctor') 
            ? 'doctor' 
            : 'patient';

        res.json({
            success: true,
            message: 'Login successful!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email_or_phone,
                role: role
            }
        });
    } catch (err) {
        console.error('Database query error (Login):', err.message);
        res.status(500).json({ error: 'Internal server error during login.' });
    }
});

// ==========================================
// 3. APPOINTMENTS API ENDPOINT
// ==========================================
app.post('/api/appointments', async (req, res) => {
    const { patientName, phone, email, doctor, treatment, date, time, notes } = req.body;

    if (!patientName || !phone || !treatment || !date || !time) {
        return res.status(400).json({ error: 'Missing required appointment fields.' });
    }

    try {
        const query = `
            INSERT INTO appointments (patient_name, phone, email, treatment, doctor, appointment_date, appointment_time, notes, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'Confirmed')
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
// 4. GET USER APPOINTMENTS ENDPOINT
// ==========================================
app.get('/api/my-appointments', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'User query identifier is required.' });
    }

    try {
        const dbQuery = `
            SELECT 
                id, 
                patient_name AS "patientName", 
                treatment, 
                doctor, 
                appointment_date AS "date", 
                appointment_time AS "time", 
                status, 
                admin_message AS "adminMessage", 
                admin_message_date AS "adminMessageDate"
            FROM appointments 
            WHERE email = $1 OR phone = $1 
            ORDER BY appointment_date DESC, appointment_time DESC;
        `;
        
        const result = await pool.query(dbQuery, [query]);
        res.json(result.rows);
    } catch (err) {
        console.error('Database query error (My Appointments):', err.message);
        res.status(500).json({ error: 'Internal server error while fetching appointments.' });
    }
});

// ==========================================
// 5. DOCTOR ADMIN: GET ALL APPOINTMENTS
// ==========================================
app.get('/api/admin/appointments', async (req, res) => {
    try {
        const dbQuery = `
            SELECT 
                id, 
                patient_name AS "patientName", 
                phone, 
                email, 
                treatment, 
                doctor, 
                appointment_date AS "date", 
                appointment_time AS "time", 
                status, 
                admin_message AS "adminMessage"
            FROM appointments 
            ORDER BY appointment_date DESC, appointment_time DESC;
        `;
        const result = await pool.query(dbQuery);
        res.json(result.rows);
    } catch (err) {
        console.error('Database error fetching admin appointments:', err.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// ==========================================
// 6. DOCTOR ADMIN: UPDATE PATIENT ADMIN MESSAGE
// ==========================================
app.put('/api/admin/appointments/:id/message', async (req, res) => {
    const { id } = req.params;
    const { adminMessage } = req.body;

    try {
        const query = `
            UPDATE appointments 
            SET admin_message = $1, admin_message_date = CURRENT_TIMESTAMP 
            WHERE id = $2 
            RETURNING *;
        `;
        const result = await pool.query(query, [adminMessage, id]);
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error('Error updating admin message:', err.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// ==========================================
// 7. CONTACT MESSAGES API ENDPOINT
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
// 8. COOKIE POLICY API ENDPOINT
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

// ==========================================
// START SERVER
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sakthi Dental Clinic backend running on port ${PORT}`);
});