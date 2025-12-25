# 🚁 Drone Survey Management System

[![Platform](https://img.shields.io/badge/Platform-Web-blue?style=for-the-badge)](https://img.shields.io/badge/Platform-Web-blue)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://img.shields.io/badge/TypeScript-5.x-blue)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://img.shields.io/badge/React-18-61DAFB)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)](https://img.shields.io/badge/Node.js-18+-339933)
[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?style=for-the-badge&logo=prisma)](https://img.shields.io/badge/Prisma-6.x-2D3748)

A professional, enterprise-grade platform for planning, managing, and monitoring autonomous drone survey missions across global sites.

## 🌐 Live Demo

> [!IMPORTANT]
> Access the live application and API using the links below.

- **Frontend Dashboard**: [https://drone-command-center.vercel.app](https://drone-command-center.vercel.app)
- **Backend API**: [https://drone-survey-api.railway.app](https://drone-survey-api.railway.app)

---

## 📋 Project Overview

The Drone Survey Management System is designed to simplify complex drone operations. It provides a robust backbone for mission planning, real-time telemetry monitoring, fleet coordination, and automated reporting.

### Core Capabilities
- **Intelligent Planning**: Interactive map-based mission planning with support for Grid, Crosshatch, and Perimeter patterns.
- **Real-time Monitoring**: Low-latency WebSocket telemetry for live tracking of drone position, battery, and mission progress.
- **Fleet Coordination**: Centralized dashboard for monitoring drone health, status, and availability.
- **Automated Reporting**: Post-mission analytics including duration, distance, and coverage area.

---

## 🏗️ System Architecture

The system follows a modern decoupled architecture with a focus on real-time data flow and state consistency.

```mermaid
graph TD
    subgraph Frontend ["Frontend (React + Vite)"]
        UI[User Interface]
        Store[Zustand Store]
        Query[TanStack Query]
        WS_Client[Socket.IO Client]
    end

    subgraph Backend ["Backend (Node.js + Express)"]
        API[REST API Controllers]
        SM[Mission State Machine]
        Gateway[Socket.IO Gateway]
        Sim[Mission Simulator]
        Service[Business Logic Services]
    end

    subgraph Database ["Data Layer"]
        PG[(PostgreSQL)]
        Prisma[Prisma ORM]
    end

    UI --> Store
    UI --> Query
    Query --> API
    WS_Client <--> Gateway
    API --> Service
    Service --> SM
    Service --> Prisma
    Sim --> Gateway
    Sim --> Prisma
    Prisma --> PG
```

---

## 📊 Mission Lifecycle

Missions are governed by a strict state machine to ensure operational safety and data integrity.

```mermaid
stateDiagram-v2
    [*] --> CREATED: Mission Planned
    CREATED --> READY: Drone Assigned
    READY --> IN_PROGRESS: Mission Started
    IN_PROGRESS --> PAUSED: Mission Paused
    PAUSED --> IN_PROGRESS: Mission Resumed
    IN_PROGRESS --> COMPLETED: Mission Finished
    
    READY --> ABORTED: Emergency Abort
    IN_PROGRESS --> ABORTED: Emergency Abort
    PAUSED --> ABORTED: Emergency Abort
    
    COMPLETED --> [*]
    ABORTED --> [*]
```

---

## 🧬 Database Schema

The data model is normalized to support scalable fleet operations and historical telemetry tracking.

```mermaid
erDiagram
    Drone ||--o{ Mission : "assigned to"
    Mission ||--|| MissionFlightPath : "has"
    Mission ||--o{ MissionEvent : "logs"
    Mission ||--o{ MissionTelemetry : "records"
    Mission ||--o| MissionReport : "generates"

    Drone {
        string id PK
        string name
        string model
        string status "AVAILABLE | IN_MISSION | MAINTENANCE | OFFLINE"
        float batteryLevel
        float healthScore
        float homeBaseLat
        float homeBaseLng
    }

    Mission {
        string id PK
        string name
        string status "CREATED | READY | IN_PROGRESS | PAUSED | COMPLETED | ABORTED"
        string pattern "GRID | CROSSHATCH | PERIMETER"
        float altitude
        float speed
        json surveyArea
    }

    MissionTelemetry {
        string id PK
        string missionId FK
        float latitude
        float longitude
        float altitude
        float batteryLevel
        datetime recordedAt
    }
```

---

## 📡 Real-time Telemetry Flow

Telemetry data flows from the simulator (or real drone) to the frontend with minimal latency.

```mermaid
sequenceDiagram
    participant D as Drone/Simulator
    participant B as Backend (Socket.IO)
    participant F as Frontend (React)

    F->>B: SUBSCRIBE_MISSION (missionId)
    B-->>F: Subscription Confirmed
    
    loop Every 2 Seconds
        D->>B: Update State (Pos, Battery, Progress)
        B->>B: Persist Telemetry to DB
        B->>F: TELEMETRY_UPDATE (Payload)
        F->>F: Update Map Marker & UI
    end

    D->>B: MISSION_COMPLETED
    B->>F: MISSION_COMPLETED
    F->>F: Show Success & Generate Report
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|:--- |:--- |
| **React 18** | Component-based UI architecture |
| **TypeScript** | Static typing for robust development |
| **MapLibre GL** | High-performance vector map rendering |
| **TanStack Query** | Server state management and caching |
| **Zustand** | Lightweight client-side state management |
| **Tailwind CSS** | Utility-first styling for premium UI |
| **shadcn/ui** | Accessible and beautiful UI components |

### Backend
| Technology | Purpose |
|:--- |:--- |
| **Node.js** | Scalable server-side runtime |
| **Express** | Minimalist web framework |
| **Prisma** | Modern type-safe ORM |
| **PostgreSQL** | Reliable relational database |
| **Socket.IO** | Real-time bidirectional communication |
| **Zod** | Schema validation for API requests |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- PostgreSQL instance
- npm or yarn

### 1. Installation
```bash
# Clone the repository
git clone <repository-url>
cd flytbase

# Install dependencies for both components
cd backend && npm install
cd ../drone-command-center && npm install
```

### 2. Database Setup
```bash
cd backend
cp .env.example .env
# Configure DATABASE_URL in .env

npx prisma migrate dev --name init
npm run seed
```

### 3. Running Locally
```bash
# Start Backend (from backend directory)
npm run dev

# Start Frontend (from drone-command-center directory)
npm run dev
```

---

## 🎯 Key Features & Implementation

| Feature | Implementation Detail |
|:--- |:--- |
| **Mission Planning** | Polygon drawing with automatic waypoint generation based on pattern geometry. |
| **State Machine** | Enforced server-side state transitions to prevent invalid operations. |
| **Live Tracking** | Smooth marker interpolation and automatic map following. |
| **Safety** | Emergency abort with reason logging and automatic drone release. |
| **Analytics** | Aggregated data processing for mission and organization-level reports. |

---

## 🤖 AI Tool Usage

This project was developed using a "Human-in-the-loop" AI-assisted workflow.

- **Claude 3.5 Sonnet**: Used for architectural brainstorming, complex logic implementation, and documentation.
- **Cursor AI**: Leveraged for rapid prototyping, code refactoring, and boilerplate generation.

> [!NOTE]
> All AI-generated code was rigorously reviewed, tested, and refined by a human engineer to ensure it meets production standards for safety, performance, and maintainability.

---

## 📝 Design Decisions

1. **Atomic Transactions**: All mission state changes are wrapped in Prisma transactions to ensure that status updates and event logging are atomic.
2. **Idempotency**: The API supports idempotency keys for critical operations (start/abort) to prevent duplicate execution in unstable network conditions.
3. **Stateless Backend**: The backend is designed to be stateless, allowing for horizontal scaling behind a load balancer.
4. **Optimistic UI**: The frontend uses optimistic updates for a snappy user experience while maintaining eventual consistency with the server.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Author

**Chand** - *Lead Developer* - [GitHub](https://github.com/chand)

Built with ❤️ for the FlytBase Design Challenge.
