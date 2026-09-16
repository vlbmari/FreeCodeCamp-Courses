interface FlashCard {
  questionText: string;
  questionAnswer: string;
}
class InvalidUserInputError extends Error {}
const currentCards: FlashCard[] = [
  {
    questionText: "What is TypeScript?",
    questionAnswer: "A superset of JavaScript."
  },
  {
    questionText: "What is HTML?",
    questionAnswer: "A markup language."
  }
];

const flashcard = document.getElementById("flashcard") as HTMLElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const entryForm = document.getElementById("entry-form") as HTMLFormElement;
const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;
const cardFront = document.querySelector(".card-front") as HTMLElement;
const cardBack = document.querySelector(".card-back") as HTMLElement;



function showCard(): void {
  const card = currentCards[currentCards.length - 1];
  if (!card) {
    cardFront.textContent = "";
    cardBack.textContent = "";
    return;
  }
  cardFront.textContent = card.questionText;
  cardBack.textContent = card.questionAnswer;
}

flashcard.addEventListener("click", () => {
  flashcard.classList.add("flipped");

});

deleteBtn.addEventListener("click", () => {
  currentCards.pop();
  showCard();

});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = frontText.value;
  const answer = backText.value;

  if (question === "" || answer === "") {
    throw new InvalidUserInputError(
      "Question and answer cannot be empty."
    );

  }

  currentCards.push({
    questionText: question,
    questionAnswer: answer
  });

  frontText.value = "";
  backText.value = "";
  showCard();
});

showCard();

/*
-- HTML --

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flash Card Quiz App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="app-container">
    <div class="flashcard-panel">
      <div id="flashcard-body">
        <h1>Flash Card Quiz App</h1>
        <div class="flashcard-container">
          <div id="flashcard" class="flashcard">
            <div class="card-inner" id="current-card">
              <div class="card-front"></div>
              <div class="card-back"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="controls-panel">
      <h2>Manage Cards</h2>
      <div class="card-actions">
        <button id="delete-btn" type="button">
          Delete Card
        </button>
      </div>
      <hr>
      <h3>All Cards</h3>
      <div id="cards-list"></div>
      <hr>
      <h3>Add a New Card</h3>
      <form id="entry-form" class="entry-form">
        <textarea id="front-text"></textarea>
        <textarea id="back-text"></textarea>
        <button type="submit">
          Add Card
        </button>
      </form>
    </div>
  </main>
  <script src="index.ts"></script>
</body>
</html>


-- CSS --

:root {
  --bg-color: #0f172a;
  --surface-color: #1e293b;
  --text-color: #f8fafc;
  --border-color: #334155;
  --shadow-color: rgba(0, 0, 0, 0.3);
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Inter', system-ui, sans-serif;
}

.app-container {
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.flashcard-panel {
  flex: 2;
  width: 100%;
  max-width: 700px;
}


.flashcard:hover {
    transform: translateY(-5px);
}

.flashcard {
    height: 250px;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    font-size: 2rem;
    transition: transform 0.2s ease-in-out;
    margin-bottom: 0;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}

#flashcard-body {
  background-color: var(--surface-color);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  height: 500px;
  box-shadow: 0 10px 30px var(--shadow-color);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.flashcard-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  perspective: 1000px;
}

.controls-panel {
  flex: 1;
  width: 100%;
  max-width: 700px;
  background-color: var(--surface-color);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px var(--shadow-color);
  border: 1px solid var(--border-color);
}

.card-actions {
  display: flex;
  gap: 1rem;
}

hr {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 2rem 0;
}

#cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.entry-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .app-container {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  #flashcard-body {
    height: auto;
    min-height: 400px;
  }
}

.flashcard.flipped {
  transform: rotateY(180deg);
}


.entry-form textarea,
.entry-form input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
}

.entry-form textarea:focus,
.entry-form input:focus {
  border-color: #6366f1;
}


button {
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  transition: all 0.2s ease;
}

button:hover {
  background-color: #334155;
  transform: translateY(-1px);
}

.entry-form button[type="submit"] {
  background-color: #4f46e5;
  border-color: #6366f1;
}

.entry-form button[type="submit"]:hover {
  background-color: #4338ca;
}

#delete-btn {
  background-color: #dc2626;
  border-color: #ef4444;
}

#delete-btn:hover {
  background-color: #b91c1c;
}



*/
