// find the percentage 

let maths=  45
let science =  67
let social=  89
let hindi= 74
let english= 87

let avg = maths+science+social+hindi+english/5
console.log(avg)

///*Task*/
/*Q.2 write a programme to calculate Simple interest   si=(p*t*r)/100   */

let p = 1000
let t = 2
let r = 3

let si = (p*t*r)/100
console.log(si)

// WAP to check a person can vote or not 
//condiotional operator

let year = 2008
let age = 2023-year

let result = age>=18 ? "you can vote" : "you can not vote"
console.log(result)

//Q.1 calculate percentage of student with 5 subjects if the percentage is greater than 34 then mark them as pass else fail


let subject1=  45
let subject2 =  67
let subject3=  89
let subject4= 74
let subject5= 87

let average = maths+science+social+hindi+english/5
console.log(average)

if(average>34){
    console.log("pass")
}else{
    console.log("fail")
}

// Q.2   take year of birth and check whether user  can vote or not

let yr = 2005
let Age = 2023-yr
if(Age>=18){
    console.log("you can vote")
}else{
    console.log("you can not vote")
}

// Q3   print biggest number out of 2 numbers ------------------------------------------------------------------

let num1 = 200
let num2 = 300

if(num1>num2){
    console.log(num1)
}else{
    console.log(num2)
}

//Q4 . WAP to check triangle is valid or note if its 3 angles are given . [Sum of angle must be equal to 180 deg ]
var angle1 = 40
var angle2 = 40
var angle3 = 100

if(angle1+angle2+angle3 ==180){
    console.log('Triangle is Valid')

}else{
    console.log('Triangle is Not Valid')
}

//Q5. WAP to check triangle is valid or note if its 3 sides are given . [Sum of any two sides must be greater than third one  ]

var side1 = 60
var side2 = 80
var side3 = 40

var sum_of_two_sides = side1+side2
console.log(sum_of_two_sides)

if (sum_of_two_sides>side3){
    console.log('Triangle is valid ')
}else{
    console.log('Triangle is not valid')
}

//Q6. WAP to check whether a number is even or odd ---------------------------------------------------------------------

var num = 45
if(num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}

//Q7.  WAP to check whether a number is fully divisible by 5 and 7 both---------------------------------------------------
var num = 35

if(num%5==0 && num%7==0){
    console.log('Divisible by 5 and 7')
}else{
    console.log('Not Divisible by 5 and 7')
}

//Q8. Calculate tax on salary
// case1. if salary less than 45000/month ,then tax will be 5% of the salary
//case 2. if salary greater than 45000/month ,then tax will be 5% upto 45000 then 10% on remaining amount

var salary = 70000

var fivePercentTax = (45000*5)/100
console.log("Five Percent Tax :",fivePercentTax)

if(salary>=45000){
    var remainingSalary = salary-45000

    var tenpercentTax = (remainingSalary*10)/100
    console.log("Ten Percent Tax :",tenpercentTax)
}
var totalTax = fivePercentTax+tenpercentTax
console.log("Total Tax : ",totalTax)

// ---------------------------------------------Currency Problem --------------------------------------------

var amount = 7811

if(amount>=2000){
    var note2000 = (amount-amount%2000)/2000

    amount=amount%2000
}

if(amount>=500){
    var note500 = (amount-amount%500)/500
    amount= amount%500
}

if(amount>=200){
    var note200 = (amount-amount%200)/200
    amount= amount%200
}

if(amount>=100){
    var note100 = (amount-amount%100)/100
    amount= amount%100
}

if(amount>=10){
    var note10= (amount-amount%10)/10
    amount= amount%10
}

if(amount>=1){
    var note1= (amount-amount%1)/1
    amount= amount%1
}

console.log("2000: ", note2000)
console.log("500: ", note500)
console.log("200: ", note200)
console.log("100: ", note100)
console.log("10: ", note10)
console.log("1: ", note1)
console.log("remaining Amount: ", amount)

