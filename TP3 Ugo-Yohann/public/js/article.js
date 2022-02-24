class Article {
    static idPrefix = 'article-';

    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;

        this.assertRequiredProperty();
    }

    createArticleHtml() {
        let news = $('#news');
        let newArticle = $('<article> </article>');
        let h3 = $('<h3> </h3>');
        let p = $('<p> </p>');
        let button = $('<button> </button>');
        
        h3.html(this.title).addClass('title');
        p.html(this.description);
        button.html('View detail');

        newArticle.attr('id',Article.idPrefix + this.id);

        this.bindButtonViewdetail(button, viewdetailClick);

        newArticle.append(h3).append(p).append(button);
        news.append(newArticle);
    }

    insertArticleHtml() {
        this.assertRequiredProperty();
        this.assertUnicity();

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback) {
        $(button).click(callback);
    }

    assertUnicity() {
        let h3s = $('.title');
        let classTitle = this.title;

        h3s.each(function(index) {
            if ($(this).html().toLowerCase().trim() === classTitle.toLowerCase().trim()) {
                throw new DuplicateArticleError();
            }
        })

        return true;
    }

    assertRequiredProperty() {
        if (this.title === '')
            throw new RequiredPropertyError();
    }
}