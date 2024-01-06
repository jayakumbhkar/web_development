// print elements of array

var arr = [1,2,4,6,3,8,5,9,3,7,5,8,4]
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}

// Array Methods
//1. push
var arr = [10,20,30,40,50]
var arr1 =arr.push(60)
console.log(arr)

//
var arr = [100,200,300,400,500,600]
var newArr = []

for(var i=0; i<arr.length; i++){
    var pushArr = newArr.push(arr[i])
}
console.log("New Pushed Item : ",newArr)

//2. pop
var arr= [111,112,113,114,115]
var poppedArray = arr.pop()
console.log(arr)

// 
var arr = [1,2,3,4,5]
var newNew =[]
for(var i=0; i<arr.length; i++){                               // doubt
    var popped = arr.pop()
    var pushed = newNew.push(popped)
}
console.log(newNew)

// 3. unshift

var arr = [10,20,30,40,50]
var UnshiftedArr = arr.unshift(70)
console.log(arr)

//4. shift

var arr2 =[500 ,10,20,30,40]
var shiftedArr = arr2.shift(500)
console.log(arr2)

//---------------------------------
var arr2 =[500 ,10,20,30,40]
var shiftedArr2 = arr2.shift()
console.log(arr2)

// 5. splice
var arr3 = [10,20,30,40,50,60,70,80,90]

var splicedArray = arr3.splice(3,0,100,200)
console.log(arr3)

// 
var arr4 =[ 1,2,3,4,5,6,7,8,9]
var splicedArr = arr4.splice(2,3,100,200,300)
console.log(arr4)

//-----------forEach Method ---------------------------------------------------------------
var arr = [10,20,30,40,50,60,70]
arr.forEach(function(el,i){
    console.log(el,i)    
})

// push elements into new array 
var arr = [34,67,43,98,32,56,78,44,67]
var newArray  =[]

arr.forEach(function(el){
    var pushedEle = newArray.push(el)
})
console.log("New Pushed Array :",newArray)

// --------------------------Rotate the given array -----
var arr6 = [10,20,30,40,50,60,70,80]
var indx = 5
var rotateArr = []
for(var i=arr6.length-indx; i<arr6.length; i++){
    rotateArr.push(arr6[i])
}
for(var i=0; i<arr6.length-indx; i++){
    rotateArr.push(arr6[i])
}
console.log(rotateArr)

// WAP to create new array  from square of every element of an array 

// 1. ----------------------using forloop---------------------
var ary = [2,3,4,5,6,7,8]
var newAry = []

for(var i =0 ; i<ary.length ; i++){
    var square = ary[i]**2

    console.log(square)

    var squaredNewArray = newAry.push(square)
}
console.log(squaredNewArray)
console.log(newAry)

//         using forEach ------------------------------

var Arr1 = [1,2,3,4,5,6]
var squaredArr  =[]
Arr1.forEach(function(el){
    var sqr = el**2
    squaredArr.push(sqr)
})
console.log(squaredArr)

//  3. ------------------------------------- Square of digit of array using map method---------------
var Arr2 = [1,2,3,4,5,6,7]

var SqrdArr =Arr2.map(function(el){
    var SqrOfEle = el**2
    return SqrOfEle
})
console.log("SquaredArray ",SqrdArr)

// Filter Method
// WAP to filter out even number from an array

var Arr3 = [1,2,3,4,5,6,7,8,9,10]
var filteredArray = Arr3.filter(function(el){
    if(el%2==0){
        return el
    }
})
console.log(filteredArray)


// WAP to check whether any voter available in a given array
var year = [ 2004 , 1994, 2005 , 2018 , 1998]
for(var i=0; i<year.length; i++){
    var age=2023-year[i]

    if(age>=18){
        console.log("Available")
    }
}

// WAP to print biggest number and smallest number
var Arrr = [34,56,32,67,81,99,43,65,67,55,64]
var biggestNumber = Arrr[0]
var smallestNumber = Arrr[0]

for(var i=1; i<Arrr.length; i++){
    if(Arrr[i]>biggestNumber){
        biggestNumber=Arrr[i]
    }
    if(Arrr[i]<smallestNumber){
        smallestNumber=Arrr[i]
    }
}
console.log(biggestNumber)
console.log(smallestNumber)

// print name of person whose age is greater
var students = [
    {name:"suyash", yob:1994},
    {name:"Sakshi", yob:2001},
    {name:"Ruchika", yob:1997},
]
 
var ss = students.sort(function(elee1,elee2){
    if(elee1.yob>elee2.yob){
        return 1
    }else if(elee1.yob<elee2.yob){
        return -1
    }else{
        return 0
    }
})
console.log(ss)
 var ss1 = ss[0].name
 console.log(ss1)

 //----------------
 var older =students[0]

for(var i =0; i<students.length; i++){
    var el =students[i]
    var yob = el.yob
    if(older.yob>yob){
        older= el
    }
}
console.log(older.name)

