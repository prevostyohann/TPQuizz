const jsonFile = "index.json";
 
// Fonction asynchrone pour récupérer et afficher le contenu JSON
async function fetchAndDisplayJSON() {
  try {
    const response = await fetch(jsonFile);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
 
    const data = await response.json();
    const jsonContent = document.getElementById("jsonContent");
 
    // Vider le contenu précédent
    jsonContent.innerHTML = "";
 
    // Parcourir chaque question dans le JSON
    data.questions.forEach((question) => {
      // Créer un conteneur pour chaque question
      const questionDiv = document.createElement("div");
      questionDiv.classList.add(
        "card",
        "mx-5",
        "container-fluid",
        "border-primary",
        "mb-3"
      );
 
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
 
      // Titre de la question
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `Question ${question.number}`;
 
      // Texte de la question
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = question.question;
 
      // Liste des réponses
      const list = document.createElement("ul");
      list.classList.add("list-group", "list-group-flush");
 

// Laure

        // Déclaration de l'index de la bonne réponse
        const indexDelaBonneReponse = question.correct_answer;

        // Créer les réponses et gérer les clics
        question.answers.forEach((answer, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = answer;
            // Ajout de l'événement avec { once: true } pour empêcher les multiples clics
            listItem.addEventListener("click", (event) => {
                const elementClique = event.target; // pas obligatoire mais c'est plus clair
                // Mettre à jour les couleurs des réponses en fonction de la bonne ou mauvaise réponse
                if (index === indexDelaBonneReponse) {
                    elementClique.style.backgroundColor = "green"; // Bonne réponse
                } else {
                    elementClique.style.backgroundColor = "red"; // Mauvaise réponse
                    //indexDelaBonneReponse.style.backgroundColor = "green"; // on peut selectionner tant que la bonne réponse n 'est pas trouvée, ensuite clic impossible, dans ce cas là commenter la ligne en dessous
                    list.children[indexDelaBonneReponse].style.backgroundColor = "green"; // affichage de la bonne réponse en cas d'erreur

                }
            // Désactivation des clics sur toutes les réponses après la sélection d'une réponse
                Array.from(list.children).forEach((li) => {
                li.style.pointerEvents = "none"; // Désactiver le clic pour tous les éléments
                });
            }, { once: true }); // Une seule sélection par réponse
                
            list.appendChild(listItem);
        });


// Fin Laure ---------------------------------
 
       // Ajouter le titre, le texte et la liste au cardBody
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(list);
 
/*       // Créer le bouton Soumettre
      const submitButton = document.createElement("button");
      submitButton.classList.add("btn", "btn-primary", "mt-3");
      submitButton.textContent = "Soumettre";
 */ 
     
      // Ajouter le cardBody à la carte
      questionDiv.appendChild(cardBody);
      // Ajouter la carte au contenu principal
      jsonContent.appendChild(questionDiv);
    });
 
    console.log(data); // Afficher les données dans la console pour débogage
  } catch (error) {
    console.error("Erreur:", error);
    jsonContent.innerHTML = `<p class="text-danger">Erreur de chargement : ${error.message}</p>`;
  }
}
 
// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();
 

 
