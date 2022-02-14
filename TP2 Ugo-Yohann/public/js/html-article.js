function addArticle(title, desc) {
    try {
        clearErrors();

        let article = new Article(title, desc);
        let articleHtml = new ArticleHtml(article);

        articleHtml.createHtml();

        return true;
    } catch (e) {
        if (e instanceof EmptyTitleError)
            console.error(e.message);
        else if (e instanceof EmptyDescError)
            console.error(e.message);
        else if (e instanceof ExistingArticleError)
            console.error(e.message);
        else if (e instanceof ShortTitleError)
            console.error(e.message);
        else
            throw e;

        let form = document.querySelector('#addNewsForm');
        addError(e, form);

        return false;
    }
}

function eventGetDescription(button) {
    button.onclick = function() {
        let description = button.parentElement.querySelector('p');
        if (description !== null)
            logMessageWithDate(description.innerHTML);
    };
}