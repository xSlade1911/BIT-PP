import * as ui from './ui_module.js';
import * as data from './data_module.js';

/* function characterInfoHandler(event) {
  if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
    event.preventDefault();
    data.setLocalStorage(event.target.id);
    location.href = './character_info.html';
  }
} */

/* function searchHandler(event) {
  const searchValue = $(`.search-box`).val();
  data.fetchSearchShows(searchValue)
  .then(ui.displaySearchList);
} */

export const init = () => {
  data.fetchCharacter()
  .then(ui.display20)
  .catch(ui.failed);

}

/*   $(`body`).on("click", characterInfoHandler);
/*   $(`.search-box`).on("keyup", searchHandler); */
/*   const id = localStorage.getItem("id"); */

/*  data.fetchSeasonsAndCast(id)
  .then(ui.displayOnShowInfo);
} */