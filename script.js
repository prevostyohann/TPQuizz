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
        
        // Convertir l'objet JSON en chaîne de caractères et l'afficher sur la page
        jsonContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
        // Afficher le contenu JSON dans la console
        console.log(data);
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur:', error);
    }
}

// Appeler la fonction pour récupérer et afficher le JSON
fetchAndDisplayJSON();

