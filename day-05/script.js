// Activity - 1: Function declaration
function EvenOrOdd(num)
{
    if(num%2==0)
        return 0;
    else
        return 1;
}
if(EvenOrOdd(30)==1)
    console.log("Odd");
else
    console.log("Even");
function squar(num)
{
    return num * num ;
}
console.log(squar(5));

// Activity 2 : Function expression

function maxi(num1, num2)
{
    if(num1>num2)
        return num1
    else
    return num2
}
console.log(maxi(5,7));
function conc(st1, st2)
{
    return st1 + st2
}
console.log(conc("Hello"," Ritesh"));

// Activity 3 : Array Functions
function sum(st1, st2)
{
    return st1 + st2
}
console.log(sum(35,53));

function containss(st) {   
    let i = 0;
    while (i < st.length) {
        if (st[i] === 'b') {
            return true;
        }
        i++;
    }
    return false;
}

console.log(containss('arrow'));
console.log(containss('table'));

// Activity 4 : Function parameters and default values

function product(num1, num2=5)
{
    return num1 * num2
}
console.log(product(5));

function greeting(name, age = 18)
{
    let st 
    st = "Hello "+name +", once you turn "+age+" you can vote." 
    return st
}
console.log(greeting("Ritesh"));

// Activity 5 : Higher Order Functions 
function keepCalling(func, num) {
    if (num == 0) {
        return;
    }
    func();
    keepCalling(func,num-1)
}

function keepGettingCalled() {
    console.log("Function has been called");
}

keepCalling(keepGettingCalled, 5);

function printValue(value) {
    console.log(value);
    return value;
  }
  
  function returnValue(value) {
    return value;
  }
  function HOF(fun1, fun2, value) {
    console.log("Higher Order Function");
  
    const result1 = fun1(value);
    const result2 = fun2(result1);
  
    console.log(result1 + " " + result2);
  }
  
  let val = HOF(printValue, returnValue, 5);
