let dateText = document.getElementById("dateText")
let utcTimeText = document.getElementById("utcTimeText")
let heading = document.getElementById('heading');
let slackName = document.getElementById("slackName")
let profileImage = document.getElementById("profileImage")
let gitHubUrl = document.getElementById("gitHubUrl")
let currentDate = document.getElementById("currentDate")
let utcTime = document.getElementById("utcTime")


utcTime.classList.add("data_edit")
slackName.classList.add("text_edit")
gitHubUrl.classList.add("data_edit")
utcTimeText.classList.add("text_edit")
heading.classList.add("text_edit");

// UTC DATE AND TIME
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date()
let day = weekday[d.getDay()]
currentDate.textContent = day;
console.log(currentDate)
currentDate.classList.add("data_edit")

// Getting UTC TIME IN MILLISECONDS    
function updateUTC() {
  let getTime = new Date().getTime();
  console.log(utcTime)
  utcTime.textContent = getTime
}
updateUTC();
setInterval(updateUTC, 1000);


