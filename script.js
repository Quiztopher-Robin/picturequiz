// Data for all 12 pictures and their answers
const quizData = [
  { filename: "Image/TV1Q1.jpg", answer: "Top Of The Pops" },
  { filename: "Image/TV1Q2.jpg", answer: "Holby City" },
  { filename: "Image/TV1Q3.jpg", answer: "Panorama" },
  { filename: "Image/TV1Q4.jpg", answer: "Crossroads" },
  { filename: "Image/TV1Q5.jpg", answer: "Question Time" },
  { filename: "Image/TV1Q6.jpg", answer: "Eggheads" },
  { filename: "Image/TV1Q1240.jpg", answer: "marigold" },
  { filename: "Image/TV1Q1241.jpg", answer: "lavender" },
  { filename: "Image/TV1Q1242.jpg", answer: "jasmine" },
  { filename: "Image/TV1Q1243.jpg", answer: "peony" },
  { filename: "Image/TV1Q1244.jpg", answer: "violet" },
  { filename: "Image/TV1Q1245.jpg", answer: "daffodil" },
];

const container = document.querySelector(".grid-container");

quizData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "grid-item";
  div.innerHTML = `
    <img src="${item.filename}" alt="Quiz Image ${index + 1}" />
    <input type="text" id="input-${index}" placeholder="Your answer" />
    <button onclick="checkAnswer(${index})">Submit</button>
    <p id="feedback-${index}" class="feedback"></p>
  `;
  container.appendChild(div);
});

function checkAnswer(index) {
  const input = document.getElementById(`input-${index}`);
  const feedback = document.getElementById(`feedback-${index}`);
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = quizData[index].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect. Try again!";
    feedback.style.color = "red";
  }
}
