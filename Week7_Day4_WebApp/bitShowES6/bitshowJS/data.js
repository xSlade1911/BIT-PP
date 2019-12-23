
class Shows {
    constructor(name, cover, id) {
        this.name = name;
        this.cover = cover;
        this.id = id;
    }
}

function searchShows(onShowsCallback) {
    console.log("data:", "searchShows");
    const url = 'http://api.tvmaze.com/shows';
    $.get(url, function (apiData) {
        console.log("data:", "$get");
        const shows = [];
        const showsList = apiData;
        console.log();
        showsList.forEach(function (apiShow) {
            shows.push(new Shows(apiShow.name, apiShow.image.medium, apiShow.id));
        });
        onShowsCallback(shows.slice(0, 50));
    })
}

export {
    searchShows
}


