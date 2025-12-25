# Master Prompt – Drone Survey Management System Frontend

## Overview
Build a production‑grade **React + TypeScript** frontend that consumes the existing backend APIs (no mock data, no backend generation). The UI should feel like a modern mission‑control dashboard with dark‑mode support.

---

## Tech Stack & Constraints
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS (dark mode via `class` strategy)
- **UI components:** shadcn/ui (generated with the CLI)
- **State management:** Zustand
- **Data fetching:** TanStack Query (React Query)
- **Maps:** Mapbox GL JS **or** Leaflet (choose one, include token env var if Mapbox)
- **Realtime:** WebSocket (`ws://localhost:3000/ws/telemetry`)
- **Charts:** Recharts
- **Routing:** React Router
- **Env config:** `.env` (`VITE_API_BASE_URL`, `VITE_WS_URL`, optional `VITE_MAPBOX_TOKEN`)

**Do NOT** generate backend code, mock APIs, or hard‑code data.

---

## API Endpoints (REST)
| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `http://localhost:3000/api/missions` | List all missions |
| `POST`| `http://localhost:3000/api/missions` | Create a mission |
| `GET` | `http://localhost:3000/api/missions/:id` | Get mission details |
| `POST`| `http://localhost:3000/api/missions/:id/start` | Start mission |
| `POST`| `http://localhost:3000/api/missions/:id/pause` | Pause mission |
| `POST`| `http://localhost:3000/api/missions/:id/resume` | Resume mission |
| `POST`| `http://localhost:3000/api/missions/:id/abort` | Abort mission |
| `GET` | `http://localhost:3000/api/drones` | List drones |
| `GET` | `http://localhost:3000/api/reports/missions/:id` | Mission report |
| `GET` | `http://localhost:3000/api/reports/organization` | Org summary |

---

## WebSocket Protocol
- Connect to `ws://localhost:3000/ws/telemetry`
- Subscribe on mission detail page:
```json
{ "type": "SUBSCRIBE_MISSION", "missionId": "<id>" }
```
- Handle events:
  - `TELEMETRY_UPDATE`
  - `HEARTBEAT`
  - `MISSION_COMPLETED`
- Unsubscribe on page leave.

---

## Core Screens (must implement)
1. **Dashboard (Home)** – Overview cards (total missions, active missions, total flight time) + list of active missions. Navigation links to Missions, Fleet, Reports.
2. **Mission Planner** – Form to create a mission (name, survey area polygon on map, pattern selection, altitude, overlap, speed, pattern config). POST to `/api/missions`. After creation show flight‑path summary and allow drone assignment.
3. **Missions List** – Table from `GET /api/missions` with status badge, assigned drone, progress bar, actions (View, Start, Pause, Resume, Abort).
4. **Mission Details & Live Monitoring** – Route `/missions/:id`. Show metadata, planned flight path on map, live drone position, live progress/ETA, control buttons (Start/Pause/Resume/Abort). Subscribe to WebSocket events.
5. **Fleet Management** – List drones (`GET /api/drones`) with name, status, battery level bar, health, last seen.
6. **Reports & Analytics** – Mission report (`GET /api/reports/missions/:id`) and organization summary (`GET /api/reports/organization`) with charts (duration, total flight time, avg duration).

---

## UX & Quality Requirements
- Loading spinners for all async actions.
- Friendly error messages.
- Buttons disabled when action not allowed for current mission state.
- Real‑time UI updates (no page refresh).
- Responsive, desktop‑first layout; mobile fallback.
- Dark‑mode support (Tailwind `dark:` utilities).
- Consistent “mission‑control” visual language (cards, badges, progress bars).

---

## Recommended File Structure
```
src/
├─ app/                # Root component, providers (QueryClient, Zustand store, Theme)
├─ pages/
│   ├─ Dashboard.tsx
│   ├─ Missions.tsx
│   ├─ MissionDetail.tsx
│   ├─ Fleet.tsx
│   └─ Reports.tsx
├─ components/
│   ├─ maps/          # Mapbox/Leaflet wrappers, drawing tools
│   ├─ missions/      # Mission cards, list rows, status badges
│   ├─ drones/        # Drone cards, battery bars
│   └─ ui/            # shadcn/ui wrappers (Button, Dialog, Card, etc.)
├─ services/
│   ├─ api.ts         # TanStack Query wrappers for each endpoint
│   └─ websocket.ts   # WebSocket connection & hooks (useTelemetry)
├─ store/
│   └─ missionStore.ts# Zustand slices (missions, drones, telemetry)
└─ types/
    └─ index.ts       # Shared TypeScript interfaces for API payloads
```

---

## Quick Start (for developers)
```bash
# Scaffold project (choose Vite for speed)
npx create-vite@latest drone-dashboard --template react-ts
cd drone-dashboard

# Install dependencies
npm i tailwindcss@latest postcss@latest autoprefixer@latest \
      @tanstack/react-query zustand mapbox-gl leaflet recharts react-router-dom \
      shadcn-ui

# Init Tailwind
npx tailwindcss init -p
# Enable dark mode in tailwind.config.js: darkMode: 'class'

# Generate shadcn/ui components (example)
npx shadcn-ui@latest add button card dialog toast

# Create .env file
cat <<EOF > .env
VITE_API_BASE_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000/ws/telemetry
VITE_MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN   # if using Mapbox
EOF

# Run dev server
npm run dev
```

---

**End of Master Prompt**
