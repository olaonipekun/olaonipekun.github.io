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

