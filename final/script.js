
let oldprobchild;
    
function checkSudoku() {
    const article = document.querySelector("article");
    const boxes = article.children;
    const rows = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const columns = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let validSudoku = true;
    let sudokuError = "";

    console.log(oldprobchild);
    if(oldprobchild) {
        oldprobchild.style.backgroundColor = "rgb(223, 240, 227)";
        if(oldprobchild.className.includes("entry")){
            oldprobchild.style.backgroundColor = "rgb(93, 235, 58)";
        }
        oldprobchild = undefined;
    }

    for(const box of boxes){
        validSudoku = validSudoku && check9(box.children);
    }
    if(!validSudoku && sudokuError == ""){
        sudokuError = "box"
    }

    for(const rowName of rows){
        const row = document.querySelectorAll("."+rowName);
        validSudoku = validSudoku && check9(row);
        // console.log(row);
    }
    if(!validSudoku && sudokuError == ""){
        sudokuError = "row"
    }

    for(const colName of columns){
        const col = document.querySelectorAll("."+colName);
        validSudoku = validSudoku && check9(col);
        // console.log(col);
    }
    if(!validSudoku && sudokuError == ""){
        sudokuError = "collumn"
    }

    if (validSudoku){
        console.log("Valid Sudoku");
        submitNumber();
    } else {
        alert("Invalid Sudoku. Reason: " + sudokuError)
    }
}

function check9(elementList){
    let values = [];
    let problemChild;
    let returnVal = true;

    for(const child of elementList){
        if (child.value !== undefined){
            const childValue = parseInt(child.value);
            // console.log(childValue + "childValue");
            if((childValue > 0 && childValue < 10)||(child.className.includes("entry")&&childValue==0)){
                // console.log(values.includes(childValue) + "values in list");
                if(!values.includes(childValue)){
                    // console.log(childValue);
                    console.log("valid Entry")
                    values.push(childValue);
                } else {
                    console.log("invalid Sudoku");
                    problemChild = child;
                    returnVal = false;
                    break;
                }
            } else {
                console.log("invalid Entry");
                problemChild = child;
                returnVal = false;
                //TODO: Save this child, and highlight it to show the error
                break;
            }
        }
    }

    if (problemChild){
        problemChild.style.backgroundColor = "red";
        oldprobchild = problemChild;
    }

    return returnVal;
}

function submitNumber() {
    let phoneNumberStr = "";
    const entryBoxes = document.querySelectorAll(".entry");
    console.log(entryBoxes)
    for(entry of entryBoxes){
        phoneNumberStr += entry.value;
    }
    let phoneNumber = "(" + phoneNumberStr.slice(0,3) + ")" + phoneNumberStr.slice(3, 6) + "-" + phoneNumberStr.slice(6);
    console.log(phoneNumber);
}