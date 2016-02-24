var comments = (function (doc) {

    var commentSummary = doc.getElementById('comment-summary');
    var submitButton = doc.querySelector('.js-submit');
    var usernameInput = doc.getElementById('username');
    var commentInput = doc.getElementById('comment');
    var errorSummary = doc.querySelector('.js-global-error');

    var resetInputs = function () {
        usernameInput.value = '';
        commentInput.value = '';
    };

    var buildComment = function () {
        var ul = doc.createElement('ul');
        var li = doc.createElement('li');
        var liUsername = li.cloneNode();
        var liComment = li.cloneNode();

        ul.className = 'comment';

        liUsername.textContent = usernameInput.value;
        liUsername.className = 'comment__name';
        liComment.textContent = commentInput.value;
        liComment.className = 'comment__description';

        ul.appendChild(liUsername);
        ul.appendChild(liComment);

        return ul;
    };

    var addListeners = function () {
        submitButton.addEventListener('click', function (event) {
            var comment;
            event.preventDefault();

            if (usernameInput.value === '' || commentInput.value === '') {
                errorSummary.classList.add('error-summary--show');
                errorSummary.textContent = 'You have an ERROR!!!!'
            } else {
                errorSummary.textContent = '';
                errorSummary.classList.remove('error-summary--show');

                comment = buildComment();
                resetInputs();

                if (commentSummary.firstChild) {
                    commentSummary.insertBefore(comment, commentSummary.firstChild);
                } else {
                    commentSummary.appendChild(comment);
                }
            }
        });
    };

    var init = function () {
        addListeners();
    };

    return {
        init: init
    };
})(document);
