// giphy API key LchkE5VhkPbCWLyn7rQOhBUigHCYklO7


//DONE: Create an array of strings, save it to a variable called topics
var topics = ["LeBron James", "Leehom Wang", "Steph Curry", "NBA Highlights", "Derrick Rose", "Red Hot Chili Peppers", "Jay Chou"];

//DONE: use a for loop and reate buttons in your HTML

for (i = 0; i < topics.length; i++) {
    var buttonDiv = $("<button>");
    buttonDiv.addClass("gif-btn")
    buttonDiv.attr("data-name", topics[i]);
    buttonDiv.text(topics[i]);
    $(".buttons-div").append(buttonDiv);
}


 $(".gif-btn").on("click", function(){


    var buttonData = $(this).attr("data-name");
     // from the GIPHy site
    // "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonData + "&api_key=LchkE5VhkPbCWLyn7rQOhBUigHCYklO7&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

        //DONE: grab URL of gif
        //DONE: grab title of gif
        //DONE: grab Rating of Gif

        //TODO: create a for loop for response.data.length
        for (i = 0; i<response.data.length; i++){
            console.log("URL of this GIF on click is: ", response.data[i].images.original.url);
            console.log("Title of this GIF on click is: ", response.data[i].title);
            console.log("Rating of this GIF on click is: ", response.data[i].rating);

            //TODO: set a variable gifDiv and have is create a div tag, then add class "gif" to it
            var gifDiv = $("<div>").addClass("gif")
            //Todo: create an image variable then have it create an img tag and give it a src attribute of the response data for url
            var imageTag = $("<img>").attr("src", response.data[i].images.original.url);
            //TODO: append the gifDiv and image variable to the #gifs-here ID
            $("#gifs-here").append(gifDiv, imageTag);
            //TODO: set a variable for Title
            var titleGif = $("<h2>").text("Title: " + response.data[i].title);
            //TODO: set a variable for the rating
            var ratingGif = $("<h3>").text("Rating: " + response.data[i].rating);
            $("#gifs-here").append(titleGif);
            $("#gifs-here").append(ratingGif);
        }

});

 });



















//TODO: When user clicks on a button, page should grab 10 static, non animated gif images from API

//TODO: When user clicks one of the still GIPHY images, gif should animate. 

//TODO: Under every gif, display its rating

//TODO: Add a form to your page takes the value from user input box and adds to array.  THen make a function call that takes each topic in the array remakes the buttons on the page