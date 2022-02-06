"use strict";

loopLogColor()

let title = document.querySelector('h1')
if (title !== null)
    logMessage(title.innerHTML)

let titleNews = document.querySelector('#titleNews')
if (titleNews !== null)
    logMessage(titleNews.innerText)

let news = document.querySelectorAll('h3.title')
if (news !== null)
    news.forEach(element => logMessage(element.innerHTML))

logMessageWithDateAndHours('Log avec date et heure actuelle')

let button = document.querySelector("input[name='addNewsBtn']");
if (button !== null)
    button.addEventListener('click', function (event) {
        event.preventDefault();
        addNews();
    });