//WAP to check whether an element is available in the array or not,
//if element exists then print its index , if not then print -1

var Arr4 = [1,2,3,4,5,6]
var checkNumber = 4

var indeX = -1
for(var i=0; i<Arr4.length; i++){
    if(checkNumber == Arr4[i]){
        indeX =i
    }
}
console.log(indeX)

//-----------------------------------------------find Method-----------------------------
// find the object whose name is Parker Pan
var products = [
    {name:"casio calculator", price:450, salePrice:320},
    {name:"Parker Pan", price:2000 , salePrice:1800},
    {name:"LG 32 inc LED", price:42000, salePrice:32500}
  ]

var NewObj = products.find(function(el){
        if(el.name == "Parker Pan"){
            return true 
        }else{
            return false
        }
})
console.log(NewObj)

//---------------------------------------------------- Maxima / Minima
var Arr5= [ 1,3,5,9,4,5,6,6,8,4]
for(var i=1; i<Arr5.length; i++){
    if(Arr5[i-1]>Arr5[i] && Arr5[i+1]>Arr5[i]){
        console.log("Minima",Arr5[i])
    }
    if(Arr5[i-1]<Arr5[i] && Arr5[i+1]<Arr5[i]){
        console.log("Maxima",Arr5[i])
    }
}

//---------------------------------------------------Get the number whose sum is 8

var Arr6 = [1,3,1,6,3,2,5,6]
var target = 8
for(var i=0; i<Arr6.length; i++){
    for(j=1; j<Arr6.length; j++){
        if(Arr6[i]+Arr6[j] == target){
            console.log(Arr6[i],Arr6[j])
        }
    }
}

//------------------------- Convert multidimensional array into one Dimension Array----------------
var Arr7 = [1, 2, [3, 4], 5, [6, 7, 8]]
var flatten=[]

Arr7.forEach(function(el){
    if(!Array.isArray(el)){
        flatten.push(el)
    }
   
    if(Array.isArray(el)){
        el.forEach(function(el1){
            flatten.push(el1)
        })
    }

})
console.log(flatten)


// ----------------------------Find Method--------------------------------------------------------------
var products = [
    {name:"casio calculator", price:450, salePrice:320},
    {name:"Parker Pan", price:2000 , salePrice:1800},
    {name:"LG 32 inc LED", price:42000, salePrice:32500}
  ]

var FindPro = products.find((prodt)=>{
    if(prodt.name =="Parker Pan"){
        return prodt
        
    }
})
console.log(FindPro)

//---------------------------------------findIndex method--------------------------

var checkIndex = products.findIndex((ele)=>{
        if(ele.name=="Parker Pan"){
            return true
        }else{
            return false
        }
})
console.log(checkIndex)

//------------------------------------------ find unique element---------------------------------
var arr1 =[1,2,1,2,1,2,3,4,2,5,1]
var uniqueArr = []

for(var i=0; i<arr1.length; i++){
    if(!uniqueArr.includes(arr1[i])){
        uniqueArr.push(arr1[i])
    }
}
console.log(uniqueArr)

// Sort method 
var persons=[
    {'name':'lakshya' ,'age':12},
    {'name':'jaya' ,'age':13},
    {'name':'ruchi' ,'age':12},
    {'name':'hemant' ,'age':13},
    {'name':'manish' ,'age':15},
    {'name':'ayush' ,'age':18},
    {'name':'maya' ,'age':17},
]

var sorted =persons.sort((eL1,eL2)=>{
    if(eL1.name>eL2.name){
        return 1
    }else if(eL2.name>eL1.name){
        return -1
    }else{
        return 0
    }
})
console.log(sorted)

// sort according to price from high to low
var products = [
    {name:"casio calculator", price:450, salePrice:320},
    {name:"Parker Pan", price:2000 , salePrice:1800},
    {name:"LG 32 inc LED", price:42000, salePrice:32500}
  ]

var productSort = products.sort((El1,El2)=>{
        if(El1.price>El2.price){
            return -1
        }else if(El2.price>El1.price){
            return 1
        }else{
            return 0 
        }
})
console.log(productSort)

// Shuffle ------------------------------------------------
var nums = [10,20,30,40,50,60,70,80,90]

var Shuffle = nums.sort((EL1,EL2)=>{
    var RandomNumber = Math.ceil(Math.random()*100)

    return RandomNumber%2==0 ? 1: -1
})

console.log(Shuffle)

// 
var problems = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"]

var bunchSize = 2
var bunchAll=[]

var shuffeling = problems.sort((num1,num2)=>{
    var randomNum = Math.ceil(Math.random()*1845)

    return randomNum%2 == 0 ? 1 : -1
})
console.log(shuffeling)

for(var i=0; i<shuffeling.length; i++){
    var bunch = shuffeling.slice(i, i+bunchSize)

    bunchAll.push(bunch)

    i+=bunchSize -1
}
console.log(bunchAll)

//--------- distribute chapters to each students
var students  = ["A","B","C","D","E"]
var chapter= ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15"]
var groupData=[]
var assignChapter ={}

