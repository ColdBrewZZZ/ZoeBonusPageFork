let healthAnswers = JSON.parse(localStorage.getItem("healthPageAnswers"));
let healthStatement = `Health: you will ${healthAnswers[0]}, you are ${healthAnswers[1]}, and you ${healthAnswers[2]}`;
document.querySelector('#health').textContent = healthStatement;