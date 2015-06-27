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

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

var varFirstname = "mIcHaEl"
var varLastname = "Valentin"
// output should display Michael VALENTIN

var finalName = varFirstname[0].toUpperCase() + varFirstname.slice(1).toLowerCase() + " " + varLastname.toUpperCase();

$("#main").append("<BR><BR>");

$("#main").append(finalName);



var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    varTempName = finalName.split(' ');
    varFirstname = varTempName[0];
    varLastname = varTempName[1];
    var finalName = varFirstname[0].toUpperCase() + varFirstname.slice(1).toLowerCase() + " " + varLastname.toUpperCase();

//output should display Albert EINSTEIN
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

//alternatively
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}


var bio = {
    "name" : "Michael Valentin", 
    "role" : "Consultant", 
    "contact_info" : "212.555.1212",
    "pic_url" : "images/fry.jpg",
    "welcome_message" : "Hello from Michael",
    "skills" : skills
};

$("#main").append("<BR><BR>");
$("#main").append("BIO Section");
$("#main").append("<BR><BR>");

$("#main").append(bio.name);
$("#main").append("<BR>");
$("#main").append(bio.role);
$("#main").append("<BR>");
$("#main").append(bio.contact_info);
$("#main").append("<BR>");
$("#main").append(bio.pic_url);
$("#main").append("<BR>");
$("#main").append(bio.welcome_message);
$("#main").append("<BR>");
$("#main").append(bio.skills.join(' '));
$("#main").append("<BR><BR><BR>");

var work = {};
work.current_position = "VP";
work.current_employer = "Cablevision";
work.years_worked = "7";
work.city = "Bethpage";

var education = {
"Last_School" : "Pace",
"Years_Attended" : "1988 - 1990",
"city" : "New York"
};

$("#main").append(work["current_position"]);
$("#main").append("<BR>");
$("#main").append(education.Last_School);
$("#main").append("<BR><BR><BR>");






