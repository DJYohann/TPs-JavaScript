let button = document.querySelector('input[name="addNewsBtn"]');
if (button !== null)
    bindButton(button);

let buttons = document.querySelectorAll('#news article > button')
if (buttons !== null)
    bindButtons(buttons);

try {
    JSON.parse(ALLNEWSJSON).forEach(article => {
        articleToLog = new Article(article.title, article.desc);
        logMessageWithDate(articleToLog);
    });
}
catch(e){
    console.error(e);
}