class Article {
    static #NB_ID = 3;

    #id;
    title;
    desc;

    constructor(title,desc) {
        this.#assertRequiredField(title,desc);
        this.#assertUnicity(title);
        this.#id = PREFIX+Article.#NB_ID;
        this.title = title;
        this.desc = desc;

        Article.#NB_ID++;
    }

    #assertRequiredField(title,desc) {
        if(title === '')
            throw new EmptyTitleError();

        if(desc === '')
            throw new EmptyDescError

        if (title.length < 3)
            throw new ShortTitleError();
    }

    #assertUnicity(title) {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
                throw new ExistingArticleError();
            }
        }
        return true;
    }

    toString() {
        return 'ID : ' + this.#id + ' Title : ' + this.title + ' Desc : ' + this.desc;
    }
}