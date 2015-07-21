//updated js prior to flow control lesson

// work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

var work = {
    "jobs" : [
        {
            "employer" : "Cablevision",
            "title" : "VP",
            "location" : "Bethpage",
            "dates" : "2008 - 2015",
            "description" : "Responsible for all web application development"
        },
        {
            "employer" : "MGV",
            "title" : "Owner",
            "location" : "Bellmore",
            "dates" : "2004 - 2008",
            "description" : "Project management services to various clients"
        }
    ]
};

// projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

var projects = {
    "project" : [
        {
            "title" : "OMS",
            "dates" : "2008 - 2013",
            "description" : "New OCAP based STB",
            "images" : ["/images/project1.jpg", "/images/project2.jpg"]
        },
        {
            "title" : ".NET",
            "dates" : "2013 - 2015",
            "description" : "Agile transformation for web development",
            "images" : ["/images/project3.jpg", "/images/project4.jpg"]
        }
    ]
};


// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.


var bio = {
     "name" : "Michael Valentin",
     "role" : "VP",
     "welcomeMessage" : "Welcome to my resume", 
     "skills" : ["management", "csm", "cspo", "pmp", "dev ops"],
     "biopic" : "images/fry.jpg",
     "contacts" : [
        {
            "mobile" : "212.555.1212",
            "email" : "me@me.com",
            "github" : "githubusername", 
            "twitter" : "@twittername",
            "location" : "New York, NY"    
        }
    ]
};


// education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

var education = {
    "school" : [
        {
            "name" : "Pace",
            "location" : "New York, NY",
            "degree" : "MS",
            "majors" : ["Information Systems", "Database Systems"],
            "dates" : "1988 - 1991",
            "url" : "pace.edu"
        },
        {
            "name" : "Baruch",
            "location" : "New York, NY",
            "degree" : "BBA",
            "majors" : ["Accounting", "Computer Science"],
            "dates" : "1988 - 1991",
            "url" : "cuny.edu"
        }
    ],
    "onlineCourse" : [
        {
            "title" : "Intro to GIT",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "udacity.com"
        },
        {
            "title" : "Intro to GIT",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "udacity.com"
        }
    ]
};


/*
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
//    var Skill0 = bio.skills[0];
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    console.log(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

};
*/


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skillIndex in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
        $("#skills").append(formattedSkill);
    }
};

function displayWork() {
    if (work.jobs.length > 0) {
        for (jobIndex in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formatEMP = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
            var formatTITLE = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
            var EMP_TITLE = formatEMP + formatTITLE;
            $(".work-entry:last").append(EMP_TITLE);
            var formatJOBDATES = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
            $(".work-entry:last").append(formatJOBDATES);
            var formatLOCATION = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
            $(".work-entry:last").append(formatLOCATION);
            var formatDESC = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
            $(".work-entry:last").append(formatDESC);
    	}
    }
};

displayWork();

/*
function locationizer(work_obj) {
    varWorkArray = [];
    for (var i in work_obj.jobs) {
        varWorkArray.push(work_obj.jobs[i].location);
    }
    return varWorkArray;
}
*/

varName = "Michael Valentin"
varRole = "Chief cook and bottle washer!"
var formattedName = HTMLheaderName.replace("%data%", varName);
var formattedRole = HTMLheaderRole.replace("%data%", varRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


function inName(fullName) {
    fullName = fullName.trim().split(" ");
    console.log(fullName)
    var varFirstName = fullName[0];
    var varLastName = fullName[1];
    var varFullName = varFirstName[0].toUpperCase() + varFirstName.slice(1).toLowerCase() + ' ' + varLastName.toUpperCase();
    return varFullName;
};


// console.log(inName("jOHN smith"));

$("#main").append(internationalizeButton);


projects.display = function () {
    if (projects.project.length > 0) {
//        $("#header").append(HTMLprojectStart);
        for (projectIndex in projects.project) {

            $("#projects").append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace("%data%", projects.project[projectIndex].title);
            $(".project-entry:last").append(projectTitle);

            var projectDates = HTMLprojectDates.replace("%data%", projects.project[projectIndex].dates);
            $(".project-entry:last").append(projectDates);

            var projectDescription = HTMLprojectDescription.replace("%data%", projects.project[projectIndex].description);
            $(".project-entry:last").append(projectDescription);

            if (projects.project[projectIndex].images.length > 0) {
                for (imageIndex in projects.project[projectIndex].images) {
                    var projectImage = HTMLprojectImage.replace("%data%", "." + projects.project[projectIndex].images[imageIndex]);
                    $(".project-entry:last").append(projectImage);

                }
            }
        }
    }
}; 

projects.display();

$("#mapDiv").append(googleMap);




