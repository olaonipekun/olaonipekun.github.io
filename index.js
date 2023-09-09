const heading = document.getElementById('heading');
const imageDiv = document.getElementById("profileImage");

console.log(heading);
console.log(imageDiv);

heading.onmouseenter = (ev) => {
    heading.textContent = "please leave me alone for now!!";
    heading.style.color = "red";
}

heading.onmouseleave = (ev) => {
    heading.textContent = "Hello Everyone";
    heading.style.color = "coral";
}



document.addEventListener(onload, imageLoaded)


const imageLoaded = () => {
    fetch("https://slack.com/api/users.profile.get")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
}