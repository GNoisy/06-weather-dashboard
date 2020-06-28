$(document).ready(function () {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });


    $("#add-cty").on('submit', function (event) {
        event.preventDefault();
    
        var cityInput = $("#city-name").val();
        var APIKey = "21cb192c9ac239ad019084d15bf75466";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIKey;

        // ajax call for city input by user
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            
  
            console.log(response);
            // Storing the rating data
            var rating = response.Rated;
  
            
          });

        
    })

        

    
});


