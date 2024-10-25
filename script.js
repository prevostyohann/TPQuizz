let json = {
    "quiz": {
      "q1": {
        "question": "Which one is correct team name in NBA?",
        "options": [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket"
        ],
        "answer": "Huston Rocket"
      },
      "q2": {
        "question": "'Namaste' is a traditional greeting in which Asian language?",
        "options": [
          "Hindi",
          "Mandarin",
          "Nepalese",
          "Thai"
        ],
        "answer": "Hindi"
      },
      "q3": {
        "question": "The Spree river flows through which major European capital city?",
        "options": [
          "Berlin",
          "Paris",
          "Rome",
          "London"
        ],
        "answer": "Berlin"
      },
      "q4": {
        "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
        "options": [
          "Pablo Picasso",
          "Vincent van Gogh",
          "Salvador Dalí",
          "Edgar Degas"
        ],
        "answer": "Pablo Picasso"
      }
    }
  }
  
  let quiz = document.getElementById("quiz");
let keyList = Object.keys(json.quiz);
for (let j = 0; j < keyList.length; j++) {
  let key = keyList[j];
  let questionItem = json.quiz[key];
  let html = "<div>";
  html += "<div><h2>Question " + (j + 1) + ": " + questionItem.question + "</h2></div>";
  html += "<div>";
  for (let i = 0; i < questionItem.options.length; i++) {
    html += "<div>";
    html += "<input type=\"radio\" name=\"" + key + "_option\"  value=\"" + questionItem.options[i] + "\">" + questionItem.options[i];
    html += "</div>";
  }
  html += "</div>";
  html += "</div>";
  
  quiz.innerHTML += html;
}
quiz.innerHTML +="<input type=\"submit\" value=\"submit\">";