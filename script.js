const images = 
    [
        {
          "nom": "image1",
          "taille": "normal"
        },
        {
          "nom": "image2",
          "taille": "normal"
        },
        {
          "nom": "image3",
          "taille": "large"
        },
        {
          "nom": "image4",
          "taille": "largelong"
        },
        {
          "nom": "image5",
          "taille": "normal"
        },
        {
          "nom": "image6",
          "taille": "large"
        },
        {
          "nom": "image7",
          "taille": "normal"
        },
        {
          "nom": "image8",
          "taille": "normal"
        },
        {
          "nom": "image9",
          "taille": "normal"
        },
        {
          "nom": "image10",
          "taille": "xlarge"
        },
        {
          "nom": "image11",
          "taille": "normal"
        },
        {
          "nom": "image12",
          "taille": "large"
        },
        {
          "nom": "image13",
          "taille": "normal"
        },
        {
          "nom": "image14",
          "taille": "large"
        },
        {
          "nom": "image15",
          "taille": "largelong"
        },
        {
          "nom": "image16",
          "taille": "large"
        },
        {
          "nom": "image17",
          "taille": "large"
        },
        {
          "nom": "image18",
          "taille": "xlarge"
        },
        {
          "nom": "image19",
          "taille": "normal"
        },
        {
          "nom": "image20",
          "taille": "large"
        },
        {
          "nom": "image21",
          "taille": "normal"
        },
        {
          "nom": "image22",
          "taille": "xlarge"
        },
        {
          "nom": "image23",
          "taille": "normal"
        },
        {
          "nom": "image24",
          "taille": "largelong"
        },
        {
          "nom": "image25",
          "taille": "normal"
        },
        {
          "nom": "image26",
          "taille": "normal"
        },
        {
          "nom": "image27",
          "taille": "normal"
        },
        {
          "nom": "image28",
          "taille": "normal"
        },
        {
          "nom": "image29",
          "taille": "normal"
        },
        {
          "nom": "image30",
          "taille": "normal"
        },
        {
          "nom": "image31",
          "taille": "normal"
        },
        {
          "nom": "image32",
          "taille": "normal"
        },
        {
          "nom": "image33",
          "taille": "normal"
        },
        {
          "nom": "image34",
          "taille": "normal"
        },
        {
          "nom": "image35",
          "taille": "normal"
        },
        {
          "nom": "image36",
          "taille": "normal"
        },
        {
          "nom": "image37",
          "taille": "normal"
        },
        {
          "nom": "image38",
          "taille": "normal"
        },
        {
          "nom": "image39",
          "taille": "normal"
        },
        {
          "nom": "image40",
          "taille": "normal"
        },
        {
          "nom": "image41",
          "taille": "normal"
        },
        {
          "nom": "image42",
          "taille": "xlarge"
        },
        {
          "nom": "image43",
          "taille": "normal"
        },
        {
          "nom": "image44",
          "taille": "normal"
        },
        {
          "nom": "image45",
          "taille": "normal"
        },
        {
          "nom": "image46",
          "taille": "largelong"
        },
        {
          "nom": "image47",
          "taille": "normal"
        },
        {
          "nom": "image48",
          "taille": "normal"
        },
        {
          "nom": "image49",
          "taille": "normal"
        },
        {
          "nom": "image50",
          "taille": "normal"
        },
        {
          "nom": "image51",
          "taille": "xlarge"
        },
        {
          "nom": "image52",
          "taille": "normal"
        },
        {
          "nom": "image53",
          "taille": "xlarge"
        },
        {
          "nom": "image54",
          "taille": "normal"
        },
        {
          "nom": "image55",
          "taille": "large"
        },
        {
          "nom": "image56",
          "taille": "xlarge"
        },
        {
          "nom": "image57",
          "taille": "normal"
        },
        {
          "nom": "image58",
          "taille": "xlarge"
        },
        {
          "nom": "image59",
          "taille": "normal"
        },
        {
          "nom": "image60",
          "taille": "xlarge"
        },
        {
          "nom": "image61",
          "taille": "normal"
        },
        {
          "nom": "image62",
          "taille": "normal"
        },
        {
          "nom": "image63",
          "taille": "largelong"
        },
        {
          "nom": "image64",
          "taille": "normal"
        },
        {
          "nom": "image65",
          "taille": "xlarge"
        },
        {
          "nom": "image66",
          "taille": "normal"
        },
        {
          "nom": "image67",
          "taille": "normal"
        },
        {
          "nom": "image68",
          "taille": "normal"
        },
        {
          "nom": "image69",
          "taille": "normal"
        }
    ]
;

const punchyColors = [
    "#FF5733", // Rouge vif
    "#FFBD33", // Jaune vif
    "#DBFF33", // Vert citron
    "#75FF33", // Vert vif
    "#33FF57", // Vert menthe
    "#33FFBD", // Turquoise
    "#33DBFF", // Bleu clair
    "#3357FF", // Bleu vif
    "#5733FF", // Violet
    "#FF33A1"  // Rose vif
];

const mutedColors = [
    "#FF6F61", // Corail
    "#FFB300", // Jaune moutarde
    "#A8D68E", // Vert tendre
    "#6FB3C8", // Bleu pastel
    "#6A5B8A", // Lavande grisée
    "#FFA07A", // Saumon clair
    "#FFD700", // Or
    "#B0E0E6", // Bleu poudre
    "#DDA0DD", // Prune clair
    "#FF8C00"  // Orange vif
];

// Sélectionne le conteneur de la galerie
const galleryContainer = document.querySelector('.gallery');

// document.addEventListener('DOMContentLoaded', () => generateGallery());

