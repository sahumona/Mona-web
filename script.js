// ============ QUIZ LOGIC ============
let questions = [];
let index = 0;
let answers = [];
let timer = null;
let seconds = 0;

function startQuiz(type) {
  if (type === "gk") questions = [...gkQuestions];
  else if (type === "gs") questions = [...gsQuestions];
  else questions = [...mathQuestions];

  index = 0;
  answers = new Array(questions.length).fill(null);
  seconds = 0;

  showScreen("quiz");
  startTimer();
  render();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `⏱ ${m}:${s}`;
  }, 1000);
}

function render() {
  const q = questions[index];

  document.getElementById("qnum").textContent = `Q ${index + 1} / ${questions.length}`;
  document.getElementById("fill").style.width = `${((index + 1) / questions.length) * 100}%`;
  document.getElementById("question").textContent = `${index + 1}. ${q.q}`;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    if (answers[index] === i) btn.classList.add("selected");
    btn.onclick = () => {
      answers[index] = i;
      render();
    };
    box.appendChild(btn);
  });

  document.querySelector(".btns button:nth-child(1)").disabled = index === 0;

  const nextBtn = document.querySelector(".btns button:nth-child(2)");
  nextBtn.textContent = index === questions.length - 1 ? "Last" : "Next ➡";
}

function next() {
  if (index < questions.length - 1) {
    index++;
    render();
  }
}

function prev() {
  if (index > 0) {
    index--;
    render();
  }
}

function submitQuiz() {
  const skipped = answers.filter(a => a === null).length;
  if (skipped > 0) {
    if (!confirm(`${skipped} question(s) attempt nahi kiye. Submit karein?`)) return;
  }

  clearInterval(timer);

  let correct = 0, wrong = 0, skip = 0;

  questions.forEach((q, i) => {
    if (answers[i] === null) skip++;
    else if (answers[i] === q.answer) correct++;
    else wrong++;
  });

  const total = questions.length;
  const percent = Math.round((correct / total) * 100);

  document.getElementById("score").textContent = `${correct}/${total}`;
  document.getElementById("c").textContent = correct;
  document.getElementById("w").textContent = wrong;
  document.getElementById("s").textContent = skip;

  let msg = "";
  if (percent >= 90) msg = "🌟 Outstanding!";
  else if (percent >= 70) msg = "👏 Excellent!";
  else if (percent >= 50) msg = "👍 Good! Practice more.";
  else if (percent >= 30) msg = "📚 Average. Keep trying!";
  else msg = "💪 Practice makes perfect!";

  document.getElementById("msg").textContent = `${percent}% — ${msg}`;

  showScreen("result");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0 });
}
