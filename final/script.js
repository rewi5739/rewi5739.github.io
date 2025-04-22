function checkSudoku() {
    const article = document.querySelector("article");
    const boxes = article.children;
    const rows = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const columns = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    validSudoku = true;

    for(const box of boxes){
        validSudoku = validSudoku && check9(box.children);
    }
    for(const rowName of rows){
        const row = document.querySelectorAll("."+rowName);
        validSudoku = validSudoku && check9(row);
        // console.log(row);
    }

    for(const colName of columns){
        const col = document.querySelectorAll("."+colName);
        validSudoku = validSudoku && check9(col);
        // console.log(col);
    }

    // let hopefulBool = check9(children);

    console.log("Valid Sudoku = " + validSudoku);
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

    // if (values.length != 9){
    //     returnVal = false;
    // }

    return returnVal;
}