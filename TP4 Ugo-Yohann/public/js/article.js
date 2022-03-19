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
        this.assertUnicity();
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

        if (this.description === '' || this.description === null)
            throw new RequiredPropertyError();
    }
}