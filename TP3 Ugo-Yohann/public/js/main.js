$(function() {
    $('#tabs').tabs();
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
buttons.each(function() {
    $(this).click(viewdetailClick);
});

$.each(JSON.parse(ALLNEWSJSON), function(index, element) {
    console.log(element);

    try {
        let a = new Article(element.id, element.title, element.description);
        a.insertArticleHtml();
    } catch (e) {
        clearErrors();
        let form = $('#addNewsForm');

        if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
            addError(e.message, form);
        } else {
            addError('Une erreur inconnue est survenue !', form);
            console.error(e);
        }
    }
});


let url = 'https://newsdata.io/api/1/news?apikey=pub_49479ee12c7eecba9246a47865394fd27c82&language=fr&category=technology'
ajaxRequest(url);