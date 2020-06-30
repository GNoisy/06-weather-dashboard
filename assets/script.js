$(document).ready(function () {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentDay").text(moment().format('MM/DD/YYYY'));
    // moment().calendar(referenceDay);

});

$("#add-city").on("click", function (event) {


    // var cityInput = $("#city-name").val();
    var cityInput = "Oakland";
    //five day forecast api key
    var APIKey = "21cb192c9ac239ad019084d15bf75466";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    
    

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

        //main section of html page
        $("#main-data").append("<h1>" + response.city.name + iconImage + "</h1>");
        // $("#main-data").append("<p>Current Conditions: " + iconImage + "</p>");
        $("#main-data").append("<div> <p><strong>Current Condition</strong>: " + response.list[0].weather[0].description + "</p> </div>");
        $("#main-data").append("<div> <p><strong>Temperature</strong>: " + response.list[0].main.temp + " &deg;F</p> </div>");
        $("#main-data").append("<div> <p><strong>Humdity</strong>: " + response.list[0].main.humidity + "%</p> </div>");
        $("#main-data").append("<div> <p><strong>Wind Speed</strong>: " + response.list[0].wind.speed + "</p> </div>");
        $("#main-data").append("<div> <p><strong>UV Index</strong>: " + "</p></div>");

        
        //five day forecast divs
        //div 1
        $("#fcast1").append("<p>Temp: " + response.list[1].main.temp + " &deg;F</p>");
        $("#fcast1").append("<p>Humdity: " + response.list[1].main.humidity + "%</p>");

        //div2
        $("#fcast2").append("<p>Temp: " + response.list[2].main.temp + " &deg;F</p>");
        $("#fcast2").append("<p>Humdity: " + response.list[2].main.humidity + "%</p>");

        //div3
        $("#fcast3").append("<p>Temp: " + response.list[3].main.temp + " &deg;F</p>");
        $("#fcast3").append("<p>Humdity: " + response.list[3].main.humidity + "%</p>");

        //div4
        $("#fcast4").append("<p>Temp: " + response.list[4].main.temp + " &deg;F</p>");
        $("#fcast4").append("<p>Humdity: " + response.list[4].main.humidity + "%</p>");

        //div4
        $("#fcast5").append("<p>Temp: " + response.list[5].main.temp + " &deg;F</p>");
        $("#fcast5").append("<p>Humdity: " + response.list[5].main.humidity + "%</p>");
    
        
        
    });

    // //uv index api key
    // // var uvIndexAPIKey = "68a5bd8b2cb505f15ab45ed0f4e63629";
    // var query2URL = "http://api.openweathermap.org/data/2.5/uvi?appid=68a5bd8b2cb505f15ab45ed0f4e63629&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "";

    // $.ajax({
    //     url: query2URL,
    //     method: "GET"
    //   }).then(function(response2) {
        

    //     console.log(response2);
        
        
    // });
        
    
    

       
})


    




