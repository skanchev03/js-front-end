function solve(input) {
    let users = new Set();
    let articles = new Set();
    let comments = {};

    for (let line of input) {

        if (line.startsWith("user ")) {
            let user = line.split("user ")[1];
            users.add(user);
        }

        else if (line.startsWith("article ")) {
            let article = line.split("article ")[1];
            articles.add(article);
        }

        else if (line.includes(" posts on ")) {
            let [left, right] = line.split(" posts on ");
            let username = left;

            let [articlePart, commentPart] = right.split(": ");
            let [title, content] = commentPart.split(", ");

            if (users.has(username) && articles.has(articlePart)) {

                if (!comments[articlePart]) {
                    comments[articlePart] = [];
                }

                comments[articlePart].push({
                    user: username,
                    title,
                    content
                });
            }
        }
    }

    let sortedArticles = Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length);

    for (let [article, arr] of sortedArticles) {
        console.log(`Comments on ${article}`);

        arr
            .sort((a, b) => a.user.localeCompare(b.user))
            .forEach(c => {
                console.log(`--- From user ${c.user}: ${c.title} - ${c.content}`);
            });
    }
}