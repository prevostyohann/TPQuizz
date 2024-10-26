// Chemin vers votre fichier JSON
const jsonFile = "index.json";

function fetchAndDisplayJSON() {
  fetch(jsonFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const jsonContent = document.getElementById("dataDisplay");

      // Vider le contenu précédent
      /*  jsonContent.innerHTML = ""; */

      // Parcourir chaque question dans le JSON
      data.questions.forEach((question) => {
        // Créer un conteneur pour chaque question
        const boite = document.createElement("conteneur");
        boite.classList.add(
          "card",
          "mx-5",
          "container-fluid",
          "border-primary",
          "mb-3"
        );

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Titre de la question
        const Titre = document.createElement("h5");
        Titre.classList.add("card-title");
        Titre.textContent = `Question ${question.number}`;

        // Texte de la question
        const textquestion = document.createElement("p");
        textquestion.classList.add("card-text");
        textquestion.textContent = question.question;

        // Liste des réponses
        const listReponses = document.createElement("ul");
        listReponses.classList.add("list-group", "list-group-flush");

        question.answers.forEach((answer, index) => {
          const listItem = document.createElement("li");
          listItem.classList.add("list-group-item");

          const radioInput = document.createElement("input");
          radioInput.setAttribute("type", "radio");
          radioInput.setAttribute("name", `question${question.number}`);
          radioInput.setAttribute("id", `q${question.number}a${index}`);
          radioInput.setAttribute("value", index);
          radioInput.classList.add("form-check-input");

          const label = document.createElement("label");
          label.setAttribute("for", `q${question.number}a${index}`);
          label.classList.add("form-check-label");
          label.textContent = answer;

          // Ajouter l'input et le label au listItem
          listItem.appendChild(radioInput);
          listItem.appendChild(label);
          // Ajouter le listItem à la liste
          listReponses.appendChild(listItem);
        });

        // Ajouter le titre, le texte et la liste au cardBody
        cardBody.appendChild(Titre);
        cardBody.appendChild(textquestion);
        cardBody.appendChild(listReponses);

        // Créer le bouton Soumettre
        const EnvoyerReponse = document.createElement("button");
        EnvoyerReponse.classList.add("btn", "btn-primary", "mt-3");
        EnvoyerReponse.textContent = "Soumettre";

        // Ajouter l'événement de clic pour le bouton "Soumettre"
        EnvoyerReponse.addEventListener("click", () => {
          const selectReponse = document.querySelector(
            `input[name="question${question.number}"]:checked`
          );
          if (selectReponse) {
            const IndexReponse = selectReponse;
            const listReponses =
              textquestion.querySelectorAll(".list-group-item");

            listReponses.forEach((item, index) => {
              if (index == question.correct_answer) {
                item.classList.add("correct"); // Bonne réponse
              } else {
                item.classList.add("incorrect"); // Mauvaise réponse
              }
            });

            // Désactiver les boutons radio après soumission
            const radioButtons = textquestion.querySelectorAll(
              `input[name="question${question.number}"]`
            );

            radioButtons.forEach((radio) => {
              radio.disabled = true;
            });
          } else {
            alert("Veuillez sélectionner une réponse !");
          }
        });

        // Ajouter le bouton au cardBody
        cardBody.appendChild(EnvoyerReponse);
        // Ajouter le cardBody à la carte
        textquestion.appendChild(cardBody);
        // Ajouter la carte au contenu principal
        jsonContent.appendChild(textquestion);
      });

      console.log(data); // Afficher les données dans la console pour débogage
    });
  console.error("Erreur:", "error");
  /*  jsonContent.innerHTML = `<p class="text-danger">Erreur de chargement : ${error.message}</p>`; */
}

// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();
