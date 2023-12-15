//     Create Table and Delete on Button click----------------------------------------------------------------------------------------

var gettingThisInput = document.getElementById('input-id-name')
// console.log(gettingThisInput)

// var theRow = document.getElementById('row')
// console.log(theRow)

var theTableBody= document.getElementById('table-body-body')
// console.log(theTableBody)

var theButton = document.getElementById('add-btn-name')
// console.log(theButton)

function handleTable(){

    var theInputValue = gettingThisInput.value 
    var mydataRow = document.createElement('tr')
    theTableBody.appendChild(mydataRow)
    // console.log(theTableBody)

    var mydataName = document.createElement('td')
    mydataName.innerText = theInputValue

    var mydataDelete = document.createElement('td')
    // mydataDelete.innerText = 'Delete'

     var deleteButtonCreate = document.createElement('button')
     deleteButtonCreate.innerText = 'Delete'
    //  mydataDelete.appendChild(deleteButtonCreate).innerText = 'delete'
     mydataDelete.appendChild(deleteButtonCreate)
     
    mydataRow.appendChild(mydataName)

    gettingThisInput.value=""
    mydataRow.appendChild(mydataDelete)


    function deleteWholeRow(){
        theTableBody.removeChild(mydataRow)
    }

    deleteButtonCreate.addEventListener('click', deleteWholeRow)
}
theButton.addEventListener('click' , handleTable)

//////  Checked Value Disabled Enabled          setAttribute / removeAtttribute ---------------------------------------------------

var getInputValue = document.getElementById("input-value")
var getCheckbox = document.getElementById("input-checkbox")

function handlecheckbox(){
    if(getCheckbox.checked){
        getInputValue.setAttribute("disabled" ,"true")

    }else{
        getInputValue.removeAttribute("disabled")
    }
}

getCheckbox.addEventListener("click",handlecheckbox)

//   getAttribute   -------------------------------------------------------------------

var inputType = getInputValue.getAttribute("id")

console.log(inputType)


// hasAttribute  -- it returns true/false

var checkHasAttribute = getInputValue.hasAttribute("id")
console.log(checkHasAttribute)

//----------------------------------------------------------------------------------------------------------------

var getSmallBox = document.getElementById("small-box")
var getButton = document.getElementById("shift")
var getContainerBox = document.getElementById("container")

function handleShiftButton(){
    getSmallBox.classList.toggle("box-transform")
}

// getButton.addEventListener("click",handleShiftButton)                         --clicked on button 
// getSmallBox.addEventListener("click",handleShiftButton)                       --clicked on box
getContainerBox.addEventListener("click",handleShiftButton)                    // clicked on container Box


// small Switch Box  ---------------------------------------------------------------------------------------------------                    
var getContainer = document.getElementById("small-container")
var getSmallSmallBox = document.getElementById("small-small-box")

function handleSmallShiftButton(){
    getSmallSmallBox.classList.toggle("box-shift")
    getContainer.classList.toggle("bg-purple")
}
getSmallSmallBox.addEventListener("click",handleSmallShiftButton)


//  ScrollIntoView --------------------------------------------------------------------------------------------------------

var getList = document.getElementById("unordered-list")
var getUpButton = document.getElementById("up")
var getDownButton = document.getElementById("down")
var getItem14 = document.getElementById("item-14")
var getScrollIntoViewBtn = document.getElementById("scrollbtn")

function handleScrollIntoView(){
    getItem14.scrollIntoView(true)
}
getScrollIntoViewBtn.addEventListener("click",handleScrollIntoView)

// scrollTo , scrollBy                    ---------------------------------------------------------------------------------
// let scrolledup=0
function handleScrollUp(){
    // getList.scrollTo(0,scrolledup+20)
    // scrolledup+=20
    getList.scrollBy(0,50)
}

function handleScrollDown(){
    // getList.scrollBy(0,scrolledup-20)
    // scrolledup=scrolledup===0?0:scrolledup-20
    getList.scrollBy(0,-50)
}
getUpButton.addEventListener("click",handleScrollUp)
getDownButton.addEventListener("click",handleScrollDown)
