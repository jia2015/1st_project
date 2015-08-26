
var bio = {
		"name": "Jiaxiang Li", 
		"role": "Web Developer", 
		"contacts": {"mobile": "347-885-****", 
					"email": "richard-ljx@hotmail.com",
					"github": "jia2015",
					"location": "NYC"	
				},
		"picture": "images/me.jpg", 
		"welcomeMessage": "welcome to my world!",
		"skills": ["Java", "html", "css", "js"] 
	};

var work = {
		"jobs": [
			{
			"employer": "uspto",
			"title": "patent examiner",
			"datesWorked": "2014-2015",
			"location": "Alexsandria, VA",
			"description": "examined patents"
			},
			{
		      "employer": "ITC",
		      "title": "Technical Support",
		      "location": "NYC, NY",
		      "datesWorked": "2013",
		      "description": "assisted clients on computer issues"
			}
		]
	};

var education = {
			"school": "CCNY",
			"datesAttended": "2008-2012",
			"location": "new york city",
			"degree": "B.S. in Computer Engineering"
	};

var projects = {
		"projects": [
			{
				"title": "resume project",
				"description": "created a webpage showing my resume"
			},
			{
				"title": "html project",
				"description": "created a simple webpage"
			}
		]
	};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContacts = [];
formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	for (i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContacts) {
	$("#topContacts").append(formattedContacts[i]);
	$("#footerContacts").append(formattedContacts[i]);
}


function displayWork() {

	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for (i in work.jobs) {
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

displayWork();


projects.display = function() {
	
	if(projects.projects.length > 0) {
		
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			//var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			//var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			//$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			//for(img in projects.projects[i].images) {
			//	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
			//	$(".project-entry:last").append(formattedProjectImage);
			//}
		
		}
	}
}

projects.display();


education.display = function() {
	
	if(education.length > 0) {
		
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			//var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
		}
		
	}
}

education.display();


$("#mapDiv").append(googleMap);
