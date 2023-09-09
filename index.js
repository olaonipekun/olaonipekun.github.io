const heading = document.getElementById('heading');

console.log(heading);

heading.onmouseenter = (ev) => {
    heading.textContent = "please leave me alone for now!!";
    heading.style.color = "red";
}

heading.onmouseleave = (ev) => {
    heading.textContent = "Hello Everyone";
    heading.style.color = "coral";
}