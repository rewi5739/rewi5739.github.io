const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFilepaths = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

// const currImg = document.querySelector(".displayed-img");
// currImg.src = imgFilepaths[0];

/* Declaring the alternative text for each image file */
const imgAltxt = ["eye", "shell", "Flowers", "egyptian writing", "butterfly"];

/* Looping through images */
for(let i = 0; i < imgFilepaths.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgFilepaths[i]);
    newImage.setAttribute('alt', imgAltxt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>setMainImage(imgFilepaths[i], imgAltxt[i]))
}

function setMainImage(src, alt){
    displayedImage.src = src;
    displayedImage.alt = alt;
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", toggleDarken);
function toggleDarken() {
    let btnClass = btn.getAttribute("class");
    if (btnClass == "dark"){
        overlay.style.background = "rgba(0, 0, 0, 50%)";
        btn.setAttribute("class", "light");
    } else {
        btn.setAttribute("class", "dark");
        overlay.style.background = "rgba(0, 0, 0, 0%)";
    }
}
