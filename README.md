# Armatrix Team Page

A premium, interactive Team Page built with **FastAPI** (Backend) and **Next.js 15** (Frontend). Designed for clarity, speed, and visual excellence.

## 📁 Project Structure
- `/backend`: FastAPI Python server with SQLite storage.
- `/frontend`: Next.js 15 React app with Tailwind CSS v4 & custom canvas animations.

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
   python -m uvicorn main:app --port 8000 --reload
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

## 🛠️ API & Data Layer

### JSON Standard
The backend is a standard **REST API** that accepts and outputs **JSON**. 
- **Requests**: Send `Content-Type: application/json` for POST/PUT.
- **Responses**: All data is returned as JSON objects/arrays.

### Key Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/team` | List all team members (Paginated) |
| `POST` | `/team` | Add a new member (JSON Body required) |
| `PUT` | `/team/{id}` | Update existing member (Partial JSON supported) |
| `DELETE` | `/team/{id}` | Remove a member |

---

## 🌐 Live Demo
- **Frontend**: https://your-project.vercel.app/team
- **Backend API**: https://armatrix-team-api.onrender.com/docs

## 🎨 Design & Engineering Decisions

### Zero-Hassle Data Layer
- **No External DB**: SQLite provides a file-based database (`armatrix_team.db`) that requires zero configuration while keeping data persistent across restarts.
- **Frontend Logic**: Optimized as a read-only display. All data management (Add/Edit) is handled via the endpoints listed above (using Postman or the /docs UI).

### Visual High-Lights
- **Animated Canvas Rays**: Custom HTML5 Canvas animation in the Hero section, featuring pulsing rays in **Pink (#F5AEAE)** and **Blue (#2060DF)**.
- **Precision Typography**: Paired **Space Grotesk** (Engineering feel for headings) with **Inter** (Readability for body).
- **CTA Craftsmanship**: The "Get in Touch" button uses a dual-layer pill design with a white-to-dark gradient border and a 3px gap.

### Logo Handling
- **Dynamic Theming**: The Armatrix logo asset uses CSS blend modes (`screen`/`multiply`) to handle transparency and contrast automatically across light/dark backgrounds.
