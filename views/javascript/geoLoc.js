$(document).ready(function(){
    
  // $.getJSON("https://api.wunderground.com/api/c451ff398a91d3b1/forecast/conditions/q/autoip.json", function(data){
  //   console.log("Yahooo", data.current_observation.display_location.city);
  //   // console.log("Yahooo", data.current_observation);
  //   $(".modal-title").append("<h2><b>WAIT! SPECIAL OFFER FOR " +  "<span class='city'>" + data.current_observation.display_location.city.toUpperCase() + "</span>" + " RESIDENTS...</b></h2><br><img id='content' src='imges/redArrow.png'><h1><b>Claim your instant discount before the timer runs out!</b></h1>") 
  // })
  $.getJSON("https://freegeoip.net/json/", function(data){
    console.log("Buhooo", data.city);
    // console.log("Yahooo", data.current_observation);
    $(".modal-title").append("<br><h2><b>WAIT! SPECIAL OFFER FOR " +  "<span class='city'>" + data.city.toUpperCase() + "</span>" + " RESIDENTS...</b></h2><br><img id='content' src='imges/redArrow.png'><h1><b>Claim your instant discount before the timer runs out!</b></h1>") 
  })

});