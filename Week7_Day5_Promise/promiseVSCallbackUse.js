/* 
CALLBACKS
 */
function fetchShows(onSucess, onFailure) {

    $.get("url", function (response) {
        console.log("success");
        onSuccess(response);
    })

}

fetchShows(

    function (res) {
        console.log(res);
    }, function () { }

)

/* PROMISES */

function fetchShows() {

    return new Promise(function (resolve, reject) {
        $.get("url", function (response) {
            resolve(response)
        })
    })

}

fetchShows().then(function (res) {
    console.log(res);
}.catch(function (err) {

})

