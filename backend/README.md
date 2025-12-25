# 🚁 Drone Survey Management System - Backend

A production-ready backend API for managing autonomous drone survey missions across multiple sites.

## Features

- **Mission Planning**: Create survey missions with configurable patterns (Grid, Crosshatch, Perimeter)
- **Fleet Management**: Track drone inventory, status, and availability
- **Real-time Telemetry**: WebSocket-based live mission monitoring with position updates
- **Mission Control**: Start, pause, resume, and abort missions with state machine validation
- **Reporting & Analytics**: Mission summaries and organization-wide statistics

## Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript 5.x
- **Framework**: Express.js
- **ORM**: Prisma 6.x
- **Database**: PostgreSQL
- **Real-time**: Socket.IO
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Set up database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npm run seed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:3000`

## API Endpoints

### Missions

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/missions` | Create a new mission |
| GET | `/api/missions` | List all missions (paginated) |
| GET | `/api/missions/:id` | Get mission details |
| POST | `/api/missions/:id/assign-drone` | Assign a drone to mission |
| POST | `/api/missions/:id/start` | Start the mission |
| POST | `/api/missions/:id/pause` | Pause the mission |
| POST | `/api/missions/:id/resume` | Resume the mission |
| POST | `/api/missions/:id/abort` | Abort the mission |

### Drones

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/drones` | Register a new drone |
| GET | `/api/drones` | List all drones |
| GET | `/api/drones/:id` | Get drone details |

### Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports/missions/:id` | Get mission report |
| GET | `/api/reports/organization` | Get organization summary |

### WebSocket

Connect to `ws://localhost:3000/ws/telemetry` for real-time updates.

**Events:**
- `SUBSCRIBE_MISSION` - Subscribe to a specific mission
- `TELEMETRY_UPDATE` - Receive position and progress updates
- `HEARTBEAT` - Connection health check
- `MISSION_COMPLETED` - Mission completion notification

## Mission State Machine

```
CREATED → READY → IN_PROGRESS → PAUSED → COMPLETED
                      ↓
                   ABORTED
```

## Project Structure

```
backend/
├── prisma/              # Database schema and migrations
├── src/
│   ├── config/          # Environment and constants
│   ├── modules/         # Feature modules
│   │   ├── mission/     # Mission CRUD and lifecycle
│   │   ├── drone/       # Fleet management
│   │   ├── telemetry/   # Real-time updates
│   │   └── reporting/   # Analytics
│   ├── shared/          # Common utilities
│   ├── app.ts           # Express configuration
│   └── server.ts        # Entry point
└── package.json
```

## Development

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Open Prisma Studio
npm run prisma:studio
```

## License

MIT
