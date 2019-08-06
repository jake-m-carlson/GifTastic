// Page loads w/ some buttons already entered
$(document).ready(function () {

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
    $("#add-destination").on("click", function () {
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
        // fixed error issue w/ wrong url undefined, var have to be in order
        // ie queryURL has to be after apikey & destination, otherwise won't work
        var destination = $(this).attr("data-name");
        var apiKey = "ePu4sAeJ3pnzZxSW4crhvYCK0zZwNzug";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + destination + "&api_key=" + apiKey + "&limit=10";
        console.log(destination);

        // ajax request
        $.ajax({
            url: queryURL,
            method: "GET"
            // generate list of 10 gifs of selected button keyword
        }).done(function (response) {
            // isolate only the data of each gif 
            console.log(response.data);
            // create var of the array made by button selection 
            var destinationResult = response.data;

            // create for loop for the array made
            for (var i = 0; i < destinationResult.length; i++) {
                // actually set up gif to display
                // new var to create new div w/ class of places
                var destinationDiv = $("<div class=places>");
                // new var for the image
                var destinationGif = $("<img>");
                // print out gifs from the api array as still image
                destinationGif.attr('src', destinationResult[i].images.fixed_height_still.url);
                // assign still attr to gif
                destinationGif.attr('data-still', destinationResult[i].images.fixed_height_still.url);
                // assign animated attr to gif
                destinationGif.attr('data-animate', destinationResult[i].images.fixed_height.url);
                // asign data-state to still
                destinationGif.attr("data-state", "still");
                // add class to images
                destinationGif.addClass('gif');
                // append to html
                destinationDiv.append(destinationGif)

                // each gif will have its rating displayed
                // new var for rating
                var rating = destinationResult[i].rating
                // this var creates p tag to place rating
                var destinationRating = $("<p>").text("Rating: " + rating);
                destinationDiv.append(destinationRating)

                // print new desinationDiv to the #images div on html
                // it will include the rating, image, and the new div that was created
                $("#images").prepend(destinationDiv);
            } //console.log(destinationResult[i].images.fixed_height_still.url);
        })
    }

    // when a gif is clicked individually, it will be an active gif
    // on click event when a class gif img is clicked function will run
    $(document).on('click', '.gif', function () {
        // call on attr value "data-state"
        var state = $(this).attr('data-state');
        // create if/ else , to change attr state
        // if state is still, change attr to animated 
        if (state === 'stil') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }
        // when a gif is clicked again it will be a still image
        // else set src to still 
        else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    })

    // Listener created for click event to all .destinations elements
    $(document).on("click", ".destinations", displayGifs);
    // Calls makeButton function to display starting buttons
    makeButton()
})

