# Clean Code Project Template (Vanilla JS → React → TypeScript)

This is a repeatable structure for **small-to-medium projects**.
Use it as a reference so every project stays clean, readable, and scalable.

---

## Folder Layout (Recommended)

```

project/
index.html
styles.css              (optional)
src/
config.js              # constants, enums
data.js                # sample data / in-memory “db”
utils.js               # pure helpers
state.js               # mutations (add/update/delete)
render.js              # DOM rendering only
events.js              # event handlers + wiring
main.js                # startup / bootstrap

````

> Start with one file if needed. Split when it gets crowded.

---

## One-File Layout (Single JS File)

Order your code **top to bottom** like this:

1. Config / Constants  
2. Data (in-memory database)  
3. Pure Helpers  
4. State Mutations  
5. Render Functions  
6. Events / Interactions  
7. Startup / Bootstrap

---

## Section Header Comments (Copy/Paste)

```js
// =====================================================
// CONFIG / CONSTANTS
// =====================================================

// =====================================================
// DATA (IN-MEMORY DATABASE)
// =====================================================

// =====================================================
// PURE HELPERS (NO DOM, NO STATE CHANGE)
// =====================================================

// =====================================================
// STATE MUTATIONS (CHANGE DATA ONLY)
// =====================================================

// =====================================================
// RENDER (DOM ONLY)
// =====================================================

// =====================================================
// EVENTS / INTERACTIONS
// =====================================================

// =====================================================
// STARTUP / BOOTSTRAP
// =====================================================
````

---

## Naming Conventions

### Variables

* arrays: `jobs`, `users`, `transactions`
* single item: `job`, `user`, `transaction`
* booleans: `isActive`, `hasErrors`
* DOM elements: `jobListEl`, `statusFilterEl`

### Functions (use verbs)

* `renderJobs(jobs)`
* `applyFilters()`
* `addJob(job)`
* `updateJobStatus(id, status)`
* `loadJobs()`
* `saveJobs(jobs)`

---

## Separation of Concerns (Golden Rules)

### Pure Helper

✅ Input → Output
❌ No DOM
❌ No data mutation

```js
function formatServices(services) {
  return services.join(", ");
}
```

---

### State Mutation

✅ Changes data
❌ No DOM
Render happens **after**

```js
function markVisitCompleted(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  job.lastCompletedDate = getTodayISO();
}
```

---

### Render Function

✅ DOM only
❌ No data changes
Accepts data as parameter

```js
function renderJobs(jobsToRender) {
  jobListEl.innerHTML = "";
  jobsToRender.forEach(job => {
    // build DOM here
  });
}
```

---

### Event Handler

✅ Reads user input
✅ Calls state mutation
✅ Triggers render

```js
function onFilterChange() {
  applyFilters();
}
```

---

## DOM Basics Cheat Sheet

### Find Elements

```js
document.getElementById("job-list");
document.querySelector("#job-list");
document.querySelectorAll("li");
```

### Create & Insert

```js
const li = document.createElement("li");
li.textContent = "Hello";
parent.appendChild(li);
```

### Clear

```js
jobListEl.innerHTML = "";
```

### Listen for Events

```js
el.addEventListener("click", handler);
el.addEventListener("change", handler);
form.addEventListener("submit", handler);
```

---

## Array Methods (The Big 4)

### forEach (do something)

```js
jobs.forEach(job => console.log(job));
```

### map (transform)

```js
const names = jobs.map(job => job.customerName);
```

### filter (keep some)

```js
const pending = jobs.filter(job => job.status === "Pending");
```

### find (get one)

```js
const job = jobs.find(j => j.id === 2);
```

---

## Template Strings (Common Mistake)

✅ Correct

```js
`${job.customerName} - ${job.servicesDurationMinutes} mins`
```

❌ Wrong

```js
{job.servicesDurationMinutes} mins
```

Rule:

* Backticks: ` `
* Variables: `${}`

---

## Startup Pattern (Avoid Null Errors)

Always wait for the DOM:

```js
document.addEventListener("DOMContentLoaded", () => {
  // cache DOM
  // initial render
  // add event listeners
});
```

---

## Cache DOM Elements (Cleaner)

```js
let jobListEl;
let statusFilterEl;

function cacheDom() {
  jobListEl = document.getElementById("job-list");
  statusFilterEl = document.getElementById("status-filter");
}
```

---

## Re-render Pattern (Key Habit)

When data changes:

1. update data
2. re-render

```js
renderJobs(jobs);
```

For filtered views:

```js
renderJobs(filteredJobs);
```

---

## Project Sanity Checklist

* [ ] HTML IDs match JS exactly (case-sensitive)
* [ ] Scripts run after DOM loads
* [ ] One render function per view
* [ ] Helpers are pure
* [ ] State mutation does not touch DOM
* [ ] Render does not mutate data
* [ ] Events call state → render

---

## Upgrade Path

Vanilla JS → React → React + TypeScript

The concepts stay the same:

* state
* render
* events update state
* UI reflects state

React just automates re-rendering.
