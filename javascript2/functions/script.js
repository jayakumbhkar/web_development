//WA Function for calculate Simple Interest
function SimpleInterest(p,t,r){
    var si = p*t*r/100
    return si
}
console.log(SimpleInterest(1000,2,3))

// WA Function to check person can vote or not
function personVote(year){
    var age= 2023-year
    // return age
    if(age>=18){
        return "can vote"
    }else{
        return "can not vote"
    }
}
console.log(personVote(2008))

// WA Function to check number is prime or not
function checkPrime(num){
    var isprime =true
    for(var i=2; i<num; i++){
        if(num % i ==0){
            isprime=false
        }
    }
    if(isprime==true){
        return("prime Number")
    }else{
        return("Not Prime Number")
    }
}
console.log(checkPrime(45))

// calculate percentage of student with 5 subjects if the percentage is greater than 34 then mark them as pass else fail

function marks(maths, english, science, social, hindi){
    var percentage= (maths+ english+ science+ social+ hindi)/5

    if(percentage>34){
        return("Pass")
    }else{
        return("Fail")
    }  
}
var finalPercentage = marks(60,76,87,95,55)
console.log(finalPercentage)

// WA finction to print series
// 1+ x + x^2/2! + x^3/3!  + x^4/4! ...... x^(n-1)/!(n-1)

// First we Calculate Power 

function power(a,b){
    return (a**b)
}
console.log(power(2,3))

// Second we calculate Factorial of a  Number

function factorial(n){
    var fact = 1 
    for(var i = 1; i<=n ; i++){
        fact = fact*i
    }
    return fact
}
console.log(factorial(5))

var x= 2
var n= 5
var sum = 0

for(var i =0 ; i<n ; i++){
   sum = sum+power(x,i)/factorial(i)
}
console.log(sum)

// WA finction to print series  ----------------------------------------------------------------------
// 1+ x^2/2!   + x^4/4! + x^6/6! + x^8/8! ...... x^2(n-1)/!2(n-1)

// First we Calculate Power 

function pow(a,b){
    return (a**b)
}
/*console.log(power(2,3)) */

// Second we calculate Factorial of a  Number

function factorialsecond(n){
    var fact = 1 
    for(var i = 1; i<=n ; i++){
        fact = fact*i
    }
    return fact
}
/*console.log(factorial(5))*/

var x= 2
var n= 5
var sum = 0

for(var i =0 ; i<2*n ; i++){
    if(i%2==0){
       sum = sum+pow(x,i)/factorialsecond(i)
    }    
}
console.log(sum)










