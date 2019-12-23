const ctrlModule = (function (ui, data) {



    function onSuccessHandler(myShows) {

        ui.displayShows(myShows);

    }

    data.fetchShows(onSuccessHandler);


})(UIModule, dataModule)