//var awesomeThoughts = "I am Michael and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);
//console.log(awesomeThoughts);
//console.log(funThoughts);

varName = "Michael G. Valentin"
varRole = "Chief cook and bottle washer!"
var formattedName = HTMLheaderName.replace("%data%", varName);
var formattedRole = HTMLheaderRole.replace("%data%", varRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//$("#header").append(formattedRole);