var bunchsize = Math.ceil(chapter.length/students.length)
console.log(bunchsize)

// sort the chapters
var chapterShuffle = chapter.sort((n1,n2)=>{
        var randomN = Math.ceil(Math.random()*1543)
        return randomN%2 == 0 ? 1: -1

})
console.log("Shuffled Array",chapterShuffle)

//loop on chapterShuffle
for(var i=0 ; i<chapterShuffle.length; i++){
    var bunchChap = chapterShuffle.slice(i,i+bunchsize)
    groupData.push(bunchChap)

    i+=bunchsize-1
}
console.log(groupData)

// for assign data to given object
students.forEach((el,indx)=>{
    assignChapter[el] = groupData[indx]
})

console.log(assignChapter)

// push method returns length

var arrr1 = [10,20,30,40]
var pushResult = arrr1.push(800)
console.log(" Pushed Array :",arrr1)
console.log("Pushed Result:",pushResult)          // it returns length

// pop method returns the poped value

var arrr2 = [12,13,14,15,16,300]
var popResult = arrr2.pop()
console.log("Poped Array: ",arrr2)
console.log("Poped Result: ",popResult)

// splice

var arrr3 = [1,2,3,4,5,6]
var spliced = arrr3.splice(4,1,10,20,30,40,50,60,70)
console.log(arrr3)
console.log(spliced)

// tospliced 
var arrr4 = [10,20,30,40,50,60]
var toSplicedArr = arrr4.toSpliced(1,2,1000,2000,3000)

console.log(arrr4)
console.log(toSplicedArr)               // it returns new Array

// sort
var arrr5 = [4,7,9,3,6,8,4,7,2]
var sortedArr = arrr5.sort()
console.log("existing Array",arrr5)

// toSorted
var arrr6 = [45,43,67,98,34,12,56,99,74,38,23,15]
var tosortedArr = arrr6.toSorted()
console.log(tosortedArr)

// reverse
var arrr7 = [1,2,3,4,5,6,7,8]
var reversedArr = arrr7.reverse()
console.log("existing Array",arrr7)

// toreversed
var arrr8 = [10,20,30,40,50,60,70]
var toreversedArr = arrr8.toReversed()

console.log(arrr8)
console.log(toreversedArr)

// concat
var a1 = [1,2,3]
var a2 = [4,5,6]
var a3 = a1.concat(a2)
console.log(a3)

// INPUT : [ 1 , 5 , 3 ,8 , 9 , 10 , 15 , 8 , 7 , 5 , 8]
// OUTPUT :  {1: 1, 5: 2, 3:1 ... , 8:3}

var inputarr = [1,5,3,8,9,10,15,8,7,5,8]
var count = {}

for(var i=0; i<inputarr.length; i++){
    var keyname = inputarr[i]

    count[keyname] = count[keyname] === undefined ? 1 : count[keyname]+1
}
console.log(count)

// INPUT =["Green","Yellow","Blue","White","Red","Green","Yellow","Blue","White","Red","White","White","Blue","White","Red"]
// OUTPUT = {Green:2, Yellow:2, Blue:3, White:5, Red:3}

var inputArr =["Green","Yellow","Blue","White","Red","Green","Yellow","Blue","White","Red","White","White","Blue","White","Red"]
var countColors ={}

inputArr.forEach((el)=>{
    var keyNAME = el
    
    countColors[keyNAME] = countColors[keyNAME] === undefined ? 1 : countColors[keyNAME]+1
})
console.log(countColors)

// which color is appeared maximum ,now for in loop on countColors object 
var maxCount = 0
var maxCountColors = []

for(var colorName in countColors){
    console.log(colorName)
    if(countColors[colorName] >= maxCount){
        maxCount = countColors[colorName]

        maxCountColors = [colorName]
    }else if(countColors[colorName] == maxCount){
      
        maxCountColors.push(colorName)
    }
}
console.log(maxCount)
console.log(maxCountColors)


// INPUT : [{productName: "Mobile" , brandName: "Apple"} , {productName: "Watch" , brandName: "Apple"} , {productName: "Mobile" , brandName: "Samsung"}]
// OUTPUT : {Mobile: ["Apple", "Samsung"] , Watch: ["Apple"]}

var products =  [{productName: "Mobile" , brandName: "Apple"} , {productName: "Watch" , brandName: "Apple"} , {productName: "Mobile" , brandName: "Samsung"}]

var productWiseBrands = {};

products.forEach(function (el) {
  var productName = el.productName;
  var brandName = el.brandName;

  console.log(brandName, productName);

  var isProductExists = productWiseBrands[productName] !== undefined;
  console.log(isProductExists);
  if (isProductExists) {
    var brands = productWiseBrands[productName];
    
    if (!brands.includes(brandName)) {
        brands.push(brandName);
        productWiseBrands[productName] = brands;
    }
  } else {
    productWiseBrands[productName] = [brandName];
  }
});

console.log(productWiseBrands)








