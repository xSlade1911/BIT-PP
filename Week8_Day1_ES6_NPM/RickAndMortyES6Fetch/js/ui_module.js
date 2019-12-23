

// export const $searchInput = $(`.search-box`);

export const display20 = (list) => {
    const $mainContainer = $(`.main`);
    const $row = $(`<div class='row'>`);

    list.forEach(character => {
        console.log(character);
        const $card = $(`
                <div class='col-12 col-md-6 col-lg-4 character' id='${character.id}'>
                    <a href='#'>
                        <img src='${character.image}' id='${character.id}'>
                        <h3 class='character-title' id='${character.id}'>${character.name}</h3>
                        <button class="btn-secondary like-review">
                        <i class="fa fa-heart" aria-hidden="true"></i> Like
                      </button>
                    </a>
                </div>
                `)
        $mainContainer.append($row);
        $row.append($card);
    })
};

export const failed = () => {
    alert(`Something went wrong`);
};

export const displayOnCharacterInfo = ({clickedCharacter, listOfSeasons, listOfActors}) => {
    const $mainContainer = $(`#show-character-main`)
    const $chosenCharacterTitle = $(`<h3>${clickedCharacter.name}</h3>`)
    const $ulSeasons = $(`<ul>`);
    const $seasonsTitle = $(`<h4 class='characterTitle'>`);
    const $ulACtors = $(`<ul>`);
    listOfSeasons.forEach(season => {
        const $li = $(`<li>`);
        $li.text(`${season.startDate} - ${season.endDate}`);
        $ulSeasons.append($li);
    })
    listOfActors.forEach(actor => {
        const $liActors = $(`<li>`);
        $liActors.text(`${actor.name.name}`);
        $ulACtors.append($liActors);
    })
    const $infoDisplay = $(`
            <div class='row poster-and-lists'>
                <div class='col-12 col-md-6'>
                    <img src='${clickedShow.posterUrl}' id='${clickedShow.id}' class='info-img'>
                </div>
                <div class='col-12 col-md-6'>
                    <div class='row'> 
                        <div class='col-12'>
                        <h4>Seasons (${listOfSeasons.length})</h4>
                            <ul class='seasons'>
                                ${$ulSeasons.html()}
                            </ul>
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-12'>
                            <h4 class='cast'>Cast</h4>
                            <ul class='actors'>
                                ${$ulACtors.html()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row description'>
                <div class='col-12'>
                    ${clickedShow.description}
                </div>
            </div>
            `);
    $mainContainer.append($chosenShowTitle);
    $mainContainer.append($infoDisplay);
};

export const displaySearchList = (listToDisplay) => {
    const $searchDiv = $(`.search-dropdown`);
    $searchDiv.css("display", "block")
    const $ulSearch = $(`.dropdown-ul`);
    $ulSearch.empty();
    listToDisplay.forEach(show => {
        const $liSearch = $(`
                    <li >
                        <a href='#' id='${show.id}'> ${show.name}</a>
                    </li>
                `);

        $ulSearch.append($liSearch);
    })

};

export const reset = () => {
    $(`.search-box`).val("");
    $(`.dropdown-ul`).empty();
};



