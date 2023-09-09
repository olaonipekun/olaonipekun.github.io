const heading = document.getElementById('heading');
const imageSource = document.getElementById("profileImage");

console.log(heading);

heading.onmouseenter = (ev) => {
    heading.textContent = "please leave me alone for now!!";
    heading.style.color = "red";
}

heading.onmouseleave = (ev) => {
    heading.textContent = "Hello Everyone";
    heading.style.color = "coral";
}

imageApi = "https://slack.com/api/users.profile.get";

document.addEventListener(onload, imageLoaded)

const imageLoaded = () => {
    fetch(imageApi)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
}