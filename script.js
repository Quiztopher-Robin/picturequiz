// Data for all 12 pictures and their answers
const quizData = [
  { filename: "Image/TV1Q1234.jpg", answer: "sunflower" },
  { filename: "Image/TV1Q1235.jpg", answer: "rose" },
  { filename: "Image/TV1Q1236.jpg", answer: "tulip" },
  { filename: "Image/TV1Q1237.jpg", answer: "daisy" },
  { filename: "Image/TV1Q1238.jpg", answer: "lily" },
  { filename: "Image/TV1Q1239.jpg", answer: "orchid" },
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
