import * as ui from "./ui.js"
import * as data from "./data.js"


function onSuccess(users) {
    ui.printUsers(users)
}

function search() {
    var res = ui.getSearchText();
    data.searchUser(res, onSuccess);
}

const init = () => {

    const button = document.querySelector('.search-but');
    button.addEventListener("click", search);

}

export { init }

