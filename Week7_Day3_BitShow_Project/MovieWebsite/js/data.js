const dataModule = (function () {

    class Show {
        constructor(name, image, url, average) {
            this.name = name;
            this.image = image;
            this.url = url;
            this.average = average;

        }
    }

    function fetchShows(onSuccess) {
        const requestURL = `http://api.tvmaze.com/shows`;
        $.get(requestURL, function onDone(responseData) {

            const showsList = responseData;
            console.log(showsList);
            const myShows = [];

            for (let index = 0; index < 50; index++) {
                const showObj = showsList[index];
                const show = new Show(showObj.name, showObj.image.medium, showObj.url, showObj.rating.average);             //Ovako sortiramo podatke koje nam trebaju sa servera
                myShows.push(show);

            }
            console.log(myShows);
            onSuccess(myShows);


        })




    }
    return {

        fetchShows
    }
})();