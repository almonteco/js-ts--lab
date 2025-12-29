# Job Board & Simple Scheduler  
### (SunnyRoute-flavored Mini Project)

> A data-first, framework-free project to learn how real frontend systems work  
> before introducing React, TypeScript, or backend complexity.

---

## Project Goal

Build a small “Job Board & Scheduler” that models real SunnyRoute-style work:
- recurring service jobs
- filtering by service and status
- marking jobs as completed
- rendering UI purely from data

The focus is **thinking correctly**, not building features quickly.

---

## Learning Philosophy

This project is built using these rules:

1. **Data is the source of truth**
2. **UI is a pure reflection of data**
3. **Events update data, not the DOM**
4. **Re-rendering is cheap and intentional**
5. **Structure comes before features**

This mirrors how React works — without React.

---

# STAGE 1 — CORE FOUNDATIONS

## PART 1 — Data & Initial Render

### What you build
- A hardcoded list of jobs rendered to the page

### Data model (in-memory)
Each job contains:

- `id: number`
- `customerName: string`
- `address: string`
- `services: string[]`  
  (e.g. `"Mowing"`, `"Bushes"`, `"Trees"`)
- `servicesDurationMinutes: number`
- `subscriptionType: string`
- `subscriptionStatus: string`
- `frequency: string`
- `scheduledDate: string (YYYY-MM-DD)`
- `lastCompletedDate: string | null`

### Concepts practiced
- Arrays of objects
- Single source of truth
- Rendering lists from data
- Basic DOM creation (`createElement`, `innerHTML`)

---

## PART 2 — Structure & Hygiene

### What you refactor
Organize the file into clear sections:

- CONFIG / CONSTANTS
- DATA (in-memory database)
- PURE HELPERS (no DOM, no state)
- STATE MUTATION FUNCTIONS
- RENDER FUNCTIONS (DOM only)
- FILTERING / INTERACTION LOGIC
- STARTUP / BOOTSTRAP

### Concepts practiced
- Separation of concerns
- Pure vs impure functions
- Readability and maintainability
- Proper use of `const` vs `let`

---

## PART 3 — Filtering

### What you add
- Status filter dropdown
- Service type filter dropdown

### Behavior
- Filters read values from the DOM
- Jobs are filtered using array methods
- Filtered jobs are passed into the render function

### Concepts practiced
- `filter`
- Chaining data transformations
- Derived data vs stored state
- Re-rendering based on filters

---

## PART 4 — Basic Interaction (Mark as Done)

### What you add
- A **“Mark as Done”** button for each job
- Completion status shown in the UI

### Behavior
- Clicking the button:
  - Identifies the job using `data-id`
  - Updates job data (`lastCompletedDate`)
  - Re-renders using current filters
- Completed jobs:
  - Show a completion indicator
  - Have their button disabled

### Concepts practiced
- Event delegation (single listener on the list)
- `data-*` attributes and `dataset`
- `closest("button")`
- Immutable state updates (`map` + object spread)
- Event → data update → re-render loop
- UI as a pure reflection of state

---

## End-of-Stage Mental Model

```

User action
↓
Event handler
↓
Update data
↓
Derive new view
↓
Render UI

```

This is the exact mental model used by React and modern frontend frameworks.

---

# STAGE 2 — PERSISTENCE & REALISM (NEXT)

*(Planned, not yet built)*

- Save jobs to `localStorage`
- Load jobs on page refresh
- Separate “completed” vs “scheduled” views
- Prepare data shape for backend storage

---

# STAGE 3 — FRAMEWORK MIGRATION (FUTURE)

*(Same logic, new tools)*

- Convert render logic to React
- Replace `jobs` with `useState`
- Introduce TypeScript types
- Keep the same data-first structure

---

## Project Outcome

By completing this project as structured:

- You understand frontend state deeply
- You can debug UI bugs logically
- You won’t “fight” React later
- You build confidence through correctness, not magic

This is not a toy project — it’s a **foundation project**.
