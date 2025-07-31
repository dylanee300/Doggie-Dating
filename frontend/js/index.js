let currentCard = 1;
const totalCards = 10;

function showNextCard() {
  const current = document.getElementById(`main-card${currentCard}`);
  if (!current) return;

  current.classList.add("fade-out");
  
  current.addEventListener("animationend", () => {
    current.classList.remove("fade-out");
    current.style.display = "none";

    if (currentCard < totalCards) {
      currentCard++;
      const next = document.getElementById(`main-card${currentCard}`);
      if (next) {
        next.style.display = "block";
        next.classList.add("fade-in");
        next.addEventListener("animationend", () => {
          next.classList.remove("fade-in");
        }, { once: true });
      }
    } else {
      const nextBtn = document.getElementById("no");
      const redoBtn = document.getElementById("redo");
      const results = document.getElementById("results");
      if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.display = "none";
      }
      if (redoBtn) {
        redoBtn.style.display = "block";
      }
      if (results) {
        results.style.display = "block";
      }
    }
  }, { once: true });
}

document.getElementById("main-card1").style.display = "block";

document.getElementById("no")?.addEventListener("click", showNextCard);

document.querySelectorAll(".btn-yes, .btn-no").forEach((button) => {
  button.addEventListener("click", showNextCard);
});

document.getElementById("redo")?.addEventListener("click", () => {
  for (let i = 1; i <= totalCards; i++) {
    const card = document.getElementById(`main-card${i}`);
    if (card) card.style.display = "none";
  }

  currentCard = 1;
  const firstCard = document.getElementById("main-card1");
  if (firstCard) {
    firstCard.style.display = "block";
    firstCard.classList.add("fade-in");
    firstCard.addEventListener("animationend", () => {
      firstCard.classList.remove("fade-in");
    }, { once: true });
  }

  const nextBtn = document.getElementById("no");
  const redoBtn = document.getElementById("redo");
  const results = document.getElementById("results");
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.style.display = "block";
  }
  if (redoBtn) {
    redoBtn.style.display = "none";
  }
  if (results) {
    results.style.display = "none";
  }
});
