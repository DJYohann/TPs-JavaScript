class DuplicateArticleError {
    message = 'Article déjà existant';

    toString() {
        return this.message;
    }
}