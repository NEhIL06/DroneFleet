# 🚁 Drone Survey Management System

A comprehensive platform for planning, managing, and monitoring autonomous drone survey missions across multiple sites.

![Platform](https://img.shields.io/badge/Platform-Web-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## 🌐 Live Demo

**Frontend**: [https://drone-command-center.vercel.app](https://drone-command-center.vercel.app)  
**Backend API**: [https://drone-survey-api.railway.app](https://drone-survey-api.railway.app)

---

## 📋 Project Overview

This system enables organizations to:
- **Plan Missions**: Draw survey areas, configure flight patterns (Grid, Crosshatch, Perimeter)
- **Manage Fleet**: Monitor drone status, battery levels, and availability
- **Monitor in Real-time**: Track live drone position, telemetry, and mission progress
- **Generate Reports**: View mission summaries, flight statistics, and analytics

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (React + Vite)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Dashboard   │  │  Missions    │  │    Fleet     │  │   Reports    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│           │                │                │                │              │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                        State Management                             │    │
│  │          TanStack Query (REST)  +  Zustand (WebSocket)              │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────────────────────┘
                              │ REST API         │ WebSocket
                              ▼                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BACKEND (Node.js + Express)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Mission    │  │    Drone     │  │  Telemetry   │  │  Reporting   │    │
│  │   Module     │  │   Module     │  │   Module     │  │   Module     │    │
│  │              │  │              │  │              │  │              │    │
│  │ - CRUD       │  │ - Inventory  │  │ - WebSocket  │  │ - Analytics  │    │
│  │ - State      │  │ - Locking    │  │ - Simulator  │  │ - Summaries  │    │
│  │   Machine    │  │ - Status     │  │ - Storage    │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                              │                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                     Prisma ORM + PostgreSQL                          │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Flow

```
                    Mission Lifecycle
                    ═════════════════

  CREATE           ASSIGN           START            COMPLETE
    │                │                │                 │
    ▼                ▼                ▼                 ▼
┌────────┐     ┌────────┐      ┌───────────┐     ┌───────────┐
│CREATED │ ──► │ READY  │ ───► │IN_PROGRESS│ ──► │ COMPLETED │
└────────┘     └────────┘      └───────────┘     └───────────┘
                   │                │
                   │                ├────► PAUSED ─┐
                   │                │              │
                   ▼                ▼              ▼
              ABORTED ◄────────────────────────────


              Real-time Telemetry Flow
              ════════════════════════

┌────────┐    ┌─────────────┐    ┌───────────┐    ┌──────────┐
│Frontend│◄───│  WebSocket  │◄───│ Simulator │◄───│ Database │
│  Map   │    │   Server    │    │  Service  │    │Waypoints │
└────────┘    └─────────────┘    └───────────┘    └──────────┘
     │              │                  │
     │         Every 2 sec:            │
     │         - Position              │
     │         - Battery               │
     │         - Progress              │
     │         - ETA                   │
     └──────── Live Update ────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TanStack Query** - Server State Management
- **Zustand** - Client State Management
- **MapLibre GL** - Map Visualization
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component Library

### Backend
- **Node.js 18+** - Runtime
- **Express.js** - Web Framework
- **TypeScript** - Type Safety
- **Prisma** - ORM
- **PostgreSQL** - Database
- **Socket.IO** - Real-time Communication
- **Zod** - Validation

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd flytbase
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials

npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

### 3. Frontend Setup
```bash
cd drone-command-center
npm install
npm run dev
```

### 4. Access Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **WebSocket**: ws://localhost:3000/ws/telemetry

---

## 📁 Project Structure

```
flytbase/
├── backend/
│   ├── prisma/              # Database schema & migrations
│   ├── src/
│   │   ├── config/          # Environment & constants
│   │   ├── modules/
│   │   │   ├── mission/     # Mission CRUD & lifecycle
│   │   │   ├── drone/       # Fleet management
│   │   │   ├── telemetry/   # WebSocket & simulation
│   │   │   └── reporting/   # Analytics & reports
│   │   └── shared/          # Common utilities
│   └── package.json
│
└── drone-command-center/
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── pages/           # Route components
    │   ├── services/        # API & WebSocket clients
    │   ├── stores/          # Zustand state
    │   └── types/           # TypeScript interfaces
    └── package.json
```

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **Mission Planning** | Draw polygons, preview flight paths, configure parameters |
| **Flight Patterns** | Grid, Crosshatch, Perimeter with configurable spacing |
| **Real-time Tracking** | Live drone position on map with smooth animation |
| **Telemetry Display** | Battery, altitude, speed, heading, ETA |
| **State Machine** | Enforced transitions: Start → Pause → Resume → Complete |
| **Fleet Dashboard** | Drone status, battery levels, health monitoring |
| **Reports & Analytics** | Mission summaries, organization statistics, charts |

---

## 🤖 AI Tool Usage

This project was developed with assistance from AI tools to accelerate development:

| Tool | Usage |
|------|-------|
| **Claude (Anthropic)** | Architecture design, code generation, debugging |
| **Cursor AI** | Code completion, refactoring assistance |

### Where AI Helped:
- **Architecture**: System design, module organization, data flow patterns
- **API Design**: REST endpoint structure, WebSocket event contracts
- **UI Scaffolding**: Component structure, form layouts, styling
- **Debugging**: TypeScript errors, Prisma issues, WebSocket connectivity

### Human Review:
All AI-generated code was reviewed and refined to ensure:
- ✅ Type safety and correctness
- ✅ Error handling completeness
- ✅ Performance optimization
- ✅ Code consistency and style

---

## 📖 API Documentation

### REST Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/missions` | Create mission |
| GET | `/api/missions` | List missions |
| GET | `/api/missions/:id` | Get mission details |
| POST | `/api/missions/:id/assign-drone` | Assign drone |
| POST | `/api/missions/:id/start` | Start mission |
| POST | `/api/missions/:id/pause` | Pause mission |
| POST | `/api/missions/:id/resume` | Resume mission |
| POST | `/api/missions/:id/abort` | Abort mission |
| GET | `/api/drones` | List drones |
| GET | `/api/reports/organization` | Org summary |
| GET | `/api/reports/missions/:id` | Mission report |

### WebSocket Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `SUBSCRIBE_MISSION` | Client → Server | Subscribe to mission telemetry |
| `TELEMETRY_UPDATE` | Server → Client | Position & progress update |
| `HEARTBEAT` | Server → Client | Connection alive signal |
| `MISSION_COMPLETED` | Server → Client | Mission finished notification |

---

## 📝 Design Decisions & Trade-offs

### Trade-offs Made:

1. **Simulation vs Real Drones**: Built complete simulation for demo; architecture supports real drone integration later

2. **Polling Fallback**: Frontend polls every 5s as fallback if WebSocket fails

3. **Single-org Model**: No multi-tenancy for simplicity; can be added via Prisma middleware

4. **Append-only Telemetry**: Never update telemetry records, only insert new ones for audit trail

### Safety Considerations:

- State machine prevents invalid transitions
- Drone locking prevents double-assignment
- Battery threshold checks before mission start
- Abort available at any active state

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 👥 Author

Built for FlytBase Design Challenge - December 2024
