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
        data.items.forEach((item, index) => {
             // Créer un élément div pour chaque item
             const itemDiv = document.createElement('div');
             itemDiv.innerHTML = `<pre>${JSON.stringify(item, null, 2)}</pre>`;
             
             // Ajouter une classe CSS
             itemDiv.classList.add('highlight');

             // Ajouter un événement de clic
            itemDiv.addEventListener('click', () => {
                alert(`Élément ${index + 1} cliqué !`);
            });

            // Ajouter l'élément div au contenu JSON
            jsonContent.appendChild(itemDiv);
        });


        
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

