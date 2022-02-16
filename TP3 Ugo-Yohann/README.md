# TP3

## Présentation 

### Objectif principal

Convertir le code JS classique actuel en code JS JQuery

Faire un appel AJAX au flux suivant :

[](https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology)

Une fois cela fait, il faudra log la réponse.

Pour chaque article contenu dans la réponse de la requête AJAX précédente, il faut ajouter un article dans la section #news.

Mettre en place un système d’onglet : 

* Onglet 1 “Article & recherche” : dédié à la recherche de texte au sein des news (la recherche n’a pas à être opérationnel) ainsi qu’à l’affichage des news (il s’agit de la section news actuel)
* Onglet 2 “Ajouter un article” : dédié à la création de news (il s’agit du formulaire actuel)
* Lorsque l’on clic sur le label d’un article il faut cacher l’autre onglet. Vous pouvez soit développer le système vous même ou alors utiliser un plugin jQuery.
* Par défaut, c’est l’onglet 1 qui est affiché (au chargement de la page on cache l’onglet 2 via la fonction jquery hide()

### NB

L’expression “le log” fait référence à la méthode logMEssage(message) du fichier log.js

## Auteurs 

* VIGNON Ugo
* BREUIL Yohann