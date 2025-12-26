TITLE: "Job Board & Simple Scheduler" (SunnyRoute-flavored Mini Project)

GOAL:
Build a small, browser-based app using:
- Vanilla JavaScript first
- Then React
- Then React with TypeScript

Use case: tiny offline SunnyRoute prototype.

You’ll use:
- HTML + CSS for layout
- Vanilla JavaScript for initial logic
- React for component-based UI
- TypeScript with React for safer, scalable code
- No backend at first (in-memory arrays → localStorage)
- Later: Node.js API + Postgres (security-first)

------------------------------------------------
STAGE 1 — BASIC JOB LIST (Vanilla JS)
------------------------------------------------
Objective:
Learn JavaScript fundamentals and DOM manipulation.

Features:
1. Hardcode an array of job objects:
   - id
   - customerName
   - jobType ("Mowing" | "Clean-up" | "Pavers")
   - address
   - status ("Pending" | "In Progress" | "Done")
   - scheduledDate (string)

2. On page load:
   - Render all jobs in a table or list.
   - Show customerName, jobType, status, scheduledDate.

3. Filters:
   - Dropdown filter by status
   - Dropdown filter by jobType
   - Re-render on change

4. Basic interaction:
   - [Mark as Done] button
   - Updates job status and re-renders

What you’ll practice:
- Arrays, objects
- map / filter / forEach
- querySelector / addEventListener
- Data-first thinking

------------------------------------------------
STAGE 1 — PART 2 (STRUCTURE & HYGIENE)
------------------------------------------------
Add:
- Single renderJobs(jobs) function
- No duplicated DOM logic
- Small utilities (formatDate, normalizeStatus)
- Clear separation:
  - data
  - render
  - event handlers

------------------------------------------------
STAGE 2 — JOB CREATION FORM (Vanilla JS)
------------------------------------------------
Objective:
Work with forms, events, and validation.

Features:
1. HTML form:
   - customerName
   - jobType
   - address
   - scheduledDate

2. On submit:
   - preventDefault()
   - Create new job (status = "Pending")
   - Push into jobs array
   - Re-render list

3. Basic validation (UX only):
   - Required fields
   - Simple error messages

What you’ll practice:
- Form events
- Validation logic
- Updating state + UI

------------------------------------------------
STAGE 3 — LOCALSTORAGE PERSISTENCE
------------------------------------------------
Objective:
Introduce persistent app state.

Features:
1. Save jobs to localStorage on change
2. Load jobs from localStorage on page load
3. "Reset Data" button

New habit:
- Use wrapper functions:
  - loadJobs()
  - saveJobs(jobs)

------------------------------------------------
STAGE 4 — TYPE PLANNING (TS PREP)
------------------------------------------------
Objective:
Think in types before writing TypeScript.

Define (in comments or notes):
Job {
  id: number;
  customerName: string;
  jobType: "Mowing" | "Clean-up" | "Pavers" | "Other";
  address: string;
  status: "Pending" | "In Progress" | "Done";
  scheduledDate: string;
}

Rules:
- No mystery properties
- Consistent field usage

------------------------------------------------
STAGE 5 — OPTIONAL VANILLA TYPESCRIPT
------------------------------------------------
Objective:
Practice TypeScript without React.

Setup:
- index.html
- src/main.ts
- tsconfig.json

Add:
- type JobStatus
- type JobType
- interface Job

Port logic from JS → TS
Compile with tsc

------------------------------------------------
STAGE 6 — REACT VERSION (JavaScript)
------------------------------------------------
Objective:
Learn component-based UI.

Setup:
- Vite or CRA (JavaScript template)

Components:
- App
- JobList
- JobFilters
- JobForm

Features:
- Same behavior as Stages 1–3
- localStorage persistence (optional)

New habit:
- jobService.js
  - getJobs()
  - createJob()
  - updateJob()
(Initially uses localStorage)

------------------------------------------------
STAGE 7 — REACT + TYPESCRIPT
------------------------------------------------
Objective:
Harden the app with TypeScript.

Setup:
- React + TS template

Add:
- Shared types folder (/src/types/job.ts)
- Typed props, state, and events

Fix compiler errors as guidance.

------------------------------------------------
STAGE 8 — NODE API (NO DB YET)
------------------------------------------------
Objective:
Learn backend fundamentals + security.

Stack:
- Node.js
- Express

Endpoints:
- GET /api/jobs
- POST /api/jobs
- PATCH /api/jobs/:id

Security from day one:
- Zod validation (reject unknown fields)
- Central error handler
- Helmet
- Rate limiting
- Locked CORS
- Request size limits

Storage:
- In-memory array on server

------------------------------------------------
STAGE 9 — AUTH + RBAC
------------------------------------------------
Objective:
Prevent broken access control.

Add:
- Cookie-based sessions (HttpOnly, Secure)
- Roles:
  - worker
  - manager
  - admin

Rules enforced server-side only.

------------------------------------------------
STAGE 10 — POSTGRES + PRISMA
------------------------------------------------
Objective:
Persist data safely.

Add:
- Postgres
- Prisma ORM
- Migrations

Security rules:
- DB not public
- Least-privileged DB user
- No raw SQL yet

------------------------------------------------
STAGE 11 — PRODUCTION HARDENING
------------------------------------------------
Add:
- Audit logging
- Stricter rate limits for auth
- Env-based secrets
- Dependency scanning

------------------------------------------------
STAGE 12 — DEPLOYMENT
------------------------------------------------
Frontend:
- Vercel / Netlify

Backend:
- Render / Fly / AWS

Database:
- Managed Postgres (Supabase / Neon / RDS)

Requirements:
- HTTPS only
- Secure cookies
- DB inaccessible from public internet

------------------------------------------------
OPTIONAL — FORENSOLEDGER FLAVOR
------------------------------------------------
Swap "Jobs" → "Transactions"
Reuse:
- UI patterns
- RBAC
- Validation
- API structure

END RESULT:
- Vanilla JS app
- React JS app
- React + TS app
- Secure Node + Postgres API
- Real SaaS-grade learning foundation