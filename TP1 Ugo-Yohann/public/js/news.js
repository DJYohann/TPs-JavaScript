function addNews(){
    let valueInput = document.querySelector("input[name = 'titleToAdd']").value;
    let form = document.querySelector('#addNewsForm');

    form.action = "#";
    try {
        if(valueInput === '')
            throw 'Titre de news vide';

    } catch(e) {
        console.error(e);
        errorMessageArticle(form, 'Titre de news vide');
    }

    if (!verifyUniqArticle(valueInput)) {
        errorMessageArticle(form,'Article non unique');
        return;
    }
    let article = document.createElement('article');
    let title = document.createElement('h3');
    let news = document.querySelector('#news');

    article.classList.add('test');
    title.classList.add('title');
    title.innerHTML = valueInput;

    article.append(title);
    news.append(article);
}

function verifyUniqArticle(myTitle){
    let titles = document.querySelectorAll('h3.title');
    titles.forEach(title => {
        if (myTitle === title.textContent){
            return false;
        }
    });
    return true;
}

function errorMessageArticle(form, message){
    let errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorParagraph.style.color = RED;
    form.prepend(errorParagraph);
}