//  WAP to print type of triangle Isosceles , equilateral, scalan ---------------------------------------------------------
var s1 =44
var s2 = 36
var s3 = 44

if(s1==s2 && s1==s3 && s2==s3){
    console.log("This is Equilatral Triangle")
}else if(s1==s2 || s1==s3 || s2==s3){
    console.log("Isoscales Triangle")
}else {
    console.log("Scalen Triangle ")
}

// Calculate Year, Month ,Day ,Hours, Min out of given seconds

var givenSeconds = 2349821780

var SEC_IN_YEAR = 31536000
var SEC_IN_MONTH = 2630000
var SEC_IN_DAY = 86400
var SEC_IN_HR = 3600
var SEC_IN_MIN = 60

if(givenSeconds >= SEC_IN_YEAR){
  var Year = (givenSeconds - givenSeconds%SEC_IN_YEAR)/SEC_IN_YEAR
  console.log("years : ", Year)
  givenSeconds = givenSeconds%SEC_IN_YEAR

}

if(givenSeconds >= SEC_IN_MONTH){
    var month = (givenSeconds - givenSeconds%SEC_IN_MONTH)/SEC_IN_MONTH
    console.log("months : ", month)
    givenSeconds = givenSeconds%SEC_IN_MONTH
  
  }

  if(givenSeconds >= SEC_IN_DAY){
    var day= (givenSeconds - givenSeconds%SEC_IN_DAY)/SEC_IN_DAY
    console.log("days : ", day)
    givenSeconds = givenSeconds%SEC_IN_DAY
  
  }

  if(givenSeconds >= SEC_IN_HR){
    var hr = (givenSeconds - givenSeconds%SEC_IN_HR)/SEC_IN_HR
    console.log("hrs : ", hr)
    givenSeconds = givenSeconds%SEC_IN_HR
  
  }

  if(givenSeconds >= SEC_IN_MIN){
    var min = (givenSeconds - givenSeconds%SEC_IN_MIN)/SEC_IN_MIN
    console.log("mins : ", min)
    givenSeconds = givenSeconds%SEC_IN_MIN
  
  }

  // print Grade of a student based on average marks
// A => above 85
// B => above 75
// C => above 65
// D => above 45
// F => above 0

var percentage = 67

if(percentage >= 85){
  console.log('grade a')
}else if(percentage >= 75){
  console.log('grade b')
}else if(percentage >= 65){
  console.log('grade c')
}else if(percentage >= 45){
  console.log('grade d')
}else{
  console.log('fail')
}

// WAP to print Daycount between 1-7 

var Daycount = 1

if(Daycount==1){
    console.log("Monday")
}else if(Daycount==2){
    console.log("Tuesday")
}else if(Daycount==3){
    console.log("Wednesday")
}else if(Daycount==4){
    console.log("Thursday")
}else if(Daycount==5){
    console.log("Friday")
}else if(Daycount==6){
    console.log("Saturday")
}else if(Daycount==7){
    console.log("Sunday")
}else{
    console.log("Invalid")
}

//------------------OR ---------------------------------------//

var daycount = 1

if(daycount>7 || daycount<1){
    console.log("Invalid")
}else{
    if(daycount==1){
        console.log("Monday")
    }if(daycount==2){
        console.log("Tuesday")
    }if(daycount==3){
        console.log("Wednesday")
    }if(daycount==4){
        console.log("Thursday")
    }if(daycount==5){
        console.log("Friday")
    }if(daycount==6){
        console.log("Saturday")
    }if(daycount==7){
        console.log("Sunday")
    }
}

//----------------------------Switch case -------------------------------//

var daycount = 1

switch(daycount){
    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    case 4:
        console.log("Thursday")
        break

    case 5:
        console.log("Friday")
        break

    case 6:
        console.log("Saturday")
        break

    case 7:
        console.log("Sunday")
        break

    default:
        console.log("Invalid")

}