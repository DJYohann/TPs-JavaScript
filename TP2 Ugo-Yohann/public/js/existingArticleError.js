class ExistingArticleError {
    message = 'L\'Article est déjà existant';

    toString() {
        return this.message;
    }
}