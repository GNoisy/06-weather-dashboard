$(document).ready(function () {

    // $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentDay").text(moment().format('DD/MM/YYYY'));
    // moment().calendar(referenceDay);

    console.log("hello");
    // var cityInput = $("#city-name").val();
    var cityInput = "Oakland";
    //five day forecast api key
    var APIKey = "21cb192c9ac239ad019084d15bf75466";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    
    //uv index api key
    var uvIndexAPIKey = "68a5bd8b2cb505f15ab45ed0f4e63629";

    // $("#add-city").on("click", function (event) {
        
    
    //     // ajax call for city input by user
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       }).then(function(response) {
            
  
    //         console.log(response);
    //         // Storing the rating data
    //         var rating = response.Rated;
  
            
    //     });

        
    // })

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        

        console.log(response);
        //var to target icon number in array
        var iconcode = response.list[0].weather[0].icon;
        // var iconURL = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
        var iconImage = "<img src='https://openweathermap.org/img/wn/" + iconcode + ".png'>"
        // <img src='https://openweathermap.org/img/wn/" + iconcode + ".png'>"

        $("#main-data").append("<h1>" + response.city.name + "</h1>");
        // $("#main-data").append("<p>Current Conditions: " + iconImage + "</p>");
        $("#main-data").append("<div> <p><strong>Current Condition</strong>: " + response.list[0].weather[0].description + "</p> </div>");
        $("#main-data").append("<div> <p><strong>Temperature</strong>: " + response.list[0].main.temp + " &deg;F</p> </div>");
        $("#main-data").append("<div> <p><strong>Humdity</strong>: " + response.list[0].main.humidity + "%</p> </div>");
        $("#main-data").append("<div> <p><strong>Wind Speed</strong>: " + response.list[0].wind.speed + "</p> </div>")

        
    });

    
    

    
 
        

    
});


