async function monJsonParser(URL) {

    try {
    
        const reponse = await fetch(URL);
    
    console.log(reponse);
    
    if(!reponse.ok) throw new Error ("le fichier Json n'a pu être trouvé");

    const jsontext = await reponse.text();
console.log(jsontext);
    
    const data = await reponse.json();
    console.log(data);
 }
    
    catch(error) {
        console.log(error);
    }
}


monJsonParser('./index.json');