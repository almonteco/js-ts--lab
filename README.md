TITLE: "Job Board & Simple Scheduler" (SunnyRoute-flavored Mini Project)

GOAL:
Build a small, browser-based app using plain JavaScript (and later TypeScript)
to manage a list of "jobs" for a small contractor business. 
Think: super tiny, offline SunnyRoute prototype.

You’ll use:
- HTML + CSS for layout
- Vanilla JavaScript for logic
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
   - Render all jobs into an HTML table or card list.
   - Each row/card shows customerName, jobType, status, scheduledDate.

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

------------------------------------------------
STAGE 2 — JOB CREATION FORM
------------------------------------------------
Objective:
Practice working with forms, events, and validation.

Features:
1. Add a simple HTML form:
   - customerName (text)
   - jobType (dropdown with a few fixed options)
   - address (text)
   - scheduledDate (date input)
2. On submit:
   - Prevent page reload.
   - Create a new job object with status = "Pending".
   - Add it to your jobs array and re-render the list.
3. Basic validation:
   - Required fields: customerName, jobType, scheduledDate.
   - If missing, show a simple error message (e.g., below the form).

What you’ll practice:
- Form handling (submit event, preventDefault)
- Simple validation logic
- Updating arrays and re-rendering

------------------------------------------------
STAGE 3 — LOCALSTORAGE PERSISTENCE
------------------------------------------------
Objective:
Introduce basic “fake database” using the browser’s localStorage.

Features:
1. When the jobs array changes (job added, status changed, etc.):
   - Save the jobs array to localStorage as JSON.
2. On page load:
   - If localStorage has jobs, load them instead of hardcoding.
3. Add a simple "Reset Data" button:
   - Clears localStorage and reloads default sample jobs.

What you’ll practice:
- JSON.stringify / JSON.parse
- Thinking about “state” that survives page refresh

------------------------------------------------
STAGE 4 — TYPE ANNOTATIONS PLANNING (TS PREP, NO TS YET)
------------------------------------------------
Objective:
Prepare your brain for TypeScript by thinking in “types,” but you still write JS.

Activities (no new UI required):
1. On paper or in comments, define what a Job looks like:
   - Job {
       id: number;
       customerName: string;
       jobType: "Mowing" | "Clean-up" | "Pavers" | "Other";
       address: string;
       status: "Pending" | "In Progress" | "Done";
       scheduledDate: string; // later maybe a proper Date
     }
2. Go through your code and:
   - Make sure you always treat each field consistently.
   - Avoid “mystery objects” (e.g., avoid `job["random"]`).

This sets you up to translate everything into TypeScript later.

------------------------------------------------
STAGE 5 — MIGRATE TO TYPESCRIPT (SAME PROJECT)
------------------------------------------------
Objective:
Rebuild or refactor the same mini-project using TypeScript.

Steps:
1. Set up a super simple TypeScript build:
   - Create a small project folder with:
     - index.html
     - src/main.ts
     - tsconfig.json
   - Use a basic setup (no framework) so you focus on TS itself.

2. Define your Job type:
   - `type JobStatus = "Pending" | "In Progress" | "Done";`
   - `type JobType = "Mowing" | "Clean-up" | "Pavers" | "Other";`
   - `interface Job { ... }`

3. Convert your JS logic into TS:
   - Make your `jobs` array: `let jobs: Job[] = [];`
   - Type your functions: 
     - `function renderJobs(jobsToRender: Job[]): void { ... }`
     - `function addJob(job: Job): void { ... }`
   - Fix type errors as they appear (this is the learning gold).

4. Compile TS to JS:
   - Use `tsc` (TypeScript compiler) to output a `dist/main.js`.
   - Reference that JS file in your HTML.

What you’ll practice:
- Basic TypeScript types (string, number, union types, interfaces)
- Letting the compiler guide you to safer code
- Understanding the relationship between TS (source) and JS (output)

------------------------------------------------
OPTIONAL VARIATION — FORENSOLEDGER FLAVOR
------------------------------------------------
Once you’re comfortable, create a parallel version where:
- “Jobs” become “Transactions”
- Fields might be:
  - id
  - caseNumber
  - payee (person or informant code)
  - amount
  - currency (e.g., "USD", "Cash App", "Crypto")
  - direction ("Debit" | "Credit")
  - status ("Pending Approval" | "Approved" | "Rejected")
  - date

The same patterns (lists, filters, forms, localStorage, TS types) will apply
and later plug nicely into a real ForensoLedger backend.

------------------------------------------------
FOCUS GUIDANCE
------------------------------------------------
- Don’t worry about making it beautiful at first; focus on **data + logic**.
- Keep the HTML minimal; most of your learning is in JS/TS.
- Tiny steps:
  - Get "render jobs" working.
  - Then add filters.
  - Then add a form.
  - Then add localStorage.
  - Then migrate to TypeScript.

End result:
You’ll have a tiny SunnyRoute-style job manager built in:
- vanilla JavaScript first,
- then upgraded to TypeScript,
- and the same structure can later be reused for ForensoLedger-style transaction tracking.