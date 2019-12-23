class Show {
    constructor(id, name, posterURL, seasons, cast, details) {
        this.id = id;
        this.name = name;
        this.posterURL = posterURL;
        this.seasons = seasons;
        this.cast = cast;
        this.details = details;
    }
}

class Season {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    getInfo() {
        return `${this.startDate.formatDate()} - ${this.endDate.formatDate()}`;
    }
}

class Actor {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return this.name;
    }
}

Date.prototype.formatDate = function () {
    return `${this.getDate()}.${this.getMonth()}.${this.getFullYear()}`;
}
