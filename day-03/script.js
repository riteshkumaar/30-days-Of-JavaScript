// Activity - 1: if-else statements
let num = 0
if(num > 0)
    console.log("The number is +ve");
else
    if(num < 0)
    console.log("The number is -ve");
else 
    console.log("The number is 0");
console.log();
let age = 21
    if(age>=18)
        console.log("Yes, can vote.");
    else
        console.log("No, no not possible to vote.");

// Activity - 2: Nested if-else statements
let a = 10;
let b = 25;
let c = 12;
if(a>b)
{
    if(a>c)
        console.log("Largest is "+a);
    else
        console.log("Largest is "+c); 
}
else 
    if(c>b)
    {
        if(a>c)
            console.log("Largest is "+a);
        else
            console.log("Largest is "+c); 
    }
else 
    if(b>a)
    {
        if(b>c)
            console.log("Largest is "+b);
        else
            console.log("Largest is "+c); 
    }       

// Activity - 3 : Switch case
const ch = 2;
switch(ch)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;    
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input.");
}
let marks = 75
switch(true)
{
    case (marks>=90 && marks<=100):
        console.log("A");
        break;
    case (marks>=80 && marks<90):
        console.log("B");
        break;    
    case (marks>=70 && marks<80):
        console.log("C");
        break;
    case (marks>=60 && marks<70):
        console.log("D");
        break;
    case (marks>=50 && marks<60):
        console.log("E");
        break;
    case (marks>=40 && marks<50):
        console.log("F");
        break;
}
// Activity - 4 : Ternary Operator
let numb = 24;
(numb%2==0) ? console.log("Even") : console.log("Odd");

// Activity - 5 : Combining Conditions
let year = 2012
if(year%4==0)
{
    if(year%100==0 && year%400==0)
        console.log("Leap year");
    else
        if(year%100==0 && year%400!=0)
        console.log("Not a leap year.");
    else
        console.log("Leap year.");
}
else
{
    console.log("Not a leap year.");
}
