import * as ui from "./ui.js"
import * as data from "./data.js"

function onShowsSuccess(shows) {
    console.log("onShowsSuccess", shows);
    ui.displayShows(shows)
}

function init() {
    console.log("init", "My App init");
    data.searchShows(onShowsSuccess);
}



export {
    init
}

