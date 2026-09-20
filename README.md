# SyncBoard (CollabBoard) — Client Repository

![Milestone](https://img.shields.io/badge/Milestone-03_Full_Stack_%26_Database-success)
![Stack](https://img.shields.io/badge/Stack-React_%7C_Vite_%7C_Express_%7C_MongoDB-blue)

A collaborative, Kanban-style task management platform built progressively as a full-stack web application. 

This repository contains the **React Front-End** client. It is currently at **Milestone 3**, meaning the static UI and local mock data have been successfully replaced with live data fetched from a persistent MongoDB-backed REST API. 

Every action in the UI (creating boards, adding tasks, moving cards, starring boards) now reads from and writes to a cloud-hosted MongoDB Atlas cluster via the Express backend.

---

## 👥 Team (Group 49)

- **Ravindu Fernando** (Front-End & Backend Lead)
- **KTR Anthony** (Frontend & Backend Integration)
- **HMD Sathsarani** (UI/UX Design, API & Database Setup)
- **Chamoth Silva** (Documentation, Testing & QA)

---

## 🏗️ Architecture & Tech Stack

Per the assignment requirements, this application follows a decoupled client-server architecture.

**Frontend (This Repository):**
- **Core:** React 18 scaffolds with Vite.
- **Styling:** Plain CSS utilizing CSS custom properties (design tokens).
- **Icons:** `lucide-react`.
- **API Client:** Native `fetch` API abstracted into a modular client (`src/api/client.js`).

**Backend (syncboard-server):**
- Node.js & Express REST API.
- MongoDB Atlas (Free Tier M0) accessed via Mongoose ODM.

### Architecture Diagram
```mermaid
graph LR
    subgraph Client [Frontend - React/Vite]
        UI[React Components] --> API_Client[api/client.js]
    end
    subgraph Server [Backend - Express]
        API_Client -- HTTP GET/POST/PATCH/DELETE --> Routes[Express Routes]
        Routes --> Controllers[Controllers]
        Controllers --> Models[Mongoose Models]
    end
    subgraph Database [MongoDB Atlas]
        Models -- Read/Write --> DB[(MongoDB Cluster)]
    end
## 🚀 How to Run (Setup Instructions)

This application consists of a decoupled client and server. **The backend API must be running first** for the frontend to display data.

### Prerequisites
- Node.js (v18 or later recommended)
- npm (Node Package Manager)
- A MongoDB Atlas Free Tier (M0) cluster (for the backend)

---

### Step 1: Start the Backend (syncboard-server)
The Express API must be running on port `5000` to serve data to the React client.

1. Open a terminal and clone the backend repository:
   ```bash
   git clone [https://github.com/raaaaavi/syncboard-server.git](https://github.com/raaaaavi/syncboard-server.git)
   cd syncboard-server
