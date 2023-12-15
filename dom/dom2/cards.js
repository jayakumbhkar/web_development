var getCards = document.getElementsByClassName("card")
var getCardButton = document.getElementsByClassName("card-btn")

var cardArray = Array.from(getCards)
var cardBtnArray = Array.from(getCardButton)


cardArray.forEach(function(eachCard){

    function handleCards(){
        eachCard.classList.toggle("scale-cards")
    }
    cardBtnArray.forEach(function(cardbtn){

        // function handleCards(){
        //     eachCard.classList.toggle("scale-cards")
        // }
    
        cardbtn.addEventListener("click",handleCards)
    })
})


// <!-- Created list and change background color ---------------------------------------------------------------------------

var getInputValue = document.getElementById("Input-Input")
var getButton = document.getElementById("btn-btn")

var getList = document.getElementById("todo-list-list")


function handleSubmitButton(){
    var CreatedList = document.createElement("li")
    var CreatedButton =document.createElement("button")
    var CreatedSpan = document.createElement("span")

    CreatedButton.className="new-BTN"
    CreatedSpan.innerText = getInputValue.value 

    CreatedList.appendChild(CreatedButton)
    CreatedList.appendChild(CreatedSpan)
    getList.appendChild(CreatedList)

    CreatedButton.addEventListener("click",function(){
        CreatedSpan.classList.toggle("text-content")
        CreatedButton.classList.toggle("bg-green")
    })
}
getButton.addEventListener("click",handleSubmitButton)

//     fare calculation of cities Source Destination-------------------------------------------------------------------------

var selectSource=document.getElementById("selectsrc")

var selectDestination=document.getElementById("selectDest")

var selectButton = document.getElementById("search")

var farePerKm = 5

var stationData = [
    {
        StationName:"Indore",
        distanceFromOrigin:0,
    },
    {
        StationName:"Ratlam",
        distanceFromOrigin:50,
    },
    {
        StationName:"Dahod",
        distanceFromOrigin:100,
    },
    {
        StationName:"Vadodara",
        distanceFromOrigin:150,
    },
    {
        StationName:"Anand",
        distanceFromOrigin:200,
    }
]

function fareCalculation(sourceStation, DestStation){
    var sourceFare = stationData.find(function(station){
        return station.StationName === sourceStation
    }).distanceFromOrigin


    var distanceFare = stationData.find(function(station){
        return station.StationName === DestStation
    }).distanceFromOrigin

    return Math.abs(sourceFare-distanceFare)*farePerKm
}
   

function selectLocation(){
    var outputSrc =document.getElementById("s1")
    var outputDestination =document.getElementById("d1")   
    var fare = document.getElementById("f1")
    var sourceSource=selectSource.value
    var destDest =  selectDestination.value
  
    outputSrc.innerText= sourceSource
    outputDestination.innerText =destDest

    var calFare= fareCalculation(sourceSource,destDest)
    console.log(calFare)

    fare.innerText =calFare
    console.log(fare.innerText)

}

selectButton.addEventListener("click", selectLocation)

//       after method ------------------------------------------------------------------------------------------------

//1. example
var ListGet = document.getElementById("unorder-list")
console.log(ListGet)

var createdNewList = document.createElement("li")
createdNewList.innerText ="list6"

ListGet.lastElementChild.after(createdNewList)

// 2. example
var createdNewDiv = document.createElement("div")
createdNewDiv.innerText = "New Created Div"
console.log(createdNewDiv)

ListGet.after(createdNewDiv)

// 3. example

var getNewDiv = document.getElementById("New-Tag")
console.log(getNewDiv)

var createdNewNewDiv = document.createElement("div")
createdNewNewDiv.innerText = "New Div Created and added After New tag"

getNewDiv.after(createdNewNewDiv) 


// createdNewDiv.after(createdNewNewDiv)


// prepend Method --------------------------------------------------------------------------------------------------

// insertbefore Method --------------------------------------------------------------------------------------------- 

// insertAfter  ----------------------------------------------------------------------------------------------------

// insertAdjacentHTML  , insertAdjacentElement ,  insertAdjacentText -----------------------------------------------



// <!-- setAttribute -----------------------------------------------------------------------------------------------

var getPara = document.getElementById("para")

getPara.setAttribute("class","content")


//        Select Product Name and Brand Name----------------------------------------------------------------------------------------

var productList = [
    {
        productName:"Mobile",
        brands : [
            {
                brandName:"Apple",
                price :20000,
            },
            {
                brandName:"Samsung",
                price :45000,
            },
            {
                brandName:"Vivo",
                price :25000,
            }
        ]
    },

    {
        productName:"Watch",
        brands : [
            {
                brandName:"Titan",
                price :4000,
            },
            {
                brandName:"Timex",
                price :3000,
            }
        ]
    },
]

var selectProduct = document.getElementById('selectproduct')
var selectBrand = document.getElementById('selectbrand')
// console.log(selectProduct)
// console.log(selectBrand)
var myButton = document.getElementById('selectbtn')

// console.log(myPrice)

function watchPrice(product_Name , brand_Name){
    var final = productList.find(function(big_object){
       return big_object.productName === product_Name
    }).brands.find(function(small_object){
        return small_object.brandName === brand_Name
    }).price

    return final
}
function handleProduct(){
    var myProduct = document.getElementById('myProduct')
    var myBrand = document.getElementById('myBrand')
    var myPrice = document.getElementById('myPrice')

    myProduct.innerText=selectProduct.value 
    myBrand.innerText = selectBrand.value
    
    a=myProduct.innerText
    b=myBrand.innerText
    
   var funcCall = watchPrice(a ,b )
    console.log(funcCall)
    myPrice.innerText=funcCall
}
myButton.addEventListener("click",handleProduct)

