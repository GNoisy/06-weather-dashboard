$(document).ready(function () {

    console.log("hello");
    // var cityInput = $("#city-name").val();
    var cityInput = "Oakland";
    var APIKey = "21cb192c9ac239ad019084d15bf75466";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIKey;
    

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
        var iconcode = response.list[0].weather[0].icon;
        var iconURL = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
        
        

        $("#main-data").append("<h2>" + response.city.name + "</h2>");
        $("#main-data").append("<div> <p>Temperature: " + response.list[0].main.temp + "&deg;F</p> </div>");

        
    });

    
    

    

        

    
});


