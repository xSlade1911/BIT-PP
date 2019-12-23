const dataModule = (function () {

    class User {
        constructor(id, username, image) {
            this.id = id;
            this.username = username;
            this.image = image;
        }
    }

    function fetchUsers(searchText, onSuccess) {
        const requestURL = `https://api.github.com/search/users?q=${searchText}`;
        $.get(requestURL, function onDone(responseData) {

            const usersList = responseData.items;
            console.log(usersList);
            const myUsers = [];
            for (let index = 0; index < usersList.length; index++) {
                const userObj = usersList[index];
                const user = new User(userObj.id, userObj.login, userObj.avatar_url);                                   //Ovako sortiramo podatke koje nam trebaju sa servera
                myUsers.push(user);

            }

            onSuccess(myUsers);


        })




    }
    return {

        fetchUsers
    }
})();