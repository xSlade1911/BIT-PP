((data, ui) => {

    $(() => {

        data.fetchShows(data.baseEndpoint, createHomepageCallback, ui.displayError);

        $(ui.selectors.searchInput).on("keyup", () => {

            let currentValueSearch = ui.searchByValueURL();
            console.log(currentValueSearch);
            data.fetchShows(currentValueSearch, createDropdownCallback, ui.displayError);


        })
        $(ui.selectors.searchInput).on("submit", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                data.fetchShows(currentValueSearch, createSearchPage, ui.displayError);
            }
        })
    })


    // CALLBACK FUNCTIONS
    const createHomepageCallback = (response) => {
        console.log(response);
        const topShows = response.filter(element => parseFloat(element.rating.average) > 8.3).slice(0, 50);
        ui.createHomePage(topShows);

        $(ui.selectors.card).on("click", function () {
            const singleSearchUrl = ui.generateURL(this.id);

            createShowPageOnSelect(singleSearchUrl);
        });
    }

        const createSearchPage = (response) => {
        console.log(response);

        const resultShows = response.slice(0, 50);
        ui.createHomePage(resultShows);

        $(ui.selectors.card).on("click", function () {
            const singleSearchUrl = ui.generateURL(this.id);

            createShowPageOnSelect(singleSearchUrl);
        });
    }
 
    const createDropdownCallback = (response) => {
        console.log(response);
        ui.createDropDownList(response);

        $(".dropdown li").on("click", function (e) {
            e.stopPropagation();

            const singleSearchUrl = ui.generateURL(this.id);

            createShowPageOnSelect(singleSearchUrl);
        })

        $(ui.selectors.searchInput).on("blur", () => {
            setTimeout(() => {
                $(".dropdown").css("display", "none");
            }, 150);
        })
    }

    const createShowPageOnSelect = (singleSearchUrl) => {
        data.fetchShows(singleSearchUrl, pageCreationCallback, ui.displayError);
      /*   console.log(this.id);
        ui.createShowPage(this.id); */
    }

    const pageCreationCallback = (({ id, name, image, _embedded, summary }) => {
        // if (JSON.parse(localStorage.getItem(this.id))){
        //     const show = JSON.parse(localStorage.getItem(this.id));
        // } else {
        //     const show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
        // }
        const show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
        ui.createShowPage(show);
    })

})(dataModule, uiModule);