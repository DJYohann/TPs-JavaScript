function ajaxRequest(url) {
    let settings = {
        'url': url,
        'method':'GET'
    }

    $.ajax(settings).done(function(data, textStatus, xhr) {
        console.log(data.results);
        logMessageWithDate("Code retour HTTP : " + xhr.status);
        logMessageWithDate("Message retour HTTP : " + textStatus);

        if (xhr.status >= 200 && xhr.status < 300) {
            $(data.results).each(function(index, result) {
                if(result['title'] !== null){
                    if (result['description'] !== null) {
                        let a = new Article(0, result.title, result.description);
                        a.insertArticleHtml();
                    } else if (result['full_description'] !== null) {
                        let a = new Article(0, result.title, result.full_description);
                        a.insertArticleHtml();
                    }   
                }
            });
        }
        if (xhr.status >= 300 && xhr.status < 400) {
            console.log("Redirection nécessaire");
        }
        if (xhr.status >= 400 && xhr.status < 500) {
            console.log("Erreur côté client");
        }
        if (xhr.status >= 500) {
            console.log("Erreur côté serveur");
        }
    }).fail(function(xhr, textStatus, error) {
        console.log('Fail');
        logMessageWithDate("Code retour HTTP : " + xhr.status);
        logMessageWithDate("Message retour HTTP : " + textStatus);
        throw new Error(error);
})};