const heading = document.getElementById('heading');

heading.style.color = "coral";

heading.onmouseenter = (ev) => {
    heading.textContent = "please leave me alone for now!!";
    heading.style.color = "coral";
}

heading.onmouseleave = (ev) => {
    heading.textContent = "Hello Everyone";
    heading.style.color = "coral";
}

fetch("http://127.0.0.1:5500/user.json")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    let profileImage = document.getElementById("profileImage")
    console.log(profileImage)
    let datas = data
    console.log(datas.Profile[0].image)
    profileImage.setAttribute('src', `${data.Profile[0].image}`)
})
.catch(err => console.log(err))
