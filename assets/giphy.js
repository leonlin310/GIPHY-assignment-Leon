// giphy API key LchkE5VhkPbCWLyn7rQOhBUigHCYklO7


//DONE: Create an array of strings, save it to a variable called topics
var topics = ["LeBron James", "Kevin Durant", "Steph Curry", "NBA Highlights", "Derrick Rose", "Red Hot Chili Peppers", "Jay Chou"];

//DONE: use a for loop and reate buttons in your HTML

for (i = 0; i < topics.length; i++) {
    var buttonDiv = $("<button>");
    buttonDiv.text(topics[i]);
    $(".buttons-div").append(buttonDiv);
}







//TODO: When user clicks on a button, page should grab 10 static, non animated gif images from API

//TODO: When user clicks one of the still GIPHY images, gif should animate. 

//TODO: Under every gif, display its rating

//TODO: Add a form to your page takes the value from user input box and adds to array.  THen make a function call that takes each topic in the array remakes the buttons on the page