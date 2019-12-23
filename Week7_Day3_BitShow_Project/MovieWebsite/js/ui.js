const UIModule = (function () {

    const $content = document.querySelector(".content");

    function displayShows(shows) {

        shows.forEach(function (show) {
            const div = $(`<div>`);

            const img = $(`<img>`);
            img.attr("src", show.image);
            div.append(img);

            const p = $('<p>');
            p.text(show.name);
            div.append(p);


            $($content).append(div);
        })


    };





    return {

        displayShows

    }



})();