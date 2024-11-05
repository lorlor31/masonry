const fs = require('fs');
const path = require('path');

// Chemin du dossier d'images
const directoryPath = path.join(__dirname, 'img'); // Remplacez 'images' par le nom de votre dossier

// Initialisation de variables
let imageIndex = 1;
const imageDataArray = [];

// Lecture des fichiers du dossier
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error("Erreur lors de la lecture du dossier :", err);
    }
    
    // Filtrer uniquement les fichiers d'images
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Parcourir chaque fichier d'image
    imageFiles.forEach(file => {
        const newName = `image${imageIndex}`; // Nom souhaité
        const filePath = path.join(directoryPath, file);

        // Ajout d'un objet avec le nom et la taille dans le tableau JSON
        imageDataArray.push({
            nom: newName,
            taille: "normal" // Taille fixe pour cet exemple
        });

        // Incrémenter l'index pour le prochain fichier
        imageIndex++;
    });

    // Afficher le tableau JSON
    console.log(JSON.stringify(imageDataArray, null, 2)); // Affichage formaté
});
