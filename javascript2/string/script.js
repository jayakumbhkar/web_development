//  Question ...... replace all hyphen with space
var title = 'helle-world!,-this-the-dummy-text'
var replaced = title.replaceAll("-"," ")
console.log(replaced)

//1...............................count 'good' word
var review = 'This product is good , the quality of the product is Good . They are goodvibes providing good services.'
var splitted = review.split("good")
console.log(splitted)
console.log(splitted.length)
console.log(splitted.length-1)

// 2. print the names with numbering 
var names = ["Ruchi", "Ayushi", "Nikhil", "Samyak", "Vikas", "Vishal", "Nisha"];
var count =1

for(var i=0; i<names.length; i++){
    console.log(count+")"+names[i])
    count++
}

// 3. Write a function to check whether an input is string or not
function checkString(input){
        var datatype = typeof(input)

        return datatype ==="string" ? true : false
}
console.log(checkString(34))
console.log(checkString("Hello"))
console.log(checkString(''))
console.log(checkString("undefined"))
console.log(checkString(undefined))
console.log(checkString(null))

// 4. WA function to check a string is blank or not 
function blankString(input){
    return input ==="" ? true : false
}
console.log(blankString(""))
console.log(blankString("How Are You"))
console.log(blankString(" "))

// 5. WA function to convert a string into abbreviated form

function abbreviation(inputV){
    var splittedInputV = inputV.split(" ")
    return splittedInputV[0] + " " + splittedInputV[1][0] +"."
}
console.log(abbreviation("Hardik Pandya"))

// 6. WA function that hide email 
function hideEmail(inputEmail){
        var splitEmail = inputEmail.split("@")
        return splitEmail[0].slice(0,3) + "...@" + splitEmail[1]
}
console.log(hideEmail("abcdef30@gmail.com"))

// 7.  capitalize first letter 
function capitalizeFirstLetter(inputStr){
        var capitalLetter = inputStr[0].toUpperCase() +inputStr.slice(1).toLowerCase()
        return capitalLetter
}
console.log(capitalizeFirstLetter("heLLo"))

// 8.  waf to capitalize each word  -------------------------------------------------------
function capitalEachWord(input){
    var inputSplit = input.split(" ")
    for(var i=0; i<inputSplit.length; i++){
        inputSplit[i] = inputSplit[i][0].toUpperCase() + inputSplit[i].slice(1).toLowerCase()
    }
    return inputSplit.join(" ")
} 
console.log(capitalEachWord("hello wOLRD how ARE you"))

// (10) Write a JavaScript function to concatenate a given string n times (default is 1).----------------
function nTimes(inpt){
        var repeated = inpt.repeat(4)
        return repeated
}
console.log(nTimes("hii "))

// (7) Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
function conversion(inputString){
        var splited = inputString.split("")
        var ArrayNew =[]
        for(var i=0; i<splited.length; i++){
            if(splited[i]===splited[i].toUpperCase()){
                 ArrayNew.push(splited[i].toLowerCase())
            }else{
                ArrayNew.push(splited[i].toUpperCase())
            }
        }
     return ArrayNew.join("")  
}
console.log(conversion("Hello World you are converted INTO Lower TO Upper AND uPPer To Lower"))

// (8) Write a JavaScript function to convert a string into camel case.

function camelCase(inputValue){
    var strSplit = inputValue.split(" ")

    for(var i=1; i<strSplit.length; i++){
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)
    }
    return strSplit.join("")
}
console.log(camelCase("Hello world"))

// (9) Write a JavaScript function to uncammelize a string.
function unCammelize(input){
    var splited = input.split(" ")
  
    for(var i=1; i<splited.length; i++){
        splited[i] = splited[i].charAt(0).toLowerCase()+splited[i].slice(1)
    }
    return splited.join('')
}
console.log(unCammelize("un Camel Case"))

///////////////////////////////////////////////////////////////
const studentData = [
    {
      firstName: "Himanshu",
      lastName: "Jain",
      email: "himanshu@gmail.com",
      age: 24,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      age: 22,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      age: 20,
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.j@example.com",
      age: 25,
    },
    {
      firstName: "Bob",
      lastName: "Williams",
      email: "bob.w@example.com",
      age: 21,
    },
   
  ];

function student(studentData){
    for(var i=0; i<studentData.length; i++){
        // console.log(studentData[i])
        var fullname = studentData[i].firstName +" "+studentData[i].lastName
        console.log(fullname)
        var email = hideEmail(studentData[i].email)
        var AGE = studentData[i].age
        console.log(email)
        console.log(AGE)



    }
    return details ={
         FULLNAME : fullname,
         EMAIL: email,
         AGE:AGE
    }
  }
console.log(student(studentData))