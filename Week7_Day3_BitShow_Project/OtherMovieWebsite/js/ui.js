const uiModule = (() => {

    const selectors = {
        searchInput: ".search-input",
        card: ".card",
        row: ".row",
    }
    
    const generateSingleSearchURL = showID => `http://api.tvmaze.com/shows/${showID}?embed[]=seasons&embed[]=cast`;

    const searchByValueURL = () => {

        let searchValue = $(selectors.searchInput).val();

        return `http://api.tvmaze.com/search/shows?q=${searchValue}`;
    };

    const displayError = () => {
        alert("something went wrong");
    }

    const createHomePage = listOfShows => {
        const row = $(".row");
        listOfShows.forEach(({ name, image, id }) => {
            row.append(`
            <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100" id="${id}">
                    <img class="card-img-top" src=${image.medium} alt="${name}">
                    <div class="card-body">
                        <h4 class="card-title">${name}</h4>
                    </div>
                </div>
            </div>
          `);
        });
    }

    const createShowPage = ({ seasons, name, posterURL, details, cast }) => {
        console.log({ seasons, name, posterURL, details, cast });
        $(selectors.row).children().remove();

        $("h1").text(name).css("text-align", "center");

        let seasonsList = seasons.map(season => `<li>${season.getInfo()}</li>`).join("");
        let castList = cast.map(actor => `<li>${actor.name}</li>`).join("");

        $(selectors.row).append(`
            <img src=${posterURL} class="col-sm-6">
            <div class="row col-sm-6">
                <h2 class="col-sm-12">Seasons (${seasons.length})</h2>
                <ul class="col">
                    ${seasonsList}
                </ul>
                <h2 class="col-sm-12">Cast:</h2>
                <ul class="col">
                    ${castList}
                </ul>
            </div>
            <div col>
                <h2 col>Show Details</h2>
                ${details}
            </div>
        `)
    }

    const createDropDownList = searchResults => {
        console.log(searchResults);
        let listOfShows = searchResults.map(({ show }) => `<li id="${show.id}">${show.name}</li>`).join("");
        $(".dropdown ul").children().remove();
        $(".dropdown").css("display", "block");
        $(".dropdown ul").append(listOfShows);
    }


    return {
        selectors,
        generateURL: generateSingleSearchURL,
        searchByValueURL,
        displayError,
        createHomePage,
        createShowPage,
        createDropDownList,
    }
})();