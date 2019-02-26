var user = {
	name: "Bengy Phan",
	image: "img/bengy.jpg",
	progress: 0.66
};

var coursesArr = [{
        title: "Readings in World Literature",
        subject: "Social Studies"
    }, {
        title: "Theory of Numbers",
        subject: "Mathematics"
    }, {
        title: "Farsi 301",
        subject: "Languages"
    }];

var activityArr = [
	{
		title: "Codify Academy",
		subject: "Enrolled: June 20, 2018"
	},
	{
		title: "Project GBA Realty",
		subject: "Started: May 15, 2016"
	},
	{
		title: "AACS & Associates",
		subject: "Started: March 12, 2013"
	}];

var accountArr = [
	{
		title: "Enrolled since:",
		subject: "June 20, 2018"
	},
	{
		title: "Student status:",
		subject: "Active student"
	},
	{
		title: "Department:",
		subject: "Computer Science"
	}
];

function setUser(user, name, image, id) {
	image.src = user.image;
	image.alt = user.name;
	name.innerText = user.name;
	id.innerText = "User #: " + Math.floor(Math.random()*1000);
}

setUser(user, document.getElementById("userName"), document.getElementById("userImg"), document.getElementById("userId"));

function formatTime(i) {
	if(i < 10) {
		return "0" + i;
	} else {
		return i;
	}

}

function getTime() {
	var now = new Date()
	var hours = formatTime(now.getHours())
	var minutes = formatTime(now.getMinutes())
	var seconds = formatTime(now.getSeconds())
	var day = formatTime(now.getDate())
	var month = formatTime(now.getMonth())
	var year = now.getFullYear();


	return month + "/" + day + "/" + year + "    |    " + hours + ":" + minutes + ":" + seconds;	
}
function setTime(el) {
	el.innerText = getTime()
	var elem = el
	setTimeout(function() {
		return setTime(elem);
	}, 1000)
}
setTime(document.getElementById("time"));

function setActive(arr, title, list, str) {
	title.innerText = str
	list.innerHTML = ''
	for(var i = 0; i < arr.length; i++) {
		list.innerHTML += "<li><h4>" + arr[i].title + "</h4><p>" + arr[i].subject + "</p></li>"
	}
}
setActive(coursesArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")

function setProgress(user, bar, percent) {
	bar.style.width = user.progress * 100 + "%";
	percent.innerText = user.progress * 100 + "%";
}
setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"));

function showCourses() {
	setActive(coursesArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")
}
function showActivity() {
	setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Recent Activity: ")	
}
function showAccount() {
	setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Account: ")	
}

function openMenu() {
	if(document.getElementsByTagName("main")[0].style.width) {
		document.getElementsByTagName("main")[0].style = '';
		document.getElementById("nav").className = '';
	} else {
		document.getElementsByTagName("main")[0].style = "padding: 30px 5vw;; width: 75vw";
		document.getElementById("nav").className = 'open';
	}
}