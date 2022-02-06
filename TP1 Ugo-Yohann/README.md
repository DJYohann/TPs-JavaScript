# TP1

## Présentation 

### Objectif principal

Créer un fichier JS de variables contenant :
* un code couleur vert (au format hexadécimal)
* un code couleur rouge (au format hexadécimal)
* un code couleur bleu (au format hexadécimal)

Faire une fonction qui effectue une boucle allant de 0 à 5 (exclu) qui a chaque itération va log l’index courant. De plus,

* si l’index courant est égal à 0 alors on log le code couleur vert
* si l’index courant est un nombre paire alors on log le code couleur rouge
* si l’index courant est un nombre impaire alors on log le code couleur bleu

Récupérer le contenu (html) de la balise H1 et le log

Récupérer le contenu (texte) de la balise H2 ayant pour ID titleNews et on le log

Récupérer le contenu de toutes les balises H3 ayant pour classe title et on le log

Au clic sur le bouton du formulaire, il faut récupérer le contenu du champ (vous pouvez rajouter un attribut ID ou utiliser un sélecteur prenant en compte le name) et ajouter un article dans la section ayant pour ID news (le contenu HTML de l’article provient du champ input)

Lever une Error (mode texte, sans classe) si le champ est vide et afficher un message d’erreur (en rouge) au début du formulaire.

### Objectif bonus

Créer une fonction prenant en paramètre un message qui le log en le précédent du DateTime (date + heure) actuel

Au clic sur le bouton du formulaire il faut vérifier l'unicité de l’article. Si article non unique, alors on affiche un message d’erreur au début du formulaire. Le message doit être de couleur rouge.

### NB

L’expression “le log” fait référence à la méthode logMessage(message) du fichier log.js

## Auteurs 

* VIGNON Ugo
* BREUIL Yohann