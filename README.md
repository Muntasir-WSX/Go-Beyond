# 🌍 Go Beyond

**A Tour Booking & Management Web Application**

Go Beyond is a full-stack tour booking management platform where travelers can discover and book tours, and tour guides can host and manage their own packages—all inside one clean, responsive system.

This project focuses on **real-world booking flows, role-based features, and production-style architecture**, not just UI demos.

---

## 🚀 Live Overview

Go Beyond lets users:

* Explore curated tour packages
* Book trips instantly
* Track booking history
* Host and manage tours as a guide
  —all secured with authentication and modern UI/UX.

---

## ✨ Features

### 👤 Public Users (No Login Required)

* **Explore Destinations**
  Browse featured and all available tour packages from the home page and “All Packages” section.

* **Smart Real-time Search**
  Instantly filter tours by **tour name or destination**.

* **Detailed Tour Information**
  View tour duration, price, departure dates, and destination highlights without creating an account.

* **Light / Dark Mode**
  Theme toggle for better accessibility and visual comfort.

* **Fully Responsive Design
  Optimized for mobile, tablet, and desktop with a modern, recruiter-friendly layout.

---

### 🔐 Authenticated Travelers

* Secure Authentication

  * Google One-Tap Login
  * Email & Password Authentication
  * JWT-based session handling

* **Instant Tour Booking**

  * Simple booking form
  * Auto-fills authenticated user data

* **Personal Booking Dashboard**

  * View all booked tours in a structured table
  * Track booking status

* **Trip Completion Tracking**

  * Mark tours as **Completed** after finishing a trip
  * Maintains clean travel history

* **Custom 404 Page**

  * Fun, animated **“Lost in the Himalayas”** themed error page

---

### 🗺️ Tour Guides / Hosts

* Host Tour Packages

  * Create tour packages with title, description, price, duration, and images

* Manage My Packages

  * Dedicated dashboard to view all hosted tours

* **Full CRUD Support**

  * Edit tour details
  * Delete packages with confirmation prompts

* **Booking Counter**

  * Automatically increments when users book a tour
  * Helps hosts track tour popularity

---

## 🧠 Technical Highlights (Recruiter Stuff)

* **JWT Authentication**

  * Private routes protected on both client & server

* **MongoDB Database**

  * Fully dynamic data
  * No hardcoded JSON or mock data

* **Client-side Validation**

  * Toast notifications for instant feedback
  * Used across login, registration, and package forms

* **Scalable Component Structure**

  * Built with future expansion in mind (admin roles, payments, reviews)

---

## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS
* Framer Motion (animations)
* Swiper.js (sliders)
* Lucide React Icons
* date-fns
* react-countup
* Scroll-to-top utility (in progress)

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### Authentication

* Firebase Authentication (Google & Email/Password)

---

## 📦 NPM Packages Used

```bash
npm install react-countup
npm install date-fns
npm install swiper
npm install lucide-react
npm install framer-motion
```

(More packages will be added as features evolve.)

---

## ⚠️ Project Status

🛠️ In Progress

* Scroll-to-top enhancement (planned)
* Additional UI polish
* Feature expansion (will be added.....)

---




