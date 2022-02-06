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

    if (verifyUniqArticle(form, valueInput) == true && valueInput != '') {
        console.log('faut pas ');
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

function verifyUniqArticle(form, myTitle){
    let titles = document.querySelectorAll('h3.title');

    titles.forEach(title => {
        console.log(myTitle + ' ' +title.textContent);
        if (myTitle === title.textContent){
            console.log('ok');
            errorMessageArticle(form,'Article non unique');
            return false;
        }
    });
    return true;
}

function errorMessageArticle(form, message){
    console.log('içi');
    let errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorParagraph.style.color = RED;
    form.prepend(errorParagraph);
}