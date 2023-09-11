let dateText = document.getElementById("dateText")
dateText.classList.add("text_edit")

let utcTimeText = document.getElementById("utcTimeText")
utcTimeText.classList.add("text_edit")

// Fetching Data from user.json file
fetch("./user.json")
  .then((res) => res.json())
  .then((data) => {

    // putting the fetched data in it's own variable
    let datas = data.Profile[0]

    // getting the DOM elements
    let heading = document.getElementById('heading');
    let slackName = document.getElementById("slackName")
    let profileImage = document.getElementById("profileImage")
    let gitHubUrl = document.getElementById("gitHubUrl")
    gitHubUrl.classList.add("data_edit")
    let currentDate = document.getElementById("currentDate")
    let utcTime = document.getElementById("utcTime")
    utcTime.classList.add("data_edit")

    // setting slack name and attribute
    slackName.textContent = datas.slack_name
    slackName.style.fontSize = "25px";
    slackName.setAttribute('data-testid', `${datas.slack_name_attribute}`)
    slackName.style.color = "coral"
    slackName.classList.add("text_edit");

    // setting heading as track and fixing track attribute
    heading.style.color = "coral";
    const track = datas.track
    const trackText = document.createTextNode(track)
    heading.appendChild(trackText)
    heading.setAttribute('data-testid', `${datas.track_attribute}`)
    heading.classList.add("text_edit");

    // getting profile image and setting attribute
    profileImage.setAttribute('src', `${datas.image[1] || datas.image[0]}`)
    profileImage.setAttribute('data-testid', `${datas.image_attribute}`)
    profileImage.setAttribute('alt', `${datas.alt}`)

    // setting github url data and attribute
    let gitHubText = "Check out the github repo";
    let gitHubLink = gitHubText.link(datas.github_url);
    gitHubUrl.innerHTML = gitHubLink;
    gitHubUrl.setAttribute('data-testid', `${datas.github_url_attribute}`)

    // UTC DATE AND TIME
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date()
    let day = weekday[d.getDay()]
    currentDate.textContent = day;
    currentDate.setAttribute('data-testid', `${datas.currentDayOfTheWeek}`)
    currentDate.classList.add("data_edit")

    // Getting UTC TIME IN MILLISECONDS    
    function updateUTC() {
      let getTime = new Date().getTime();
      utcTime.textContent = getTime
    }
    updateUTC();
    setInterval(updateUTC, 1000);
  })
  .catch(err => console.log(err))
