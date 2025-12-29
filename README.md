# Job Board & Simple Scheduler  
### (SunnyRoute-flavored Mini Project)

> A step-by-step learning workbook for building data-driven UIs  
> using Vanilla JavaScript before introducing frameworks.

---

## Project Goal

Build a small “Job Board & Scheduler” that models real SunnyRoute-style work:

- recurring service jobs
- filtering by service and status
- marking jobs as completed
- creating new jobs via a form
- rendering UI purely from data

The goal is **correct mental models**, not speed.

---

## Core Learning Rules (Apply Everywhere)

1. Data is the source of truth  
2. UI is a reflection of data  
3. Events update data, not the DOM  
4. Re-rendering is intentional and cheap  
5. Structure comes before features  

These rules mirror React — without React.

---

# STAGE 1 — CORE FOUNDATIONS (READ-ONLY DATA)

---

## PART 1 — Data & Initial Render

### Objective
Learn to render a UI entirely from data.

### What you build
- A hardcoded list of jobs rendered to the page

### Data model (in-memory)
Each job includes:

- `id: number`
- `customerName: string`
- `address: string`
- `services: string[]`
- `servicesDurationMinutes: number`
- `subscriptionType: string`
- `subscriptionStatus: string`
- `frequency: string`
- `scheduledDate: string (YYYY-MM-DD)`
- `lastCompletedDate: string | null`

### What you’ll practice
- Arrays of objects
- Single source of truth
- Rendering lists from data
- Basic DOM creation (`createElement`, `innerHTML`)

---

## PART 2 — Structure & Hygiene

### Objective
Learn how to organize non-trivial JS files so they scale.

### What you refactor
Split the file into clearly labeled sections:

- CONFIG / CONSTANTS
- DATA (in-memory database)
- PURE HELPERS (no DOM, no state)
- STATE MUTATION FUNCTIONS
- RENDER FUNCTIONS (DOM only)
- FILTERING / INTERACTION LOGIC
- STARTUP / BOOTSTRAP

### What you’ll practice
- Separation of concerns
- Pure vs impure functions
- Readability over cleverness
- Correct use of `const` vs `let`

---

## PART 3 — Filtering (Derived Data)

### Objective
Learn to derive views from existing state.

### What you add
- Status filter dropdown
- Service type filter dropdown

### Behavior
- Filters read values from the DOM
- Jobs are filtered using array methods
- Filtered results are passed into the render function

### What you’ll practice
- `filter`
- Chaining transformations
- Derived data vs stored data
- Re-rendering based on filters

---

## PART 4 — Basic Interaction (Mark as Done)

### Objective
Learn how user actions update data and re-render UI.

### What you add
- A “Mark as Done” button for each job
- Completion state shown in the UI

### Behavior
- Clicking the button:
  - Identifies the job via `data-id`
  - Updates job data (`lastCompletedDate`)
  - Re-renders using current filters
- Completed jobs:
  - Show completion status
  - Have their button disabled

### What you’ll practice
- Event delegation (single listener on list)
- `data-*` attributes and `dataset`
- `closest("button")`
- Immutable updates (`map` + object spread)
- Event → data update → re-render loop

---

## End of Stage 1 — Mental Model

```

User action
↓
Event handler
↓
Update data
↓
Derive view
↓
Render UI

```

You now understand the core loop behind React.

---

# STAGE 2 — JOB CREATION FORM (Vanilla JS)

---

## PART 1 — HTML Form Setup

### Objective
Learn how forms fit into a data-driven system.

### What you build
An HTML form with inputs for:

- `customerName`
- `address`
- `services` (checkboxes or select)
- `scheduledDate`

### What you’ll practice
- HTML forms
- Input naming and structure
- Thinking about data shape before code

---

## PART 2 — Form Submission & State Update

### Objective
Create new jobs from user input.

### Behavior
On submit:

- `preventDefault()`
- Read values from inputs
- Create a new job object:
  - generate `id`
  - `lastCompletedDate = null`
  - default `subscriptionStatus = "Pending"`
- Add job to `jobs` array (immutably)
- Re-render job list

### What you’ll practice
- Form events
- Reading input values
- Creating objects from user input
- Updating state + UI

---

## PART 3 — Basic Validation (UX Only)

### Objective
Improve user experience without overengineering.

### What you add
- Required field checks
- Simple error messages
- Prevent submission if invalid

### What you’ll practice
- Validation logic
- Guard clauses
- UX feedback without DOM state leaks

---

# STAGE 3 — PERSISTENCE (BROWSER STORAGE)

---

## PART 1 — Saving to localStorage

### Objective
Make state survive page reloads.

### What you add
- Save `jobs` to `localStorage` after changes

### What you’ll practice
- `JSON.stringify`
- Side effects tied to state changes

---

## PART 2 — Loading on Startup

### Objective
Hydrate state when the app loads.

### What you add
- Load jobs from `localStorage` on startup
- Fall back to defaults if empty

### What you’ll practice
- Defensive programming
- Bootstrapping state

---

# STAGE 4 — FRAMEWORK MIGRATION (FUTURE)

*(Same logic, new tools)*

- Convert render logic to React
- Replace `jobs` with `useState`
- Keep helpers pure
- Introduce TypeScript types
- Notice how little logic changes

---

## Final Outcome

By completing this workbook:

- You understand frontend state deeply
- You can pause and resume learning cleanly
- You won’t fight React later
- You build confidence through correctness

This is not a demo project.  
It’s a **mental-model project**.
