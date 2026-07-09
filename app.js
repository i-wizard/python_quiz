/*
 * Python Quiz engine — vanilla JS, no dependencies.
 * Reads questions from window.QUIZ_DATA (see questions.js).
 */
(function () {
  "use strict";

  var ALL_QUESTIONS = Array.isArray(window.QUIZ_DATA) ? window.QUIZ_DATA : [];
  var LENGTH_CHOICES = [10, 20, 50, "All"];

  // --- Session state -------------------------------------------------------
  var state = {
    questions: [], // questions for this session (shuffled, options shuffled)
    index: 0,
    score: 0,
    selectedLength: 10,
    misses: [], // {question, correctText} for the results review
    answered: false,
  };

  // --- Element references ---------------------------------------------------
  var el = {
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultsScreen: document.getElementById("results-screen"),
    totalCount: document.getElementById("total-count"),
    lengthOptions: document.getElementById("length-options"),
    startBtn: document.getElementById("start-btn"),
    progressLabel: document.getElementById("progress-label"),
    scoreLabel: document.getElementById("score-label"),
    progressFill: document.getElementById("progress-fill"),
    questionText: document.getElementById("question-text"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    nextBtn: document.getElementById("next-btn"),
    quitBtn: document.getElementById("quit-btn"),
    resultFraction: document.getElementById("result-fraction"),
    resultPercent: document.getElementById("result-percent"),
    resultMessage: document.getElementById("result-message"),
    review: document.getElementById("review"),
    restartBtn: document.getElementById("restart-btn"),
  };

  // --- Helpers --------------------------------------------------------------

  /** Fisher-Yates shuffle (returns a new array). */
  function shuffle(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * Minimal, safe markdown renderer for the subset used by the quiz content:
   * escapes all HTML first, then converts fenced ``` blocks to <pre><code>
   * and inline `code` to <code>. Nothing else is interpreted, so untrusted
   * markup can never reach the DOM.
   */
  function renderMarkdown(raw) {
    var text = raw == null ? "" : String(raw);
    var parts = text.split(/```/);
    var html = "";
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {
        // Inside a fenced block: drop an optional language hint on line 1.
        var block = parts[i].replace(/^[^\n]*\n/, "");
        html += "<pre><code>" + escapeHtml(block.replace(/\n$/, "")) + "</code></pre>";
      } else {
        var segment = escapeHtml(parts[i]);
        segment = segment.replace(/`([^`]+)`/g, "<code>$1</code>");
        segment = segment.replace(/\n/g, "<br />");
        html += segment;
      }
    }
    return html;
  }

  function show(screen) {
    el.startScreen.classList.add("hidden");
    el.quizScreen.classList.add("hidden");
    el.resultsScreen.classList.add("hidden");
    screen.classList.remove("hidden");
  }

  // --- Start screen ---------------------------------------------------------

  function buildLengthOptions() {
    el.totalCount.textContent = String(ALL_QUESTIONS.length);
    el.lengthOptions.innerHTML = "";

    LENGTH_CHOICES.forEach(function (choice) {
      var value = choice === "All" ? ALL_QUESTIONS.length : choice;
      // Skip numeric choices larger than the pool (e.g. 50 when only 30 exist).
      if (choice !== "All" && value > ALL_QUESTIONS.length) {
        return;
      }
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "length-option";
      btn.textContent = String(choice);
      btn.setAttribute("role", "radio");
      btn.dataset.value = String(value);
      btn.addEventListener("click", function () {
        state.selectedLength = value;
        Array.prototype.forEach.call(
          el.lengthOptions.children,
          function (child) {
            child.classList.remove("selected");
            child.setAttribute("aria-checked", "false");
          }
        );
        btn.classList.add("selected");
        btn.setAttribute("aria-checked", "true");
      });
      el.lengthOptions.appendChild(btn);
    });

    // Default selection: first available choice.
    var first = el.lengthOptions.querySelector(".length-option");
    if (first) {
      first.click();
    }
  }

  // --- Quiz flow ------------------------------------------------------------

  function startQuiz() {
    if (!ALL_QUESTIONS.length) {
      return;
    }
    var pool = shuffle(ALL_QUESTIONS).slice(0, state.selectedLength);
    state.questions = pool.map(function (q) {
      return {
        question: q.question,
        reference: q.reference,
        options: shuffle(q.options),
      };
    });
    state.index = 0;
    state.score = 0;
    state.misses = [];
    show(el.quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    var q = state.questions[state.index];
    state.answered = false;

    var total = state.questions.length;
    el.progressLabel.textContent =
      "Question " + (state.index + 1) + " of " + total;
    el.scoreLabel.textContent = "Score: " + state.score;
    el.progressFill.style.width = (state.index / total) * 100 + "%";
    el.questionText.innerHTML = renderMarkdown(q.question);
    el.feedback.innerHTML = "";
    el.nextBtn.classList.add("hidden");
    el.nextBtn.textContent =
      state.index === total - 1 ? "See results" : "Next";

    el.options.innerHTML = "";
    q.options.forEach(function (option) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.innerHTML = renderMarkdown(option.text);
      btn.addEventListener("click", function () {
        selectAnswer(option, btn);
      });
      el.options.appendChild(btn);
    });
  }

  function selectAnswer(option, btn) {
    if (state.answered) {
      return;
    }
    state.answered = true;
    var q = state.questions[state.index];
    var correctText = "";

    // Lock every option and reveal correctness.
    Array.prototype.forEach.call(el.options.children, function (child, i) {
      child.disabled = true;
      var opt = q.options[i];
      if (opt.correct) {
        child.classList.add("correct");
        correctText = opt.text;
      }
    });

    if (option.correct) {
      state.score += 1;
      el.scoreLabel.textContent = "Score: " + state.score;
      el.feedback.innerHTML = '<span class="verdict-correct">Correct!</span>';
    } else {
      btn.classList.add("wrong");
      el.feedback.innerHTML =
        '<span class="verdict-wrong">Not quite.</span> Correct answer: ' +
        renderMarkdown(correctText);
      state.misses.push({ question: q.question, correctText: correctText });
    }

    if (q.reference) {
      el.feedback.innerHTML +=
        ' &middot; <a href="' +
        escapeHtml(q.reference) +
        '" target="_blank" rel="noopener noreferrer">Learn more</a>';
    }

    el.nextBtn.classList.remove("hidden");
    el.nextBtn.focus();
  }

  function nextQuestion() {
    if (!state.answered) {
      return;
    }
    if (state.index < state.questions.length - 1) {
      state.index += 1;
      renderQuestion();
    } else {
      showResults();
    }
  }

  // --- Results --------------------------------------------------------------

  function showResults() {
    var total = state.questions.length;
    var percent = total ? Math.round((state.score / total) * 100) : 0;
    el.resultFraction.textContent = state.score + " / " + total;
    el.resultPercent.textContent = percent + "%";
    el.resultMessage.textContent = resultMessage(percent);

    el.review.innerHTML = "";
    if (!state.misses.length) {
      var perfect = document.createElement("p");
      perfect.className = "review-empty";
      perfect.textContent = "Flawless — you missed nothing. 🎉";
      el.review.appendChild(perfect);
    } else {
      state.misses.forEach(function (miss) {
        var item = document.createElement("div");
        item.className = "review-item";
        var q = document.createElement("div");
        q.className = "review-q";
        q.innerHTML = renderMarkdown(miss.question);
        var a = document.createElement("div");
        a.className = "review-a";
        a.innerHTML =
          'Correct answer: <span class="answer">' +
          renderMarkdown(miss.correctText) +
          "</span>";
        item.appendChild(q);
        item.appendChild(a);
        el.review.appendChild(item);
      });
    }

    show(el.resultsScreen);
  }

  function resultMessage(percent) {
    if (percent === 100) return "Perfect score!";
    if (percent >= 80) return "Great work.";
    if (percent >= 60) return "Solid — keep going.";
    if (percent >= 40) return "Getting there.";
    return "Keep practicing.";
  }

  // --- Wiring ---------------------------------------------------------------

  el.startBtn.addEventListener("click", startQuiz);
  el.nextBtn.addEventListener("click", nextQuestion);
  el.restartBtn.addEventListener("click", function () {
    show(el.startScreen);
  });
  el.quitBtn.addEventListener("click", function () {
    show(el.startScreen);
  });

  // Enter advances once a question has been answered.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !el.quizScreen.classList.contains("hidden")) {
      if (state.answered) {
        nextQuestion();
      }
    }
  });

  // --- Init -----------------------------------------------------------------

  if (!ALL_QUESTIONS.length) {
    el.startBtn.disabled = true;
    el.subtitleFallback =
      "Could not load questions. Make sure questions.js is present.";
    document.querySelector(".subtitle").textContent = el.subtitleFallback;
  } else {
    buildLengthOptions();
  }
})();
