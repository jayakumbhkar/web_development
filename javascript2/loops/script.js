//  print the name 10 times
for(var i=0; i<10; i++){
    console.log("Zayn")
}

// print counting from 1to10
for(var i=1; i<=10;i++){
    console.log(i)
}
for(var i=21; i<=30 ;i++){
    console.log(i)
}

// WAP to print table of 5 
for(var i=1; i<=10; i++){
    console.log(i*5)
}

//WAP to print even number till 500
n=500
for(var i=0; i<n; i++){
    if(i%2==0){
        console.log(i)
    }
}

// WAP to print sum of first 10 natural number

var sum = 0
for(var i=1; i<=10; i++){
    sum = sum+i
    console.log(sum)
}

//wap to print sum of n natural no(n can be any no)
var sum=0
var n = 20
for(var i=1; i<=n; i++){
    sum= sum+i   
    console.log(sum)
}

//wap to print sum of even no upto n
var n=20

for(var i=0; i<n; i++){
    if(i%2 ==0 ){
        console.log(i)
    }
}

// WAP to print first 10 even number
var requiredEven = 10
var count = 0
var number =1

while(count!=requiredEven){
    if(number%2 ==0){
        console.log(number)
        count++
    }
    number++
}

// wap to print sum of odd no upto n

var sum = 0
var n = 20
for(var i=0; i<n; i++){
    if(i%2 !=0){
        // console.log(i)
        sum = sum+i
        console.log(sum)
    }
}
console.log(sum)

// WAP to print first 10 odd number
var requiredOdd = 10
var countOdd = 0 
var numberOdd = 1

while(countOdd != requiredOdd){
    if(numberOdd%2 != 0){
        console.log(numberOdd)
        countOdd++
    }
    numberOdd++
}

// wap to print multiplication of first n natural no
var n = 20
var mult = 1
for(var i= 1; i<=n; i++){
    mult = mult*i
    console.log(mult)
}
console.log("Total Mult" , mult)

// wap to print multiplication of  even no upto n
var n=10
var mult = 1
for(var i=1; i<=n; i++){
    if(i%2 ==0){
        mult = mult*i
        console.log(mult)
    }
}

// wap to print multiplication of  odd no upto n

var n=10
var mult = 1
for(var i=1; i<=n; i++){
    if(i%2 !=0){
        mult = mult*i
        console.log(mult)
    }
}

// Prime Number 
// WAP to check a number is Prime or Not

var n=11
var isprime = true
for(var i=2; i<n; i++){
    if(n%i ==0){
        isprime=false
        break
    }
}
if(isprime==true){
    console.log("Prime Number")
}else{
    console.log("Not Prime")
}

//---------------------------------------Break  Statement --------------------------------------------//

for(var i=0; 1<10; i++){
    console.log(i)
    console.log("How Are You")   
    if(i==3){
        break
    }
}

//---------------------------------------Continue  Statement --------------------------------------------//
for(var i=0; i<10; i++){
    
    if(i==5){
        continue
    }
    console.log(i)
    console.log("Hello")
}

//-------------------------------------------Nested Loop ---------------------------------------------------//
for(var i=1; i<=10; i++){
    for(j=1; j<=i; j++){
        console.log(j)
    }
}

for(var i=1; i<=10; i++){
    for(j=1; j<=i; j++){
        console.log(i)
    }
}

// print table from 1 to 5
for(var i=1; i<=5; i++){
    for(var j=1; j<=10; j++){
        console.log(i*j)
    }
}

//------------------------------print table from 1 to 10---------------------------------//
for(var i= 1; i<=10;i++){
    for(var j=1 ; j<=10; j++){
    console.log(i*j)
    }
}

// While Loop
var i=1
while(i<=10){
    
    console.log(i)
    i=i+1
}

//WAP to print digit of Number

var num = 123456789
while(num!=0){
    var lastdigit = num%10
    console.log(lastdigit)

    num = (num-lastdigit)/10
}

//WAP to print sum of digit of Number
var num2 = 123456789
var sum = 0
while(num2!=0){
    var lastdigit = num2%10

    sum = sum+lastdigit
    num2 = (num2-lastdigit)/10
}
console.log(sum)

//WAP to print square of digit of Number
var num3 = 123456789
while(num3 != 0){
    var lastdigit  =num3%10

    var sqr = lastdigit**2
    console.log(sqr)

    num3 = (num3-lastdigit)/10
}

//     length of digit of number

var num4 = 123456789
var countNum = 0

while(num4 != 0){
    var lastdigit = num4%10
    countNum++

    num4 = (num4-lastdigit)/10
}
console.log("Length of number :",countNum)


//WAP to print power of number of digit of  number 
var num5  = 12345
var numLength = 0
var numCopy = num5

while(num5 !=0){
    var lastdigit  = num5 % 10
    numLength++

    num5 = (num5-lastdigit)/10
}
console.log(numLength)

while(numCopy != 0){
    var lastdigit  = numCopy%10

    numCopy = (numCopy-lastdigit)/10

    console.log(lastdigit**numLength)
}

// reverse of  number

var num6  = 123456789
var rev = 0

while(num6 != 0 ){
    var lastdigit = num6%10

    rev = (rev*10)+lastdigit

    num6 = (num6-lastdigit)/10
}
console.log(rev)

//Palindrome

var num7  = 12321
var reverNum = 0
var num7Copy = num7

while(num7 != 0 ){
    var lastdigit = num7%10

    reverNum = (reverNum*10)+lastdigit
    num7 = (num7-lastdigit)/10
}
console.log(reverNum)

if(reverNum==num7Copy){
    console.log("It is Palindrome")
}else{
    console.log("It is not palindrome")
}

// Number is Perfect or not 

var num8  = 28
var sum = 0

for(var i=1; i<num8; i++){
    if(num8%i ==0){
        sum = sum+i
    } 
}
console.log(sum)

if(sum ==num8){
    console.log("Number is Perfect")
}else{
    console.log("Number is not Perfect")
}

// WAP to Print first n prime Number in simple way

var requiredPrime =10
var primeFoundCount =0
var number =1

while(primeFoundCount != requiredPrime){

    var isprime = true
    for(var i=2; i<number; i++){
        if(number%2 ==0){
            isprime=false
        }
    }
    if(isprime==true){
        console.log(number)
        primeFoundCount++
    }
number++
}