function generateGallery() {
    for (const image of images) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Crée l'élément img
        const imgElement = document.createElement('img');
        imgElement.src = `./img/img-webp/${image.nom}.webp`;
        imgElement.alt = `Image ${image.nom}`;

         // Ajoute la classe "large" ou "xlarge" si spécifié
         if (image.taille === 'large') {
            galleryItem.classList.add('large');
        } else if (image.taille === 'xlarge') {
            galleryItem.classList.add('xlarge');
        }
        else if (image.taille === 'largelong') {
            galleryItem.classList.add('largelong');
        }

        // Ajoute l'image à l'élément div
        galleryItem.appendChild(imgElement);
        // Ajoute le div à la galerie
        galleryContainer.appendChild(galleryItem);

        // Créer un popup pour chaque image
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.style.display = 'none'; // Masqué par défaut

        const popupImage = document.createElement('img');
        popupImage.src = imgElement.src; // Source de l'image du popup
        popupImage.alt = `Popup Image ${image.nom}`;

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;'; // Caractère pour fermer le popup

        // Écouteur d'événement pour fermer le popup
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Ajoute l'image et le bouton de fermeture au popup
        popup.appendChild(closeBtn);
        popup.appendChild(popupImage);
        document.body.appendChild(popup); // Ajoute le popup au corps du document

        let hoverTimeout; // Variable pour le délai de survol
        let hoverOutTimeout; // Variable pour le délai de survol
        let popupTimeout; // Variable pour le délai de visibilité du popup
        // Afficher au ckick
        imgElement.addEventListener('click', () => {
              popup.style.display = 'flex'; // Affiche le popup
              popupDisplayState = true ;             
        });
        // Événements pour afficher le popup lors du survol de l'image
        imgElement.addEventListener('click', () => {
            // Mettre un délai avant d'afficher le popup
            hoverTimeout = setTimeout(() => {
                clearTimeout(hoverOutTimeout);
                popup.style.display = 'flex'; // Affiche le popup
                popupDisplayState = true ;
                // // Rendre le popup visible pendant 1 seconde
                // popupTimeout = setTimeout(() => {
                //     popup.style.display = 'none'; // Cache le popup après 1 seconde
                // }, 1000); // Délai de 1000 ms (1 seconde)
            }, 300); // Délai de 300 ms avant d'afficher le popup
        });
        // A REVOIR
        //     imgElement.addEventListener('mouseleave', () => {
        //         hoverOutTimeout = setTimeout(() => {
        //         clearTimeout(hoverTimeout); // Annule le délai si la souris quitte l'image
        //         clearTimeout(popupTimeout); // Annule le délai de fermeture si le popup est visible
        //         popup.style.display = 'none'; // Cache le popup
        //     },500);
        // });
        
        // imgElement.addEventListener('mouseleave', () => {
        //     clearTimeout(hoverTimeout); // Annule le délai si la souris quitte l'image
        //     clearTimeout(popupTimeout); // Annule le délai de fermeture si le popup est visible
        //     popup.style.display = 'none'; // Cache le popup
        // });

        // Fermer le popup en cliquant à l'extérieur de l'image
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
}

// Fonction pour avoir des bordures de couleur random
function applyRandomBorderColors() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        // Choisir une couleur aléatoire du tableau
        const randomColor = mutedColors[Math.floor(Math.random() * punchyColors.length)];
        // Appliquer la couleur comme bordure
        img.style.border = `5px solid ${randomColor}`;
    });
}

// Appelez cette fonction après que la galerie a été générée
generateGallery();
applyRandomBorderColors();

// Gestion du pimper
document.getElementById("palette-select").addEventListener("change", function() {
    const selectedPalette = this.value;
    const body = document.body;
    const title = document.querySelector(".gradient-text");
    const image = document.querySelector(".gallery-item img ");

    switch (selectedPalette) {
        case "palette1":
            body.style.backgroundColor = "#ECF0F1"; // Gris clair
            title.style.background = "linear-gradient(45deg, #2C3E50, #4CA1AF)"; // Dégradé bleu
            title.style.webkitBackgroundClip = "text"; // Assurez-vous que le clip fonctionne
            title.style.webkitTextFillColor = "transparent"; // Assurez-vous que le texte est transparent
            // image.style.border = "5px solid #34495E"; // Bordure gris bleuté
            break;
        case "palette2":
            body.style.backgroundColor = "#F7F8F8"; // Blanc cassé
            title.style.background = "linear-gradient(45deg, #FF6F61, #D35400)"; // Dégradé corail à orange
            title.style.webkitBackgroundClip = "text"; // Assurez-vous que le clip fonctionne
            title.style.webkitTextFillColor = "transparent"; // Assurez-vous que le texte est transparent
            // image.style.border = "5px solid #E67E22"; // Bordure orange
            break;
        case "palette3":
            body.style.backgroundColor = "#E8F8F5"; // Bleu très clair
            title.style.background = "linear-gradient(45deg, #27AE60, #2ECC71)"; // Dégradé vert
            title.style.webkitBackgroundClip = "text"; // Assurez-vous que le clip fonctionne
            title.style.webkitTextFillColor = "transparent"; // Assurez-vous que le texte est transparent
            // image.style.border = "5px solid #1ABC9C"; // Bordure turquoise
            break;
        case "palette4":
            body.style.backgroundColor = "#2C3E50"; // Bleu foncé
            title.style.background = "linear-gradient(45deg, #8E44AD, #9B59B6)"; // Dégradé violet
            title.style.webkitBackgroundClip = "text"; // Assurez-vous que le clip fonctionne
            title.style.webkitTextFillColor = "transparent"; // Assurez-vous que le texte est transparent
            // image.style.border = "5px solid #9B59B6"; // Bordure lavande
            break;
    }
});

