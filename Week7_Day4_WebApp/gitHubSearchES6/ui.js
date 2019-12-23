
var input = document.querySelector('#search-txt');

function getSearchText() {
    return input.value;
}

function printUsers(users) {
    // loop
    for (var i = 0; i < users.length; i++) {
        var oneuser = users[i];
        console.log(oneuser)
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute("src", oneuser.avatar);
        img.setAttribute("width", "200px");

        li.append(oneuser.name);
        li.append(img);
        var list = document.querySelector('ul').append(li);

    }
}

export {

    getSearchText,
    printUsers

}

        // create element
        // add content to element
        // append element to body