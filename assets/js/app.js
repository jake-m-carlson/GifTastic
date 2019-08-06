// Page loads w/ some buttons already entered
$(document).ready(function() {

// Array w/ preloaded button keywords
    var loadedDestinations = ["Bali", "Mykonos", "Bora Bora", "Phuket", "Galapagos Islands"];
    console.log(loadedDestinations);

    // function to display destination data
    function makeButton() {
        //removes destinations before adding new ones
        $("#buttons").empty();
        // for loop through array of destinations
        for (var i = 0; i < loadedDestinations.length; i++) {
            // used to create butten beginning & end tags
            var a = $("<button>");
            // add class to button
            a.addClass("destinations");
            // add data attribute
            a.attr("data-name", loadedDestinations[i]);
            // adding text to the button
            a.text(loadedDestinations[i]);
            // add a button to the buttons div 
            $("#buttons").append(a);
            
        } console.log(a);
    } 

// when a word is typed in form a new button will populate
    $("#add-destination").on("click", function() {
        // save new destination in var loadedDestinations
        var newDestination = $("#destination-input").val().trim();
        // add destination from input text
        loadedDestinations.push(newDestination);
        // run makeButton function to make new button for new movie
        makeButton();
        event.preventDefault(); //***************** Diff from this or return false; ??? */
    })
// when a button is clicked, 10 gifs will appear as still images
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

