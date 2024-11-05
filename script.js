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


// Sélectionne le conteneur de la galerie
const galleryContainer = document.querySelector('.gallery');

// document.addEventListener('DOMContentLoaded', () => generateGallery());

function generateGallery() {
    // Parcourt chaque image du tableau
    for (const image of images) {
        // Crée l'élément div pour chaque image
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        // Ajoute la classe "large" ou "xlarge" si spécifié
        if (image.taille === 'large') {
            galleryItem.classList.add('large');
        } else if (image.taille === 'xlarge') {
            galleryItem.classList.add('xlarge');
        }
        else if (image.taille === 'largelong') {
            galleryItem.classList.add('largelong');
        }
    
        // Crée l'élément img
        const imgElement = document.createElement('img');
        imgElement.src = `./img/${image.nom}.jpg`;
        imgElement.alt = `Image ${image.nom}`;
    
        // Ajoute l'image à l'élément div
        galleryItem.appendChild(imgElement);
    
        // Ajoute le div à la galerie
        galleryContainer.appendChild(galleryItem);
    }
}

generateGallery();