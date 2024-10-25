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


// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();
  */