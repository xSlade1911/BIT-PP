
class User {
    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
    }
}

function searchUser(name, callback) {
    const url = 'https://api.github.com/search/users?q=' + name;

    $.get(url, function (apiData) {
        const users = [];

        apiData.items.forEach(function (apiUser) {
            users.push(new User(apiUser.login, apiUser.avatar_url));
        });

        callback(users);
    });
}

export {
    searchUser
}