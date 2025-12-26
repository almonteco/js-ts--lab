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
- No backend at first (just in-memory arrays, then localStorage)


STAGE 1 — BASIC JOB LIST (JavaScript only)
------------------------------------------------
Objective:
Get comfortable with JavaScript fundamentals and DOM manipulation.

Features:
1. Hardcode an array of job objects in a JS file, e.g.:
   - id
   - customerName
   - jobType (e.g., "Mowing", "Clean-up", "Pavers")
   - address (string for now)
   - status ("Pending", "In Progress", "Done")
   - scheduledDate (string like "2025-01-10")

2. On page load:
   - Render all jobs into an HTML list or table.
   - Each row shows customerName, jobType, status, scheduledDate.

3. Filters:
   - Add a dropdown to filter jobs by:
     - status
     - jobType
   - When user changes the dropdown, update the displayed list.

4. Basic interactions:
   - Add a button on each job: [Mark as Done]
   - Clicking it updates the job’s status in your JS array and re-renders the list.

What you’ll practice:
- Arrays, objects
- forEach / map / filter
- Basic DOM manipulation (querySelector, addEventListener, innerHTML)
- Thinking in “data first, then UI”


STAGE 2 — JOB CREATION FORM (JavaScript + DOM)
------------------------------------------------
Objective:
Practice working with forms, events, and validation.

Features:
1. Add a simple HTML form:
   - customerName (text)
   - jobType (dropdown)
   - address (text)
   - scheduledDate (date input)
2. On submit:
   - Prevent page reload.
   - Create a new job object with status = "Pending".
   - Add it to your jobs array and re-render the list.
3. Basic validation:
   - Required: customerName, jobType, scheduledDate.
   - If missing, show a simple error message.

What you’ll practice:
- Form handling (submit event, preventDefault)
- Simple validation logic
- Updating arrays and re-rendering


STAGE 3 — LOCALSTORAGE PERSISTENCE (JavaScript)
------------------------------------------------
Objective:
Introduce basic “fake database” using localStorage.

Features:
1. When the jobs array changes:
   - Save the jobs array to localStorage as JSON.
2. On page load:
   - If localStorage has jobs, load them instead of hardcoding only.
3. Add a "Reset Data" button:
   - Clears localStorage and reloads default sample jobs.

What you’ll practice:
- JSON.stringify / JSON.parse
- State that survives refresh
- Thinking “app data lives somewhere”


STAGE 4 — TYPE ANNOTATIONS PLANNING (TS PREP, NO TS YET)
------------------------------------------------
Objective:
Prepare your brain for TypeScript by thinking in “types” while still writing JS.

Activities:
1. On paper or in comments, define what a Job looks like:
   Job {
     id: number;
     customerName: string;
     jobType: "Mowing" | "Clean-up" | "Pavers" | "Other";
     address: string;
     status: "Pending" | "In Progress" | "Done";
     scheduledDate: string;
   }

2. Go through your JS and:
   - Treat fields consistently.
   - Avoid “mystery” properties (no random job["foo"]).

Goal:
Be ready to translate this mental model into real TypeScript types.


STAGE 5 — (OPTIONAL) VANILLA TYPESCRIPT VERSION
------------------------------------------------
Objective:
If you want, rebuild the same app with plain TypeScript + DOM (no React yet).

Steps:
1. Set up a tiny TS project:
   - index.html
   - src/main.ts
   - tsconfig.json
2. Define:
   - type JobStatus
   - type JobType
   - interface Job
3. Port your JS logic to TS:
   - let jobs: Job[] = [];
   - function renderJobs(jobsToRender: Job[]): void { ... }
4. Compile with tsc and load the output JS in index.html.

This is optional because you’ll get even more TS practice in React later.


STAGE 6 — REACT VERSION (JAVASCRIPT)
------------------------------------------------
Objective:
Rebuild the same UI using React (JS only) to learn components and state.

Setup:
- Use Vite or Create React App with JavaScript template.

Features:
1. Components:
   - <App />
   - <JobList />
   - <JobFilters />
   - <JobForm />
2. Keep the same features as Stages 1–3:
   - Show list of jobs
   - Filter by status/jobType
   - Add new job via form
   - Mark job as done
   - (Optional) still use localStorage for persistence

What you’ll practice:
- React components
- props + state
- Controlled form inputs
- Lifting state up (App holds jobs array, children read/change it)


STAGE 7 — REACT + TYPESCRIPT VERSION
------------------------------------------------
Objective:
Upgrade your React app to use TypeScript for safer, clearer code.

Steps:
1. Create a new React+TS app (or convert the existing one):
   - Use Vite or CRA with TypeScript template.
2. Define types:
   - type JobStatus
   - type JobType
   - interface Job
3. Type your components:
   - type JobListProps = { jobs: Job[]; ... };
   - function JobList(props: JobListProps) { ... }
4. Fix TS errors as guidance:
   - Make sure you type state, props, and event handlers.

What you’ll practice:
- TS in a real UI
- Typing props & state
- Letting the compiler catch mistakes early


OPTIONAL VARIATION — FORENSOLEDGER FLAVOR
------------------------------------------------
Once you’re comfortable:

Create a parallel version where:
- “Jobs” become “Transactions”

Fields might be:
- id
- caseNumber
- payee (person or informant code)
- amount
- currency ("USD", "Cash App", "Crypto")
- direction ("Debit" | "Credit")
- status ("Pending Approval" | "Approved" | "Rejected")
- date

Use:
- same list rendering
- same filters
- same localStorage idea
- same React + TS patterns

This will feel very close to a future ForensoLedger frontend.


FOCUS GUIDANCE
------------------------------------------------
- Don’t worry about looking pretty; focus on **data + logic + components**.
- Use vanilla JS to understand DOM and core language.
- Use React to structure UI into components.
- Use TypeScript last to harden everything.

End result:
You’ll have:
- a vanilla JS app,
- a React JS app,
- and a React + TypeScript app

…all using the **same SunnyRoute-style domain model** you’re already building.