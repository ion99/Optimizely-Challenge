$(document).ready(function(){
    
  $.getJSON("https://api.wunderground.com/api/c451ff398a91d3b1/forecast/conditions/q/autoip.json", function(data){
    console.log("Yahooo", data.current_observation.display_location.full);
    $(".modal-title").append("<h2><b>WAIT! SPECIAL OFFER FOR " +  "<span class='city'>" + data.current_observation.display_location.full + "</span>" + " RESIDENTS...</b></h2><h1><b>Claim your instant discount before the timer runs out!</b></h1>") 
  })

});