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

            console.log(this.titleToAdd);
            this.message = null;

            let articeToAdd = new Article(0, this.titleToAdd, this.descriptionToAdd);
            try {
                this.articles.push(articeToAdd);
                this.message = "L'article est bien ajouté";
                this.formStyle.color = '#0f0';
            } catch (e) {
                if (e instanceof RequiredPropertyError) {
                    console.error(e.message);
                    this.message = 'Le titre ou la descritpion doit être renseigné';
                    this.formStyle.color = '#f00';
                }
            }

            this.titleToAdd = null;
            this.descriptionToAdd = null;
        }
    }
}).component('ArticleNews', ArticleNews).mount('#app');