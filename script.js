/* // Chemin vers votre fichier JSON
const jsonFile = 'index.json';

// Fonction asynchrone pour récupérer et afficher le contenu JSON
async function fetchAndDisplayJSON() {
    try {
        // Récupérer la réponse
        const response = await fetch(jsonFile);
        
        // Vérifier si la réponse est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        // Convertir la réponse en JSON
        const data = await response.json();
        
        // Sélectionner l'élément HTML où afficher le contenu
        const jsonContent = document.getElementById('jsonContent');
        
        // Convertir l'objet JSON en chaîne de caractères et l'afficher sur la page
        jsonContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        // Afficher le contenu JSON dans la console
        console.log(data);
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur:', error);
    }
}


// méthode fetch pour isoler des elements json

fetch('index.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Accéder à la question en tant qu'objet
    const question = data.questions[0].question;
    console.log(question.text); // "Qu'étudie la sismologie ?"
    
    // Si tu veux ajouter des détails à l'objet question
    question.details = {
      type: 'multiple choice'
    };

    console.log(question); // Affiche l'objet question mis à jour
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  */
  

  // méthode modifié avec un seul fetch : 

  // Chemin vers votre fichier JSON
/* const jsonFile = 'index.json';

// Fonction asynchrone pour récupérer et afficher le contenu JSON
async function fetchAndDisplayJSON() {
    try {
        // Récupérer la réponse
        const response = await fetch(jsonFile);
        
        // Vérifier si la réponse est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        // Convertir la réponse en JSON
        const data = await response.json();
        
        // Sélectionner l'élément HTML où afficher le contenu
        const jsonContent = document.getElementById('jsonContent');
        
        // Convertir l'objet JSON en chaîne de caractères et l'afficher sur la page
        // jsonContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        // Accéder à la question en tant qu'objet
        
        let question = data.questions[0].question;
        for (let i = 0; i< data.questions.length; i++) {
          question = data.questions[i].question;
          console.log(question);
        }

        const cssQuestion = document.getElementById('questionCss');
        cssQuestion.innerText = question.text;
        jsonContent.appendChild(cssQuestion);

    

        const questSuivante = question[1];
        console.log(question.text); // Affiche la question

        // Ajouter des détails à l'objet question
        question.details = {
            type: 'multiple choice'
        };

        

        console.log(question); // Affiche l'objet question mis à jour
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur:', error);
    }
}
// -------------------FIN DES ESSAIS----------------------------

// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();
  */

// Chemin vers votre fichier JSON
const jsonFile = 'index.json';

// Fonction asynchrone pour récupérer et afficher le contenu JSON
async function fetchAndDisplayJSON() {
    try {
        // Récupérer la réponse
        const response = await fetch(jsonFile);
        
        // Vérifier si la réponse est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        // Convertir la réponse en JSON
        const data = await response.json();
        
        // Sélectionner l'élément HTML où afficher le contenu
        const jsonContent = document.getElementById('jsonContent');


// ETAPE 2 - Vider le contenu précédent
        jsonContent.innerHTML = '';

// ETAPE 2 - Parcourir tous les éléments et les afficher
/*         data.items.forEach((item, index) => {
 */      data.questions.forEach((question, index) => {
            // Créer un élément div pour chaque item
             /* const itemDiv = document.createElement('div');
             itemDiv.innerHTML = `<pre>${JSON.stringify(item, null, 2)}</pre>`; */

            // Créer un élément div pour chaque question
                const questionDiv = document.createElement('div');
                questionDiv.innerHTML = `
                    <h3>Question ${question.number}: ${question.question}</h3>
                    <ul>
                        ${question.answers.map((answer, i) => `<li>${answer}</li>`).join('')}
                    </ul>
                `;
             
             // Ajouter une classe CSS
/*              itemDiv.classList.add('highlight'); */
                questionDiv.classList.add('highlight');

             // Ajouter un événement de clic
                /* itemDiv.addEventListener('click', () => {
                    alert(`Élément ${index + 1} cliqué !`);
                }); */
                questionDiv.addEventListener('click', () => {
                    alert(`Question ${question.number} cliquée !`);
                });

                // Ajouter l'élément div au contenu JSON
                /* jsonContent.appendChild(itemDiv);
            }); */
                jsonContent.appendChild(questionDiv);
            });

        // FIN ETAPE 2
        
        // Convertir l'objet JSON en chaîne de caractères et l'afficher sur la page - METTRE CETTE
        // LIGNE SI PAS ETAPE 2
        //jsonContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        
        // Afficher le contenu JSON dans la console
        console.log(data);
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur:', error);
    }
}

// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();


//-----------------------------------------------------------------------------------

