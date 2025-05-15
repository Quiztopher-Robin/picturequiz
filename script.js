// Data for all 12 pictures and their answers
const quizData = [
  { filename: "Image/TV1Q1.jpg", answer: "Top Of The Pops" },
  { filename: "Image/TV1Q2.jpg", answer: "Holby City" },
  { filename: "Image/TV1Q3.jpg", answer: "Panorama" },
  { filename: "Image/TV1Q4.jpg", answer: "Crossroads" },
  { filename: "Image/TV1Q5.jpg", answer: "Question Time" },
  { filename: "Image/TV1Q6.jpg", answer: "Eggheads" },
  { filename: "Image/TV1Q7.jpg", answer: "The Wombles" },
  { filename: "Image/TV1Q8.jpg", answer: "QI" },
  { filename: "Image/TV1Q9.jpg", answer: "Peppa Pig" },
  { filename: "Image/TV1Q10.jpg", answer: "Ted Lasso" },
  { filename: "Image/TV1Q11.jpg", answer: "Sherlock" },
  { filename: "Image/TV1Q12.jpg", answer: "Homes Under The Hammer" },
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

function normalize(answer) {
  return answer
    .toLowerCase()
    .replace(/^the\s+/, "")  // remove 'the' at the start
    .trim();
}

function checkAnswer(index) {
  const input = document.getElementById(`input-${index}`);
  const feedback = document.getElementById(`feedback-${index}`);
  const userAnswer = normalize(input.value);
  const correctAnswer = normalize(quizData[index].answer);

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect. Try again!";
    feedback.style.color = "red";
  }
}
