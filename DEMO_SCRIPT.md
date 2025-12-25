# 🎬 Drone Survey Management System - Demo Video Script

**Target Duration: 5-7 minutes**

---

## 🎯 INTRO (30 seconds)

> *[Screen: Dashboard overview with drones and missions]*

**SCRIPT:**
"Hi, I'm presenting my solution for the FlytBase Drone Survey Management System challenge.

This platform enables organizations to plan, monitor, and manage autonomous drone survey missions in real-time. Let me walk you through the key features."

---

## 📋 1. MISSION PLANNING (60 seconds)

> *[Screen: Navigate to Mission Planner]*

**SCRIPT:**
"Let's start by creating a new survey mission.

First, I'll enter the mission name and configure the parameters:
- **Altitude**: 50 meters for optimal coverage
- **Flight pattern**: Grid pattern for systematic area scanning
- **Overlap**: 60% to ensure no gaps in captured data
- **Speed**: 5 meters per second

Now I'll draw the survey area on the map by clicking to create a polygon.

*[Draw polygon on map]*

Watch how the system instantly generates:
- The flight path with the grid pattern
- Waypoint count
- Estimated distance and duration

This real-time preview helps operators validate missions before execution."

---

## 🚁 2. FLEET MANAGEMENT (45 seconds)

> *[Screen: Navigate to Fleet page]*

**SCRIPT:**
"Before starting the mission, let's check our fleet.

The Fleet Management dashboard shows:
- All drones and their current status
- Battery levels with visual indicators
- Health metrics and last seen timestamps

You can see which drones are available, which are on missions, and which need maintenance.

*[Navigate back to mission]*

Now I'll assign a drone to our mission. The system only shows available drones, preventing assignment conflicts."

---

## 🎮 3. MISSION EXECUTION (90 seconds)

> *[Screen: Mission Detail page]*

**SCRIPT:**
"With a drone assigned, let's start the mission.

*[Click Start Mission]*

Notice the **state machine** in action:
- The status changes from READY to IN_PROGRESS
- Invalid actions are automatically disabled

Now watch the real-time monitoring:

**On the map:**
- The drone marker shows the current position
- The orange trail shows the flight path taken
- The home base marker shows where the drone will return

**In the telemetry panel:**
- See the green 'LIVE' indicator pulsing
- Battery level decreasing realistically
- Progress percentage and ETA updating
- Current flight phase: Transit → Survey → Return

*[Wait for drone to move a bit]*

Let me demonstrate the control actions:

*[Click Pause]*
Notice the drone marker freezes - operations paused safely.

*[Click Resume]*
The mission continues from where it stopped.

I can also abort if needed - the system requires a reason for accountability."

---

## 📊 4. REPORTS & ANALYTICS (45 seconds)

> *[Screen: Navigate to Reports page]*

**SCRIPT:**
"After mission completion, operators need insights.

The Reports section provides:
- Individual mission reports with duration, distance, and coverage
- Organization-wide statistics
- Charts showing mission trends over time

Each report includes the mission configuration for audit purposes.

*[Click on a completed mission report]*

This helps teams track efficiency and identify patterns."

---

## 🏗️ 5. ARCHITECTURE HIGHLIGHTS (60 seconds)

> *[Screen: Show README or architecture diagram]*

**SCRIPT:**
"Let me briefly explain the technical architecture:

**Frontend:**
- React with TypeScript for type safety
- TanStack Query for server state
- Zustand for real-time WebSocket state
- MapLibre GL for map visualization

**Backend:**
- Node.js with Express, fully typed
- Prisma ORM with PostgreSQL
- Socket.IO for real-time telemetry
- Explicit state machine for mission lifecycle

**Key Design Decisions:**
1. **Atomic Transactions** - State changes and events are wrapped in database transactions
2. **Idempotency Support** - POST requests support idempotency tokens
3. **Append-only Telemetry** - Full audit trail of all position updates
4. **Scalable Simulation** - Architecture ready for real drone integration"

---

## 🤖 6. AI TOOL USAGE (30 seconds)

> *[Screen: README AI section]*

**SCRIPT:**
"For this project, I leveraged AI tools to accelerate development:

- **Claude AI** helped with architecture design and code generation
- **Cursor** provided intelligent code completion

Every AI-generated output was reviewed and refined to ensure correctness.

This allowed me to focus on solving the core problem while AI handled boilerplate."

---

## 🎬 OUTRO (30 seconds)

> *[Screen: Dashboard or landing page]*

**SCRIPT:**
"To summarize, this system provides:
- End-to-end mission planning and execution
- Real-time monitoring with WebSocket telemetry
- A robust state machine for safety
- Comprehensive reporting for insights

The codebase is modular, well-documented, and designed for future extensibility.

Thank you for watching. I'm excited about the opportunity to bring this kind of innovation to FlytBase."

---

## 📝 RECORDING TIPS

1. **Prep Work:**
   - Have a mission already created in READY state
   - Ensure 1-2 completed missions exist for reports
   - Set backend telemetry interval to 1000ms for faster demo

2. **Screen Recording:**
   - Use 1920x1080 resolution
   - Hide browser bookmarks bar
   - Use a clean browser profile

3. **Audio:**
   - Record in a quiet space
   - Speak slowly and clearly
   - Pause between sections

4. **Post-Production:**
   - Add subtle background music (low volume)
   - Include section titles as overlays
   - Trim pauses but keep it natural

---

**Total Time: ~6 minutes**
