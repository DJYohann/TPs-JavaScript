import ArticleNews from '/view/components/ArticleNews.js';

Vue.createApp({
    data() {
        return {
            title: 'News'
        }
    }
}).mount('h1');

Vue.createApp({
    data() {
        return {
            articles: this.getArticles(),
            message: null,
            titleToAdd: null,
            descriptionToAdd: null,
            formStyle: {
                color: null
            }
        }
    },
    computed: {
        getNbArticles() {
            return this.articles.length
        },
        displayNbArticles() {
            return this.getNbArticles >= 2 ? 'articles' : 'article'
        }
    },
    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON)
        },
        addArticle: function(event) {
            event.preventDefault();

            this.message = null;

            try {
                let articeToAdd = new Article(0, this.titleToAdd, this.descriptionToAdd);
                this.articles.push(articeToAdd);
                this.message = "L'article est bien ajouté";
                this.formStyle.color = '#0f0';
                this.titleToAdd = null;
                this.descriptionToAdd = null;
            } catch (e) {
                console.error(e.message);
                this.formStyle.color = '#f00';
                if (e instanceof RequiredPropertyError) {
                    this.message = 'Le titre ou la descritpion doit être renseigné';
                }
                if (e instanceof DuplicateArticleError) {
                    this.message = "L'article est déjà existant";
                }
            }
        }
    }
}).component('ArticleNews', ArticleNews).mount('#app');