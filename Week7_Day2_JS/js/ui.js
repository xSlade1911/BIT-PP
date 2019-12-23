const UIModule = (function () {

    const $searchInput = document.querySelector(".inputText");
    const $searchResult = document.querySelector(".search-results");


    function displayUsers(users) {

        users.forEach(function (user) {
            const li = $(`<li>`);

            const img = $(`<img>`);
            img.attr("src", user.image);
            li.append(img);

            const p = $('<p>');
            p.text(user.username);
            li.append(p);

            const p2 = $('<p>');
            p2.text(user.id);
            li.append(p2);



            $($searchResult).append(li);
        })


    };



    function getSearchText() {

        return $searchInput.value;

    }




    return {
        getSearchText,
        displayUsers
    }



})();