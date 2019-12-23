


var search = document.querySelector('.search')


const $container = document.querySelector(".container")


function displayShows(shows) {
    console.log("ui", "displayShows", shows);

    for (var i = 0; i < shows.length; i++) {
        var oneShow = shows[i];
        var card = document.createElement('div');

        var img = document.createElement('img');
        var title = document.createElement('p');
        img.setAttribute('src', oneShow.cover)


        img.className = "coverImg"
        title.textContent = oneShow.name


        card.appendChild(img);
        card.appendChild(title);


        $container.appendChild(card)

        $('.coverImg').on("click", function () {
            $('.container').remove();

        })



    }



}


export {
    displayShows

}