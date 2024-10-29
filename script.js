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

    const quizz = document.createElement('h1');
    quizz.classList.add('h1');
    quizz.textContent = 'Quiz';
    // Pour que le texte soit en haut ne pas utiliser :
    //document.body.appendChild(quizz);
    // Mais utiliser : prepend qui garantit que ça apparaît en haut de l’élément jsonContent, avant tout autre contenu ajouté par la suite.
    jsonContent.prepend(quizz);



// Laure 1

        // Déclaration des variables pour les calculs en dehors de forEach pour éviter la réinitialisation des variables :


        // Déclaration des variables pour le compeur
        // initialissation compteur à zéro
        let nbDeBonnesReponses = 0;
        let nbDeMauvaisesReponses = 0;
        let nbDeQuestionsRepondues = 0;

         // Fonction pour afficher le score final
    function ResultatDuScore() {
        // Vérifier si toutes les questions ont été répondues
        if (nbDeQuestionsRepondues === data.questions.length) {
            // bouton spécial Yannick
          //bouton
          const boutonScoreRepYannick = document.createElement('button');
          boutonScoreRepYannick.textContent = 'Voir votre score';
          //texte pour réponse
          const reponseYannick = document.createElement('p');
          reponseYannick.classList.add('scintillant');
          // affichage du bouton
          document.body.appendChild(boutonScoreRepYannick);
          // rattacher au clic pour voir message
          boutonScoreRepYannick.addEventListener('click', () => {
            // Vider le contenu des questions pour afficher à la place le score
                jsonContent.innerHTML = ""; 
                // intégration réponse
                document.body.appendChild(reponseYannick);
            // Afficher la réponse
            //La méthode textContent ne prend pas en compte les caractères de nouvelle ligne (\n). 
            //Pour inclure des retours à la ligne le texte, on peut utiliser
            //la méthode innerHTML et ajouter des balises HTML <br> pour les sauts de ligne. 
            // Au lieu de ce code  :
                //reponseYannick.textContent = "DÉMERDEZ VOUS !!! \nVous n'aviez qu'à retenir vos bonnes réponses !"; // Affiche Message Yannick
            // Mettre :
                reponseYannick.innerHTML = "DÉMERDEZ VOUS !!! <br><br>Vous n'aviez qu'à retenir vos bonnes réponses !"; // Affiche Message Yannick
                // Masquer le bouton après le clic
                boutonScoreRepYannick.style.display = 'none';

                //bouton pour afficher le score normal
                //bouton
                const boutonAfficherscorenormal = document.createElement('button');
                boutonAfficherscorenormal.innerHTML = 'Si vous y tenez <br> Votre score est ici';
                //texte pour réponse  - Afficher le score final
                const affichageScore = document.createElement('p');
                affichageScore.classList.add('scintillant'); // Ajout de la classe scintillante
                affichageScore.innerHTML = `Vous avez eu ${nbDeBonnesReponses} bonnes réponses et ${nbDeMauvaisesReponses} erreurs sur ${data.questions.length} questions <br><br>`;
                // affichage du bouton score normal
                document.body.appendChild(boutonAfficherscorenormal);
                //document.body.appendChild(affichageScore);
                // rattacher au clic pour voir message
                boutonAfficherscorenormal.addEventListener('click', () => {
                // Vider le contenu des questions pour afficher à la place le score
                    jsonContent.innerHTML = ""; 
                    // Masquer reponseYannick qui reste affichée au début
                    reponseYannick.style.display = 'none';
                    // intégration réponse
                    document.body.appendChild(affichageScore);
                    // afficher le réponse
                    affichageScore; // Affiche le score normal
                    // Masquer le bouton après le clic
                    boutonAfficherscorenormal.style.display = 'none';

                    //bouton pour recommecer
                    //bouton
                    const boutonRejouer = document.createElement('button');
                    boutonRejouer.textContent = 'Recommencer le Quiz';
                    //affichage du bouton recommencer
                    document.body.appendChild(boutonRejouer);
                    // rattacher au clic pour recommencer
                    boutonRejouer.addEventListener('click', () => {
                        fetchAndDisplayJSON(); // Rappel de la fonction pour recommencer le quiz
                    });
                });
          });




/*             // Vider le contenu des questions pour afficher à la place le score
            jsonContent.innerHTML = ""; 
 */
/*           // Afficher le score final
          const affichageScore = document.createElement('p');
          affichageScore.classList.add('list-group-item');
          affichageScore.classList.add('scintillant'); // Ajout de la classe scintillante
          affichageScore.textContent = `Vous avez eu ${nbDeBonnesReponses} bonnes réponses et ${nbDeMauvaisesReponses} erreurs sur ${data.questions.length} questions`;
 */

          /* event.target.textContent
          const elementClique = event.target;
 */

          // Création des boutons et actions s'y référent




/*         const boutonRecommencer = document.createElement('button');
        boutonRecommencer.textContent = 'Recommencer le Quiz';
        boutonRecommencer.addEventListener('click', () => {
            fetchAndDisplayJSON(); // Rappel de la fonction pour recommencer le quiz
        });
 */
/*         const boutonAfficherscorenormal = document.createElement('button');
        boutonAfficherscorenormal.textContent = 'Votre score est ici';
        boutonRecommencer.addEventListener('click', () => {
            affichageScore; // Affiche le score normal
        });
 */



  
          // Ajoute l'affichage du score et des boutons
          //document.body.appendChild(affichageScore);
          //document.body.appendChild(boutonRecommencer);
/*           document.body.appendChild(boutonScoreRepYannick)
 */          //document.body.appendChild(boutonAfficherscorenormal)
        }
      }


// Fin Laure 1

 
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
 

// Laure 2

        // Déclaration des variables pour les calculs :


        // Déclaration de l'index de la bonne réponse
        const indexDelaBonneReponse = question.correct_answer;


//...............................     


        // Créer les réponses et gérer les clics
        question.answers.forEach((answer, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = answer;
            // Ajout de l'écouteur avec { once: true } pour empêcher les multiples clics
            listItem.addEventListener("click", (event) => {
                const elementClique = event.target; // pas obligatoire mais c'est plus clair
                // Mettre à jour les couleurs des réponses en fonction de la bonne ou mauvaise réponse
                if (index === indexDelaBonneReponse) {
                    //noter elementClique.style.backgroundColor = "green"; OU ALORS :
                    elementClique.style.backgroundColor = "rgb(142, 237, 155)"; // Bonne réponse
                    nbDeBonnesReponses ++;   // ajout 1 aux bonnes réponses
                } else {
                    //noter elementClique.style.backgroundColor = "red"; OU ALORS :
                    elementClique.style.backgroundColor = "rgb(244, 77, 77)"; // Mauvaise réponse
                    //indexDelaBonneReponse.style.backgroundColor = "green"; // on peut selectionner tant que la bonne réponse n 'est pas trouvée, ensuite clic impossible, dans ce cas là commenter la ligne en dessous mais le xompteur sera alors à modifier
                    list.children[indexDelaBonneReponse].style.backgroundColor = "rgb(142, 237, 155)"; // affichage de la bonne réponse en cas d'erreur
                    nbDeMauvaisesReponses ++;    // ajout 1 aux mauvaises réponses
                }
                nbDeQuestionsRepondues ++;   // ajout 1 aux nombres de questions répondues
                

            // Désactivation des clics sur toutes les réponses après la sélection d'une réponse
                Array.from(list.children).forEach((li) => {
                li.style.pointerEvents = "none"; // Désactiver le clic pour tous les éléments
                });
            // Affiche le score si toutes les questions sont répondues
                ResultatDuScore();
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
 

 
