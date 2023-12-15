var heading = document.getElementById("text")
var getButton = document.getElementById("btn")

function handleButton(){
    heading.innerText = "Hello Jaya How Are You"
}
getButton.addEventListener("click",handleButton)

// ----/* Get Output */---------------------------------------------------------------------------------------------------

var getInput = document.getElementById("text-input")
var getbtn = document.getElementById("bttn")
var getOutput = document.getElementById("get-output")

function handleoutput(){
    var inputValue = getInput.value
    getOutput.innerText = inputValue
}
getbtn.addEventListener("click",handleoutput)


//------<!-- Chip  change Classes or add classes-->------------------------------------------------------------------------

var tab1 = document.getElementById("tab-1")
var tab2 = document.getElementById("tab-2")
var tab3 = document.getElementById("tab-3")
var outPUT = document.getElementById("final")

function handleTab1(){
     tab1.classList.add("selected-chip")
     tab2.classList.remove("selected-chip")
     tab3.classList.remove("selected-chip")
     outPUT.innerText="Tab1"    
}

function handleTab2(){
    tab2.classList.add("selected-chip")
    tab3.classList.remove("selected-chip")
    tab1.classList.remove("selected-chip")
    outPUT.innerText="Tab2"   
}

function handleTab3(){
    tab3.classList.add("selected-chip")
    tab2.classList.remove("selected-chip")
    tab1.classList.remove("selected-chip")
    outPUT.innerText="Tab3"
}

tab1.addEventListener("click",handleTab1)
tab2.addEventListener("click",handleTab2)
tab3.addEventListener("click",handleTab3)

///<!-- Concate Input Names -->----------------------------------------------------------------------------------------

var firstName = document.getElementById("input-first")
var lastName = document.getElementById("input-last")
var nameButton = document.getElementById("name-btn")
var ConcateName = document.getElementById("concatination")

function concatname(){
    var fULLNAME = `${firstName.value} ${lastName.value}`
    ConcateName.innerText = fULLNAME
}

nameButton.addEventListener("click",concatname)

//change Color on even --------------------------------------------------------------------------------------------------------

var getAllBox = document.getElementsByClassName("boxes")
var getBtn = document.getElementById("evenBtn")

var allBoxArray = Array.from(getAllBox)

function handleEvevn(){
    allBoxArray.forEach(function(element ,index){
            var iseven = index%2==0

            iseven ? element.classList.toggle("bg-red") : element.classList.toggle("bg-green")
    })
}

getBtn.addEventListener("click",handleEvevn)

//--------Create Element-------------------------------------------------------------------------------------------------------
var getElement = document.getElementById("create-Element")
console.log(getElement)

var createdElement = document.createElement("div")
console.log(createdElement)

createdElement.className="new"

createdElement.innerText = "New Added Inner Text"

getElement.appendChild(createdElement)

//  create to-do list -------------------------------------------------------------------------------------
var inputget = document.getElementById("input-text")
var getsubmitBtn = document.getElementById("submit-btn")
var getTable = document.getElementById("todo-list")

function handleInput(){
    var createdRow = document.createElement("tr")
    var createdData = document.createElement("td")
    var createdDeleteData = document.createElement("td")
    var createdDeleteButton =document.createElement("button")

    createdData.innerText = inputget.value
    createdDeleteData.appendChild(createdDeleteButton)   
    createdRow.appendChild(createdData)
    createdRow.appendChild(createdDeleteData)
    createdDeleteButton.innerText = "delete"
    getTable.appendChild(createdRow)

    inputget.value=""
    inputget.focus()

}
getsubmitBtn.addEventListener("click",handleInput)

//  get Elementby Name --------------------------------------------------------------------------------------------

var getName  =document.getElementsByName("language")
var getBUTTON = document.getElementById("btn-submit")
var getoutPut = document.getElementById("submit-ans")

function handleRadioButton(){
    var namelist = Array.from(getName)

    namelist.forEach(function(el){
        if(el.checked){
            getoutPut.innerText = el.nextSibling.nodeValue
        }
    })
}

getBUTTON.addEventListener("click",handleRadioButton)
console.log(getName)

//<!-- Check if a string can convert into number or not -->----------------------------------------------------------------

var inputText = document.getElementById("input-str")
var textBtn = document.getElementById("str-btn")
var textOutput = document.getElementById("str")


 function handleTextInput(){
    var isNumber = parseInt(inputText.value).toString() !=="NaN"

    textOutput.innerText = isNumber
 }
textBtn.addEventListener("click", handleTextInput)

//  Change the color of Row on click button  -------------------------------------------------------------------------------------

var changeButtonGet = document.querySelectorAll("#new-todo-list tbody td button")
console.log(changeButtonGet)

var changeButtonArray = Array.from(changeButtonGet)



changeButtonArray.forEach(function(eachbutton){
    function handleEachButton(){
        eachbutton.parentElement.parentElement.classList.toggle("bg-purple")
    }

    eachbutton.addEventListener("click",handleEachButton)

})


//   change color of lists ------------------------------------------------------------------------------------------------------------------
// var checkboxList = document.querySelectorAll("#todo-new-list button")
// console.log(checkboxList)

// var arrayCheckBox = Array.from("checkboxList")

// arrayCheckBox.forEach(function(eachList){
    
//     function handleList(){
//         eachList.classList.toggle("bg-blue")
//         eachList.nextSibling.classList.toggle("bg-blue")
//     }

//     eachList.addEventListener("click",handleList)

// })


//       <!-- ChildNOdes -->--------------------------------------------------------------------------------------
//   1. firstChild

var parentNode= document.getElementById("parent")
console.log(parentNode.firstChild)

// 2. firstElementChild

console.log(parentNode.firstElementChild)

// // 3. lastChild
console.log(parentNode.lastChild)

// // 4. lastElementChild
console.log(parentNode.lastElementChild)

// // 5. childNodes
console.log(parentNode.childNodes)

// // 6. children
console.log(parentNode.children)

//7. nextSibling

//8. nextElementSibling

//9. previousSibling

//10. previousElementSibling