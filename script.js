// @ts-nocheck
function callApi() {
  const url = "index.json";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const affichage = document.getElementById("result");

      /* Parcourir chaque question du tableau json */
      data.questions.forEach((question) => {
        /*  élément HTML pour chaque question */

        const questionDiv = document.createElement("div");
        questionDiv.classList.add(
          "card",
          "mx-5",
          "container-fluid",
          "border-primary",
          "mb-3"
        );
        const lesQuestions = document.createElement("p");
        lesQuestions.textContent = question.question;
        const lesReponses = document.createElement("ul");

        question.answers.forEach((answer) => {
          const answerItem = document.createElement("li");
          answerItem.textContent = answer;
          lesReponses.appendChild(answerItem);
        });

        // @ts-ignore
        affichage.appendChild(lesQuestions);
        affichage.appendChild(lesReponses);
      });
      document.querySelectorAll;
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des données:", error);
    });
}

callApi();
document.addEventListener("DOMContentLoaded", function () {
  callApi();
});
