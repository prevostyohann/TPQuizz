// Chemin vers votre fichier JSON
const jsonFile = 'index.json';
let nbDeBonnesReponses = 0;
let nbDeQuestionsRepondues = 0;

// Fonction asynchrone pour récupérer et afficher le contenu JSON
async function fetchAndDisplayJSON() {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const data = await response.json();
        const jsonContent = document.getElementById('jsonContent');

        // Vider le contenu précédent
        jsonContent.innerHTML = '';

        
        // Parcourir chaque question dans le JSON
        data.questions.forEach((question) => {
            // Créer un conteneur pour chaque question
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('card', 'mx-5', 'container-fluid', 'border-primary', 'mb-3');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // Titre de la question
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = `Question ${question.number}`;

            // Texte de la question
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = question.question;

            // Liste des réponses
            const list = document.createElement('ul');
            list.classList.add('list-group', 'list-group-flush');




            question.answers.forEach((answer, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');

                const radioInput = document.createElement('input');
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', `question${question.number}`);
                radioInput.setAttribute('id', `q${question.number}a${index}`);
                radioInput.setAttribute('value', index);
                radioInput.classList.add('form-check-input');

                const label = document.createElement('label');
                label.setAttribute('for', `q${question.number}a${index}`);
                label.classList.add('form-check-label');
                label.textContent = answer;

                // Ajouter l'input et le label au listItem
                listItem.appendChild(radioInput);
                listItem.appendChild(label);
                // Ajouter le listItem à la liste
                list.appendChild(listItem);
            });

            // Ajouter le titre, le texte et la liste au cardBody
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(list);

            // Créer le bouton Soumettre
            const submitButton = document.createElement('button');
            submitButton.classList.add('btn', 'btn-primary', 'mt-3');
            submitButton.textContent = 'Soumettre';


            // Ajouter l'événement de clic pour le bouton "Soumettre"
            submitButton.addEventListener('click', () => {
                const selectedAnswer = document.querySelector(`input[name="question${question.number}"]:checked`);
                if (selectedAnswer) {
                    const answerIndex = selectedAnswer.value;
                    const listItems = questionDiv.querySelectorAll('.list-group-item');

                    listItems.forEach((item, index) => {
                        if (index == question.correct_answer) {
                            item.classList.add('correct'); // Bonne réponse
// Laure    // ajout de 1 au compteur de bonnes réponses /////////
                            nbDeBonnesReponses++;
// console.log a commenter apres verif de bon fonctionnement /////////
                              console.log("nombre de bonnes reponses"+nbDeBonnesReponses);
                        } else if (index == answerIndex) {
                            item.classList.add('incorrect');
                        } 
                    });

                    // Désactiver les boutons radio après soumission
                    const radioButtons = questionDiv.querySelectorAll(`input[name="question${question.number}"]`);
                    radioButtons.forEach((radio) => {
                        radio.disabled = true;
                    });
// Laure    // mise a jour et affichage du score /////////
                    nbDeQuestionsRepondues++;

                    // Vérifier si toutes les questions ont été répondues
                    if (nbDeQuestionsRepondues === data.questions.length) {
                       // Afficher le score final
                       const affichageScore = document.createElement('p');
                       affichageScore.classList.add('list-group-item');
                       affichageScore.textContent = `Vous avez eu ${nbDeBonnesReponses} bonnes réponses sur les ${data.questions.length} questions`;
                       document.body.appendChild(affichageScore);     
                } 
            }else {
                    alert('Veuillez sélectionner une réponse !');
                }
            });


           // Laure    // ajout du nombre de bonnes réponses
            // Initialisation du score nombre de bonnes réponses
    console.log("controle affichage nb bonnes rep" +nbDeBonnesReponses);



            //fond d'écran
            document.body.style.backgroundImage = "url('./istockphoto-1316129143-1024x1024.jpg')";
            document.body.style.backgroundSize = "cover"; // Pour couvrir toute la page
            document.body.style.backgroundPosition = "center"; // Pour centrer l'image
            document.body.style.backgroundRepeat = "no-repeat"; // Pour éviter la répétition de l'image



            // Ajouter le bouton au cardBody
            cardBody.appendChild(submitButton);
            // Ajouter le cardBody à la carte
            questionDiv.appendChild(cardBody);
            // Ajouter la carte au contenu principal
            jsonContent.appendChild(questionDiv);
        });


        console.log(data); // Afficher les données dans la console pour débogage
    } catch (error) {
        console.error('Erreur:', error);
        jsonContent.innerHTML = `<p class="text-danger">Erreur de chargement : ${error.message}</p>`;
    }
}



// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();


 







