# Python Quiz

A self-contained single-page quiz app for testing Python knowledge. Built with
plain HTML, CSS, and JavaScript — no frameworks, no build step, no backend.

## Features

- Pick a session length (10 / 20 / 50 / all questions), drawn randomly.
- **Instant feedback** — each answer is graded immediately, with the correct
  option highlighted and a "Learn more" link when a reference is available.
- Live score and progress bar.
- End-of-quiz results with a review of every question you missed.
- Theme-aware (light/dark), responsive, keyboard-friendly (`Enter` to advance).

## Running it locally

Just open `index.html` in any browser — double-click it, or:

```bash
open index.html          # macOS
```

No server required. All assets are loaded via relative paths, and the questions
are bundled locally in `questions.js`, so it works entirely offline.

## Files

| File           | Purpose                                            |
| -------------- | -------------------------------------------------- |
| `index.html`   | Page markup (start / quiz / results screens).      |
| `styles.css`   | Styling, including light/dark theming.             |
| `app.js`       | Quiz engine (state, rendering, scoring).           |
| `questions.js` | Bundled question data (`window.QUIZ_DATA`).        |


## Adding your own questions

Questions live in `questions.js` as a single array assigned to
`window.QUIZ_DATA`. To add one, append an object to that array:

```js
{
  "id": 226,                          // any unique number; use the next one up
  "question": "What does `len()` return for a dict?",
  "options": [
    { "text": "The number of keys",   "correct": true  },
    { "text": "The number of values", "correct": false },
    { "text": "Always 0",             "correct": false },
    { "text": "A KeyError",           "correct": false }
  ],
  "reference": "https://docs.python.org/3/library/functions.html#len"
}
```

A few rules the app relies on:

- **Exactly one** option must have `"correct": true`.
- You can have **two or more** options (not limited to four).
- `"reference"` is a URL that shows a "Learn more" link after answering, or
  `null` for none.
- `"question"` and each option `"text"` support code formatting: inline with
  single backticks (`` `len()` ``) and multi-line fenced blocks with triple
  backticks. Everything is HTML-escaped before rendering, so it is safe.
- Keep the file valid JavaScript: separate objects with commas and don't leave
  a trailing comma after the last one.

Save the file and refresh the browser — there is no build step.

## Credit
The questions are adapted from the community-maintained repository
[**Ebazhanov/linkedin-skill-assessments-quizzes**](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes)
(`python/python-quiz.md`). All credit for the quiz content goes to the original
authors and contributors of that project. This app only reformats their
questions into an interactive interface.

`questions.js` is generated from that source; do not edit it by hand.
