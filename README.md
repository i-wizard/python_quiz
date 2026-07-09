# Dev Quiz

A self-contained single-page quiz app for practicing across multiple stacks —
**Python, React, and Vanilla JavaScript**. Built with plain HTML, CSS, and
JavaScript — no frameworks, no build step, no backend.

## Features

- **Pick a stack** first (Python / React / JavaScript), then a session length
  (10 / 20 / 50 / all questions), drawn randomly.
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
are bundled locally, so it works entirely offline.

## Files

| File                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `index.html`              | Page markup (stack / length / quiz / results).      |
| `styles.css`              | Styling, including light/dark theming.              |
| `app.js`                  | Quiz engine (state, rendering, scoring).            |
| `questions-python.js`     | Python question bank.                               |
| `questions-react.js`      | React question bank.                                |
| `questions-javascript.js` | JavaScript question bank.                           |

Each `questions-*.js` file registers one **bank** onto a shared global,
`window.QUIZ_BANKS`.

## Adding questions (or a whole new stack)

Each bank file self-registers like this:

```js
window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS["python"] = {
  id: "python",
  name: "Python",
  icon: "🐍",
  questions: [
    {
      "id": 1,
      "question": "What does `len()` return for a dict?",
      "options": [
        { "text": "The number of keys",   "correct": true  },
        { "text": "The number of values", "correct": false },
        { "text": "Always 0",             "correct": false }
      ],
      "reference": "https://docs.python.org/3/library/functions.html#len"
    }
    // ...more questions
  ]
};
```

- **To add questions:** append objects to a bank's `questions` array.
- **To add a new stack:** create a `questions-<id>.js` file that registers a new
  bank, then add a matching `<script src="questions-<id>.js">` tag in
  `index.html` (before `app.js`). It appears automatically on the stack screen.

A few rules the app relies on:

- **Exactly one** option must have `"correct": true`.
- You can have **two or more** options.
- `"reference"` is a URL that shows a "Learn more" link after answering, or
  `null` for none.
- `"question"` and each option `"text"` support code formatting: inline with
  single backticks (`` `len()` ``) and multi-line fenced blocks with triple
  backticks. Everything is HTML-escaped before rendering, so it is safe.
- Keep the file valid JavaScript (commas between objects, no trailing comma).

Save and refresh the browser — there is no build step.


## License

This project is licensed under the
[Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/)
(CC BY-NC 4.0) — **free to use, share, and adapt for personal and educational
purposes**, with attribution and no commercial use. See the [LICENSE](LICENSE)
file for details.

## Credit

The questions are adapted from the community-maintained repository
[**Ebazhanov/linkedin-skill-assessments-quizzes**](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes)
(the `python`, `reactjs`, and `javascript` quizzes), which is distributed under
the MIT License. All credit for the quiz content goes to the original authors
and contributors of that project. This app only reformats their questions into
an interactive interface.

The bundled `questions-*.js` files are generated from that source.
