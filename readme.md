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