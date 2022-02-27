let searchButton = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

let ui = new UI();


searchButton.addEventListener("click" , (event) => {

let userText = searchUser.value;

if(userText != ''){

    //alert(userText);

    // Fetch API-

    fetch(`https://api.github.com/users/${userText}`)

    .then( result => result.json() )
    .then(data => {


        //console.log(data);

        if(data.message == 'Not Found') {

            //show alert
        } else {

            //show profile
            ui.showProfile(data);
        }
    })


} else {
    

    // clear profile
}

});