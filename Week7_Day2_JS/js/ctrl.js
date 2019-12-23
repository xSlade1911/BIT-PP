const ctrlModule = (function (ui, data) {
    document.querySelector(".searchButton").addEventListener("click", onSearchHandler);

    function onSuccessHandler(myUsers) {

        ui.displayUsers(myUsers);

    }

    function onSearchHandler(event) {

        const inputText = ui.getSearchText();

        data.fetchUsers(inputText, onSuccessHandler);
    }

})(UIModule, dataModule)