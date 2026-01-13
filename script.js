const btn = document.getElementById('askBtn');
const questionInput = document.getElementById('question');
const responseDiv = document.getElementById('response');

btn.addEventListener('click', () => {
  const question = questionInput.value.trim();
  if (!question) return alert('Please ask a question!');

  // TEMP: Fake AI response
  responseDiv.innerText = "Thinking... 🤔\nAI says: " + question.split('').reverse().join('');
});
