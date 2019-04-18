// giphy API key LchkE5VhkPbCWLyn7rQOhBUigHCYklO7
// var buttonData;
// var queryURL;

//DONE: Create an array of strings, save it to a variable called topics
var topics = ["Lebron James", "Leehom Wang", "Steph Curry", "NBA Highlights", "Derrick Rose", "Red Hot Chili Peppers", "Jay Chou"];


function displayEverything() {

    var buttonData = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonData + "&api_key=LchkE5VhkPbCWLyn7rQOhBUigHCYklO7&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        //DONE: grab URL of gif
        //DONE: grab title of gif
        //DONE: grab Rating of Gif

        //DONE: create a for loop for response.data.length
        for (i = 0; i < response.data.length; i++) {

            //DONE: set a variable gifDiv and have is create a div tag, then add class "gif" to it
            var gifDiv = $("<div>").addClass("gif")
            //DONE: create an image variable then have it create an img tag and give it a src attribute of the response data for url
            var imageTag = $("<img>").attr("src", response.data[i].images.original.url);
            //DONE: append the gifDiv and image variable to the #gifs-here ID
            $("#gifs-here").prepend(gifDiv, imageTag);
            //DONE: set a variable for Title
            var titleGif = $("<h2>").text("Title: " + response.data[i].title);
            //DONE: set a variable for the rating
            var ratingGif = $("<h3>").text("Rating: " + response.data[i].rating);
            $("#gifs-here").prepend(titleGif);
            $("#gifs-here").prepend(ratingGif);
        }

    });
};

//Function for displaying the buttons
function showButtons() {
    //Empty the buttons div before adding a new button
    $(".buttons-div").empty();
    //Looping thru the array
    for (i = 0; i < topics.length; i++) {
        var buttonDiv = $("<button>");
        buttonDiv.addClass("gif-btn")
        buttonDiv.attr("data-name", topics[i]);
        buttonDiv.text(topics[i]);
        $(".buttons-div").append(buttonDiv);
        console.log("the current added topics are: ", topics);
    }


}

function displayButtons() {
    for (i = 0; i < topics.length; i++) {
        var buttonDiv = $("<button>");
        buttonDiv.addClass("gif-btn")
        buttonDiv.attr("data-name", topics[i]);
        buttonDiv.text(topics[i]);
        $(".buttons-div").append(buttonDiv);
    }
};

displayButtons();






//This function will allow us to add to the array of movies when clicked
$("#add-gifs").on("click", function (event) {
    event.preventDefault();
    var addMovie = $("#button-input").val();
    topics.push(addMovie);
    //then call the showButtons function
    console.log(topics);
    showButtons();


});


//On click for each button will set the Global Variables to work.
// $(".gif-btn").on("click", function(){

//     });

//On Click events will run the displayEverything function   
$(document).on("click", ".gif-btn", displayEverything);


    //  displayEverything();

//  });



















//TODO: When user clicks on a button, page should grab 10 static, non animated gif images from API

//TODO: When user clicks one of the still GIPHY images, gif should animate. 

//TODO: Under every gif, display its rating

//TODO: Add a form to your page takes the value from user input box and adds to array.  THen make a function call that takes each topic in the array remakes the buttons on the page