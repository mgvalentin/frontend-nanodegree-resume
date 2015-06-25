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

varAud = "audacity";
varUda = varAud.replace("au", "U");
$("#header").append(varUda);

$("#header").append("<BR><BR>");


var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
$("#header").append(s);



var skills = ["awesomeness", "programming", "teaching", "JS"];

$("#main").append(skills[0]);
$("#main").append("<BR><BR>");

$("#main").append(skills.length);

