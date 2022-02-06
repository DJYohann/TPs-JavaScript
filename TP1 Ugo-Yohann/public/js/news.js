function addNews() {
    let valueInput = document.querySelector("input[name = 'titleToAdd']").value;
    let form = document.querySelector('#addNewsForm');

    try {
        if (valueInput === '')
            throw 'Titre de news vide';

    } catch(e) {
        console.error(e);
        errorMessageArticle(form, 'Titre de news vide');
    }

    if (isUniqueArticle(form, valueInput)) {
        let article = document.createElement('article');
        let title = document.createElement('h3');
        let news = document.querySelector('#news');

        article.classList.add('test');
        title.classList.add('title');
        title.innerHTML = valueInput;

        article.append(title);
        news.append(article);
    }
}

function isUniqueArticle(form, myTitle){
    let titles = document.querySelectorAll('h3.title');
    console.log(titles)
    titles.forEach(title => {
        if (myTitle === title.textContent){
            errorMessageArticle(form,'Article non unique');
            return false;
        }
    });
    return true;
}

function errorMessageArticle(form, message){
    let error = document.querySelector('form p')
    if (error == null) {
        let errorParagraph = document.createElement('p');
        errorParagraph.innerText = message;
        errorParagraph.style.color = RED;
        form.prepend(errorParagraph);
    }
}