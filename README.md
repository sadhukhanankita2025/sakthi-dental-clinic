# 🦷 Sakthi Dental Clinic – Patient Care Web Application

A modern, responsive, and patient-centric **Full Stack Dental Clinic Web Application** built for **Sakthi Dental Clinic**. The project combines a beautiful React + Vite frontend with a secure Node.js + Express backend and PostgreSQL database for appointment booking and patient inquiries.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)

---

## 🌟 Project Overview

The Sakthi Dental Clinic website is designed to provide a seamless digital experience for patients and clinic staff.

### Key Highlights

- 📅 Online Appointment Booking System
- 📩 Contact & Inquiry Form connected to PostgreSQL
- 👨‍⚕️ Doctor Profiles & Specialties
- 🦷 Complete Dental Treatment Catalog
- 🏥 Clinic Facilities Showcase
- 💬 Patient Testimonials
- ❓ Frequently Asked Questions
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS & Motion Animations
- 🔒 Secure REST API using Express.js and PostgreSQL

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React | UI Library |
| Vite | Fast Development Bundler |
| Tailwind CSS | Styling Framework |
| Motion (Framer Motion) | Animations |
| Lucide React | Icons |
| React Router DOM | Routing |

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| Express.js | REST API Framework |
| pg | PostgreSQL Driver |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment Variables |

## Database

- PostgreSQL

---

# 📂 Project Structure

```text
sakthi-dental-clinic/
│
├── sakthi-backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── node_modules/
│
├── src/
│   ├── assets/
│   │   ├── Amenities-icons/
│   │   ├── Banner Images/
│   │   ├── Treatments/
│   │   ├── 1doc.jpg
│   │   ├── doc.png
│   │   ├── SDC Logo.png
│   │   └── ...
│   │
│   ├── components/
│   │   ├── AppointmentModal.jsx
│   │   ├── ContactForm.jsx
│   │   ├── CTA.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorsAndSpecialties.jsx
│   │   ├── FacilitiesSection.jsx
│   │   ├── FacilityCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TreatmentCard.jsx
│   │   ├── TrustBanner.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Treatments.jsx
│   │   ├── Contact.jsx
│   │   └── Privacy.jsx
│   │
│   ├── data/
│   │   ├── doctorsData.js
│   │   ├── facilitiesData.js
│   │   ├── faqsData.js
│   │   ├── testimonialsData.js
│   │   └── TreatmentsData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

# ✨ Features

## 🏠 Home Page

- Animated Hero Section
- Trust Banner
- Services Overview
- Why Choose Us
- Clinic Facilities
- Testimonials
- FAQ
- Appointment CTA

## 👨‍⚕️ About Page

- Clinic Story
- Mission & Vision
- Doctor Profiles
- Clinic Statistics
- Animated Timeline
- FAQ Section

## 🦷 Treatments Page

- Complete Treatment Categories
- Search Functionality
- Treatment Cards
- Procedure Details
- Appointment Button

## 📞 Contact Page

- Contact Information
- Google Map Integration
- Contact Form
- Emergency Contact Details

## 📅 Appointment Booking

Patients can book appointments by selecting:

- Name
- Phone Number
- Email
- Doctor
- Treatment
- Appointment Date
- Time Slot
- Additional Notes

Data is stored securely inside PostgreSQL.

---

# 🗄️ Database Setup (PostgreSQL)

Create a PostgreSQL database named:

```sql
CREATE DATABASE sakthi_dental_db;
```

Connect to the database and execute the following SQL script.

## Create Appointments Table

```sql
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    treatment VARCHAR(255) NOT NULL,
    doctor VARCHAR(255) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time VARCHAR(50) NOT NULL,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Create Contact Messages Table

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ⚙️ Backend Setup

Navigate into backend folder.

```bash
cd sakthi-backend
```

Install backend dependencies.

```bash
npm install
```

## Create Environment File

Create a `.env` file inside `sakthi-backend`.

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/sakthi_dental_db
```

Replace:

```text
your_password
```

with your PostgreSQL password.

---

## Backend Dependencies

```bash
npm install express pg cors dotenv
```

---

## Start Backend Server

```bash
node server.js
```

Expected console output.

```text
Connected to PostgreSQL database successfully!
Sakthi Dental Clinic backend running on port 5000.
```

Backend runs on:

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

Go back to project root.

```bash
cd ..
```

Install frontend packages.

```bash
npm install
```

Start Vite server.

```bash
npm run dev
```

Open browser.

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

## Health Check

| Method | Endpoint |
|--------|----------|
| GET | `/api/health` |

Response

```json
{
  "status": "Backend Running Successfully"
}
```

---

## Book Appointment

| Method | Endpoint |
|--------|----------|
| POST | `/api/appointments` |


---

## Submit Contact Form

| Method | Endpoint |
|--------|----------|
| POST | `/api/contact` |

Request Body

```json
{
  "name": "name",
  "email": "@email.com",
  "phone": "9876543210",
  "message": "Need information regarding braces."
}
```

Success Response

```json
{
  "message": "Message submitted successfully."
}
```

---

## Fetch Appointments

| Method | Endpoint |
|--------|----------|
| GET | `/api/appointments` |

Returns all appointments.

---

## Fetch Contact Messages

| Method | Endpoint |
|--------|----------|
| GET | `/api/contact-messages` |

Returns all patient inquiries.

---

# 🔒 Environment Variables

Backend `.env`

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/sakthi_dental_db
```

Never commit `.env` to GitHub.

---

# 📦 Available Scripts

## Frontend

```bash
npm run dev
```

Runs development server.

```bash
npm run build
```

Creates production build.

```bash
npm run preview
```

Preview production build.

## Backend

```bash
node server.js
```

Starts Express server.

---

# 🚀 Local Development (Complete Setup)

## 1. Clone Repository

```bash
git clone <your-repository-url>
cd sakthi-dental-clinic
```

## 2. Install Frontend

```bash
npm install
```

## 3. Install Backend

```bash
cd sakthi-backend
npm install
```

## 4. Configure Database

Create PostgreSQL database.

```sql
CREATE DATABASE sakthi_dental_db;
```

Run SQL schema provided above.

## 5. Add Environment Variables

Create `.env`.

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/sakthi_dental_db
```

## 6. Start Backend

```bash
node server.js
```

## 7. Start Frontend

Open another terminal.

```bash
cd sakthi-dental-clinic
npm run dev
```

Application URL.

```text
Frontend : http://localhost:5173
Backend  : http://localhost:5000
```

---
