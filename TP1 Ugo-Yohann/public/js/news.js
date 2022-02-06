"use strict";

function addNews() {
    let valueInput = document.querySelector("input[name = 'titleToAdd']").value;
    let form = document.querySelector('#addNewsForm');

    let error = document.querySelector('form p');
    if (error != null) {
        error.remove();
    }

    try {
        if (valueInput === '')
            throw 'Titre de news vide';

    } catch(e) {
        console.error(e);
        errorArticle(form, 'Titre de news vide');
    }

    if (isUniqueArticle(valueInput)) {
        let article = document.createElement('article');
        let title = document.createElement('h3');
        let news = document.querySelector('#news');

        article.classList.add('test');
        title.classList.add('title');
        title.innerHTML = valueInput;

        article.append(title);
        news.append(article);
    } else {
        errorArticle(form,'Article non unique');
    }
}

function isUniqueArticle(valueInput) {
    let titles = document.querySelectorAll('h3.title');
    let return_func = true;
    titles.forEach(title => {
        if (valueInput === title.innerHTML)
            return_func = false;
    });
    return return_func;
}

function errorArticle(form, message){
    let error = document.querySelector('form p')
    if (error == null) {
        let errorParagraph = document.createElement('p');
        errorParagraph.innerText = message;
        errorParagraph.style.color = RED;
        form.prepend(errorParagraph);
    }
}