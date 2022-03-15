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
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let button = document.createElement('button');
        let news = document.querySelector('#news');

        h3.innerHTML = this.title;
        p.innerHTML = this.description;
        button.innerHTML = 'View detail';
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.classList.add('title');
        newArticle.id = Article.idPrefix + this.id;

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    insertArticleHtml() {
        this.assertRequiredProperty();
        this.assertUnicity();

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback) {
        button.onclick = callback;
    }

    assertUnicity() {
        let h3s = document.querySelectorAll('.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new DuplicateArticleError();
            }
        }

        return true;
    }

    assertRequiredProperty() {
        if (this.title === '' || this.title === null)
            throw new RequiredPropertyError();
    }
}