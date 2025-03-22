const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

var storyText = "Gordon Ramsay needed to :insertx: but he did not have the 10000 pounds of existential dread required to do so. He watched a:inserty: video to give him the existential dread. Gordon Ramsay needed to get the internal temperature of the :insertz: to a nice 160 fahrenheit to get it ready so he could :insertx:."
const insertX = ["make tea in space", "fight the unbread in overcooked", "dance on the countertop"];
const insertY = ["n exerbia"," scale of the universe"," My Little Pony"];
const insertZ = ["tea","chicken","burger"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem)
                        .replace(":inserty:", yItem)
                        .replace(":insertz:", zItem);


    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Gordon Ramsay", name)
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(10000/14) + " stone";
        const temperature =  Math.round((160-32)*(5/9)) + " centigrade";
        newStory = newStory.replace("160 fahrenheit", temperature)
                            .replace("10000 pounds", weight);
    }
    console.log(newStory);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
