export default {
    props: {
        articles: Array,
        article: Object,
    },
    methods: {
        viewDetailArticle(article) {
            console.log(article.description)
        },
        deleteArticle(index) {
            this.articles.splice(index, 1)
        }
    },
    template: `
        <article id="key.id">
            <h3 class="title">{{ article.title }}</h3>
            <button @click="deleteArticle(index)">Supprimer</button>
            <p>{{ article.description }}</p>
            <button @click="viewDetailArticle(article)">View detail</button>
        </article>`
}