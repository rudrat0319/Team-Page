# Armatrix Team Page

A premium, interactive Team Page built with **FastAPI** (Backend) and **Next.js 16** (Frontend). Designed for clarity, speed, and visual excellence.

## 📁 Project Structure
- `/backend`: FastAPI Python server with SQLite storage.
- `/frontend`: Next.js 16 React app with Tailwind CSS v4 & custom canvas animations.

---

## 🚀 Setup & Installation

### 1. Backend (FastAPI)
1. **Navigate to backend**:
   ```bash
   cd backend
   ```
2. **Create a virtual environment**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Windows: .venv\Scripts\activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the server**:
   ```bash
   python -m uvicorn main:app --port 8000
   ```
   *Note: Uses SQLite locally (`armatrix_team.db`). No external DB configuration needed.*

### 2. Frontend (Next.js)
1. **Navigate to frontend**:
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the page.

---

## 🎨 Design & Engineering Decisions

### Visual High-Lights
- **Animated Canvas Rays**: Custom HTML5 Canvas animation in the Hero section, featuring pulsing rays in **Pink (#F5AEAE)** and **Blue (#2060DF)**.
- **Precision Typography**: Paired **Space Grotesk** (Engineering/Tech feel for headings) with **Inter** (Readability for body).
- **CTA Craftsmanship**: The "Get in Touch" button uses a dual-layer pill design with a white-to-dark gradient border and a nested black core with a 3px gap.

### Zero-Hassle Data Layer
- **Local Persistence**: SQLite provides a file-based database that requires zero configuration, zero environment variables, and no external URLs while keeping your data persistent across restarts.
- **Frontend Logic**: Optimized as a read-only display. Data Management (Add/Edit Members) is designed to be handled via the Backend API (Postman/Render Dashboard).

### Logo Handling
- **Dynamic Theming**: The Armatrix logo asset uses CSS blend modes (`screen`/`multiply`) to automatically handle transparency and contrast across different section backgrounds without needing manual background removal.
