$(document).ready(function () {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().format('MM/DD/YYYY'));
    // moment().calendar(referenceDay);
    var localStorageLocations = localStorage.getItem("locations");
    var locations = JSON.parse(localStorageLocations);
    if (Array.isArray(locations)) {
      $("#searchedLocations").html("");
      for (var i = 0; i < locations.length; i++){
        $("#searchedLocations").append("<li>" + locations[i] + "</li>")
      }
    }

});

$("#add-city").on("click", function (event) {


    var cityInput = $("#city-name").val();

    var localStorageLocations = localStorage.getItem("locations");
    var locations = JSON.parse(localStorageLocations);
    if (Array.isArray(locations)) {
      locations.push(cityInput);
    } else {
      locations = [cityInput];
    }
    localStorage.setItem("locations", JSON.stringify(locations));
    
    $("#searchedLocations").html("");
    for (var i = 0; i < locations.length; i++){
      $("#searchedLocations").append("<li>" + locations[i] + "</li>")
    }
   
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

        var iconcode = response.list[0].weather[0].icon;
        var iconImage =
        "<img src='http://openweathermap.org/img/w/" + iconcode + ".png'>";
        
        //Main header info//
        var name = response.city.name;
        var date = "(" + moment().format("MM/DD/YYYY") + ")";
        var headerHTML = name + " " + date + " " + iconImage;
        $("#city-header").html(headerHTML);

        var temp = response.list[0].main.temp;
        $("#city-temp").text("Temperature: " + temp + "° F");

        var h = response.list[0].main.humidity;
        $("#city-humidity").text("Humidity: " + h + "%");

        var windSpeed = response.list[0].wind.speed;
        $("#city-wind").text("Wind Speed: " + windSpeed + " MPH");
        //end main header//
        
        
        //First of 5 day forecast card//
        var date1 = moment().add(1, "days").format("MM/DD/YYYY");
        $("#date1").text(date1);
  
        var temp1 = "Temp: " + response.list[1].main.temp;
        var humidity1 = "Humidity: " + response.list[1].main.humidity;
  
        $("#date1-temp").text(temp1 + "° F");
        $("#date1-humidity").text(humidity1 + "%");
  
        var iconcode1 = response.list[1].weather[0].icon;
        var icon1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
        $("#date1-img").attr("src", icon1);
        //end of first 5 day forecast card//


        //second of 5 day forecast card//
        var date2 = moment().add(2, "days").format("MM/DD/YYYY");
        $("#date2").text(date2);
  
        var temp2 = "Temp: " + response.list[2].main.temp;
        var humidity2 = "Humidity: " + response.list[2].main.humidity;
  
        $("#date2-temp").text(temp2 + "° F");
        $("#date2-humidity").text(humidity2 + "%");
  
        var iconcode2 = response.list[2].weather[0].icon;
        var icon2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
        $("#date2-img").attr("src", icon2);
        //end of second day forecast card


        //third of 5 day forecast card//
        var date3 = moment().add(3, "days").format("MM/DD/YYYY");
        $("#date3").text(date3);
  
        var temp3 = "Temp: " + response.list[3].main.temp;
        var humidity3 = "Humidity: " + response.list[3].main.humidity;
  
        $("#date3-temp").text(temp3 + "° F");
        $("#date3-humidity").text(humidity3 + "%");
  
        var iconcode3 = response.list[3].weather[0].icon;
        var icon3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
        $("#date3-img").attr("src", icon3);
        //end of third day card//


        //fourth of 5 day forecast card//
        var date4 = moment().add(4, "days").format("MM/DD/YYYY");
        $("#date4").text(date4);
  
        var temp4 = "Temp: " + response.list[4].main.temp;
        var humidity4 = "Humidity: " + response.list[4].main.humidity;
  
        $("#date4-temp").text(temp4 + "° F");
        $("#date4-humidity").text(humidity4 + "%");
  
        var iconcode4 = response.list[4].weather[0].icon;
        var icon4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
        $("#date4-img").attr("src", icon4);
        //end of fourth day card//


        //fifth of 5 day forecast card//
        var date5 = moment().add(5, "days").format("MM/DD/YYYY");
        $("#date5").text(date5);
  
        var temp5 = "Temp: " + response.list[5].main.temp;
        var humidity5 = "Humidity: " + response.list[5].main.humidity;
  
        $("#date5-temp").text(temp5 + "° F");
        $("#date5-humidity").text(humidity5 + "%");
  
        var iconcode5 = response.list[5].weather[0].icon;
        var icon5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
        $("#date5-img").attr("src", icon5);
        //end of fifth day card//
        
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


    




