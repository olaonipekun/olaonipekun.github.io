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

imageApi = "https://slack.com/api/users.profile.get"
console.log(imageApi);
console.log("alright seen")

function fetchImage() {
    const apiKey = "Your-apiKey";
    fetch("https://any-anime.p.rapidapi.com/anime/img", {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "any-anime.p.rapidapi.com",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("imageContainer");
        container.appendChild(imageElement);
      })
      .catch((error) => console.error(error));
  }

const button = document.getElementById("fetchImage");
button.addEventListener("click", fetchImage);