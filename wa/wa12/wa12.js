

const newQuoteButton = document.querySelector("#js-new-quote");
let dontworryaboutit = 1;

let current = {
    name: "",
    id: "",
    imgSrc: "",
    levels: "",
    types: "",
    attributes: "",
    priorEvolutions: [],
    nextEvolutions: []
}

let digiAPI = "";

function newAddress(id=0){
    if (id == 0){
        digiAPI = "https://digi-api.com/api/v1/digimon/" + getRandomInt(1460);
    } else {
        digiAPI = "https://digi-api.com/api/v1/digimon/" + id;
    }
}

// console.log(answerButton)

newQuoteButton.addEventListener("click", ()=>getQuote());

async function getQuote(id = 0) {
    newAddress(id);
    try {
        const response = await fetch(digiAPI);
        console.log("checking api adress: ", digiAPI)

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log(json);

        current.name = json.name;
        current.id = json.id;
        current.imgSrc = json.images[0].href;
        current.levels = json.levels;
        current.types = json.types;
        current.attributes = json.attributes;
        current.priorEvolutions = json.priorEvolutions;
        current.nextEvolutions = json.nextEvolutions;
        console.log(current)

        displayInfo();



    } catch (err) {
        console.log(err);
        alert("Fail");
    }
}

function displayInfo() {
    const digimonIdName = document.querySelector("#js-digimon-id-name");
    const digimonLevels = document.querySelector("#digimon-levels");
    const digimonTypes = document.querySelector("#digimon-types");
    const digimonAttributes = document.querySelector("#digimon-attributes");

    digimonIdName.innerHTML = current.id + ": " + current.name;

    let levelsStr = "Levels: <br>";
    let i = 0;
    while(i < current.levels.length){
        levelsStr += current.levels[i].level + "<br>";
        i++;
    }
    digimonLevels.innerHTML = levelsStr;

    let typesStr = "Types: <br>";
    i = 0;
    while(i < current.types.length){
        typesStr += current.types[i].type + "<br>";
        i++;
    }
    digimonTypes.innerHTML = typesStr;

    let attributesStr = "Attributes: <br>";
    i = 0;
    while(i < current.attributes.length){
        attributesStr += current.attributes[i].attribute + "<br>";
        i++;
    }
    digimonAttributes.innerHTML = attributesStr;

    displayImage();
    displayEvolutions();
}

function displayEvolutions() {

    const evolutionsFlexbox = document.querySelector("#digimon-prior");

    let childNodes = evolutionsFlexbox.childNodes;
    let i = childNodes.length;
    while(i > 0) {
        // console.log(childNodes)
        childNodes[i-1].remove();
        i--;
    }

    let j = 0;
    // console.log(evolutionsFlexbox);
    while (j < current.nextEvolutions.length){
        let newDigimon = document.createElement("img");
        newDigimon.setAttribute("src", current.nextEvolutions[j].image);
        newDigimon.setAttribute("class", "non-main");
        console.log(current.nextEvolutions[j].id)
        dontworryaboutit = current.nextEvolutions[j].id;
        newDigimon.addEventListener("click", ()=>seriouslydontworryaboutit(j))
        evolutionsFlexbox.appendChild(newDigimon);
        j++;
    }
}

function displayImage() {
    const digimonImage = document.querySelector("#js-digimon-image");
    digimonImage.setAttribute("src", current.imgSrc)
}

function seriouslydontworryaboutit(el){
    console.log(el, current, current.nextEvolutions[el])
    dontworryaboutit = current.nextEvolutions[el-1].id;
    getQuote(dontworryaboutit)
}

getQuote();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}