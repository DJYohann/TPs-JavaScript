# TP4

## Présentation 

### Objectif principal

Gérer le titre principal de la page (h1) via une variable injectée par VueJS

Les news doivent être chargées en VueJS via la variable ALLNEWSJSON

Au clic sur le bouton “supprimer” d’une news, cette dernière doit être retirée

La section news doit être être affichée uniquement si il y a des news

En haut de la section news, on doit afficher “X article” si il y a 1 article d’affiché, “X articles” à partir de 2 articles affichés

A la validation du formulaire, on doit ajouter une news si :

* le titre ET la description sont renseignés
* afficher un message d’erreur en rouge si l’un des 2 n’est pas renseigné
* afficher un message de validation en vert si l’ajout a fonctionné
* ATTENTION, la couleur doit être gérée en VueJS

Créer un composant vuejs "ArticleNews" qui permettra d'afficher une news comme elle est actuellement affichée

* prise en charge de l’événement lorsque l’on clique sur le bouton “View detail” et “Supprimer”

Remplacer le code permettant d'afficher les news pour les afficher en vuejs via le composant précédemment créé

Rendre le formulaire d’ajout de news fonctionnel. Il doit utiliser le composant créé précédement ET utiliser la classe Article (présente dans article.js) pour s’assurer que la construction est bonne (titre et description remplis)

## Auteurs 

* VIGNON Ugo
* BREUIL Yohann