# TP2

## Présentation 

### Objectif principal

Compléter les articles (code HTML) avec :

* un ID alphanumérique unique (que l’on mettra dans l’attribut ID de la balise HTML article) au format article-{id}
* une description que l’on affichera dans l’article au sein d’une balise p
* un bouton ayant pour libellé “View detail” (ex : <button>View Detail</button>)

Pour chaque bouton associé à un article, il faut au clic récupérer la description de l’article et le log

Dans le fichier JS des variables, ajouter la variables suivante “ALLNEWSJSON” au format JSON en chaine de caractère qui contiendra 3 news, une news est composé : 

* d’un ID numérique
* d’un titre
* d’une description

ATTENTION l’ID étant unique, vous ne devez pas avoir 2 news pareil (JSON + HTML)

Transformer le fichier article.js pour que ce dernier intègre les méthodes actuelles dans une classe Article :

* un article est composé d’un ID, un titre et une description (attributs)
* les 3 attributs de l’article sont initialisés via le constructeur
* modifier les méthodes existantes (utilisation des attributs à la place des paramètres) pour qu’elles utilisent la classe

Récupérer le contenu de la variable ALLNEWSJSON et convertir le JSON en objet Article et les log

Pour chaque objet ainsi obtenu, insérer une news dans l'élément HTML #news

ATTENTION, une fois qu’une news a été ajoutée il faut que le click sur le bouton “View Detail” soit opérant

Mettre en place un type d’erreur spécifique pour “titre vide”, “titre trop court” et “article existant” et gérer le type d’erreur.

### Objectif bonus

Adapter le formulaire pour ajouter une news : 

* ajouter un champ texte ou textarea pour la description
* attention l’ID doit être unique et suivre le précédent
* les 2 champs sont obligatoires


### NB

L’expression “le log” fait référence à la méthode logMessage(message) du fichier log.js

## Auteurs 

* VIGNON Ugo
* BREUIL Yohann