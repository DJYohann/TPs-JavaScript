class ArticleHtml {
	article;

    constructor(article) {
        this.article = article;
    }

	createHtml() {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let button = document.createElement('button');
        let news = document.querySelector('#news');

        newArticle.id = this.article.id;
        h3.innerHTML = this.article.title;
        p.innerHTML = this.article.desc;
        button.innerHTML = 'View detail';
        eventGetDescription(button);
        h3.classList.add('title');

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }
}