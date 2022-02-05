/*  Faire une fonction qui effectue une boucle allant de 0 à 5 (exclu)
    qui a chaque itération va log l’index courant.
    De plus, si l’index courant est égal à 0 alors on log le code couleur vert
    si l’index courant est un nombre paire alors on log le code couleur rouge
    si l’index courant est un nombre impaire alors on log le code couleur bleu
*/
loopLogColor()

// Récupérer le contenu de la balise H1 et le log
let title = document.querySelector('h1')
if (title !== null)
    logMessage(title.innerHTML)

// Récupérer le contenu de la balise H2 ayant pour ID titleNews et on le log
let titleNews = document.querySelector('#titleNews')
if (titleNews !== null)
    logMessage(titleNews.innerText)

// Récupérer le contenu de toutes les balises H3 ayant pour classe title et on le log
let news = document.querySelectorAll('h3.title')
if (news !== null)
    news.forEach(element => logMessage(element.innerHTML))

// Créer une fonction prenant en paramètre un message qui le log en le précédent du DateTime (date + heure) actuel
logMessageWithDateAndHours('date + heure')

let button = document.querySelector("input[name='addNewsBtn']");
if (button !== null)
    button.addEventListener('click', addNews);