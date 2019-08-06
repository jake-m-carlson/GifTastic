// Page loads w/ some buttons already entered
$(document).ready(function() {

// Array w/ preloaded button keywords
    var topics = ["Bali", "Mykonos", "Bora Bora", "Phuket", "Galapagos Islands"];
    console.log(topics);

    // function to display destination data
    function makeButton() {
        //removes destinations before adding new ones
        $("#buttons").empty();
        // for loop through array of destinations
        for (var i = 0; i < topics.length; i++) {
            // used to create butten beginning & end tags
            var a = $("<button>");
            // add class to button
            a.addClass("destinations");
            // add data attribute
            a.attr("data-name", topics[i]);
            // adding text to the button
            a.text(topics[i]);
            // add a button to the buttons div 
            $("#buttons").append(a);
            
        } console.log(a);
    } 

// when a word is typed in form a new button will populate
    $("#add-destination").on("click", function() {
        // save new destination in var topics
        var newDestination = $("#destination-input").val().trim();
        // add destination from input text
        topics.push(newDestination);
        // run makeButton function to make new button for new movie
        makeButton();
        event.preventDefault(); //***************** Diff from this or return false; ??? */
    })

// when a button is clicked, 10 gifs will appear as still images
    function displayGifs() {
        $("#images").empty();
        // api set up
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + destination + "&api_key=" + apiKey + "&limit=10";
        var destination = $(this).attr("data-name");
        var apiKey = "ePu4sAeJ3pnzZxSW4crhvYCK0zZwNzug";
        console.log(destination);
        displayGifs()
    } 
// each gif will have its rating displayed
// when a gif is clicked individually, it will be an active gif
// when a gif is clicked again it will be a still image

// 
// 
// 
// 
// 

    makeButton()
})

