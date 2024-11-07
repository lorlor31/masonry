## POUR RENOMMER LES FICHIERS EN imageXXX.jpg par la CLI

Lancer cette commande dans le dossier contenant les images :

```
n=1               
for file in *.jpg; do
    mv "$file" "image$n.jpg"
    ((n++))
done

```

## POUR RECUPERER LES NOMS DES IMAGES DU DOSSIER DANS UN JSON

On va lancer le script **readImages.js** avec node qui va afficher dans le terminal le tableau désiré.

```
node readImages.js

```
## CONVERTIR LES JPG EN WEBP

Installer ImageMagick, créer un dossier et y exécuter la conversion
```
sudo apt-get install imagemagick
mkdir -p /images/webp_output
cd /images
mogrify -path ./webp_output -format webp *.png *.jpg
```
## PALETTES COULEURS

Palette 1 : Minimaliste et Élégante
Couleur du titre : Dégradé linear-gradient(45deg, #2C3E50, #4CA1AF) (Bleu foncé à bleu clair)
Couleur de fond : #ECF0F1 (Gris clair)
Bordure de l'image : #34495E (Gris bleuté)
Palette 2 : Vibrante et Énergique
Couleur du titre : Dégradé linear-gradient(45deg, #FF6F61, #D35400) (Corail à orange vif)
Couleur de fond : #F7F8F8 (Blanc cassé)
Bordure de l'image : #E67E22 (Orange)
Palette 3 : Naturelle et Douce
Couleur du titre : Dégradé linear-gradient(45deg, #27AE60, #2ECC71) (Vert émeraude à vert clair)
Couleur de fond : #E8F8F5 (Bleu très clair)
Bordure de l'image : #1ABC9C (Turquoise)
Palette 4 : Sombre et Mystérieuse
Couleur du titre : Dégradé linear-gradient(45deg, #8E44AD, #9B59B6) (Violet à lavande)
Couleur de fond : #2C3E50 (Bleu foncé)
Bordure de l'image : #9B59B6 (Lavande)