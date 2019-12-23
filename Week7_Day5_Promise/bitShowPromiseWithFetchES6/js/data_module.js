class Show {
    constructor(name, id, posterUrl, description, rating) {
        this.name = name;
        this.id = id;
        this.posterUrl = posterUrl;
        this.description = description;
        this.rating = rating;
    }

    getShowName() {
        return `${this.name}`;
    }
}
class Season {
    constructor(startDate, endDate, numOfSeasons) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.numOfSeasons = numOfSeasons;
    }
    getStartDateEndDate() {
        return `${this.startDate} - ${this.endDate}`;
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Actor extends Person {
    constructor(name) {
        super(name);
    }
}

const url = {
    shows: `http://api.tvmaze.com/shows`,
    // seasonsAndCast: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
}

export const fetchShow = () => {

    return fetch(url.shows)
        .then(response => {
            /* console.log(response.json()); */
            return response.json();
        })
        .then(myResponse => {
            const listOfAllShows = [];
            myResponse.map(show => {
                const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
                listOfAllShows.push(createdShow);
            })
            listOfAllShows.sort((a, b) => {
                a = a.rating.average;
                b = b.rating.average;
                return b - a;
            })
            const top50Shows = listOfAllShows.slice(0, 50);
            return top50Shows;
        })
}
export const setLocalStorage = (id) => {
    localStorage.setItem("id", id);
    return id;
}

export const fetchSeasonsAndCast = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(response => {
            return response.json();
        })
        .then(myResponse => {
            const listOfActors = [];
            const listOfSeasons = [];
            const seasonsArray = myResponse._embedded.seasons;
            const castArray = myResponse._embedded.cast;
            seasonsArray.map(item => {

                const createdSeason = new Season(item.premiereDate, item.endDate, item.length);
                listOfSeasons.push(createdSeason);
            })
            castArray.map(item => {
                const createdPerson = new Person(item.person.name)
                const createdActor = new Actor(createdPerson);
                listOfActors.push(createdActor);
            })
            const clickedShow = new Show(myResponse.name, myResponse.id, myResponse.image.original, myResponse.summary, myResponse.rating.average);
            return {
                listOfActors,
                listOfSeasons,
                clickedShow
            }
        })
}

export const fetchSearchShows = (searchValue) => {
    return fetch(url.shows)
        .then(response => {
            console.log(response.json());
            return response.json()
        })
        .then(myResponse => {
            const listOfAllShows = [];
            const listOfSearchedSuggestions = [];
            myResponse.map(show => {
                const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
                listOfAllShows.push(createdShow);
            })
            listOfAllShows.forEach(show => {
                const lowerCasedName = show.name.toLowerCase();
                if (lowerCasedName.includes(searchValue)) {
                    listOfSearchedSuggestions.push(show);
                }
            })
            const slicedList = listOfSearchedSuggestions.slice(0, 10);
            return slicedList;
        })
}

