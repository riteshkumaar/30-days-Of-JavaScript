// Activity - 1 : Template Literals
let name = "Ritesh"
let age = 21
console.log(`Name : ${name} \n Age :${age}`);
name=`Pandit Gangadhar Vidyadhar
Mayadhar Shastri`
console.log(`Name : ${name} \n Age :${age}`);

// Activity - 2: Destructuring
let arr=[1 , 3 , 5 , 7 , 9],first, second
[first, second] = [arr[0],arr[1]]
console.log(first);
console.log(second);
let book = {
    name:"Gaban",
    author:"Premchand"
}
let naam,lekhak
[naam, lekhak]=[book.name, book.author]
console.log(`${naam} by ${lekhak}`);

// Activity - 3 : Spread and rest operators
let newArr = [0 , -1 , ...arr]
console.log(newArr);
function newFun(...num)
{
    let ans = 0;
    for(const arg of num)
        ans = ans + arg
    return ans 
}
console.log(newFun(10, 20, 30));

// Activity - 4 : Default paramters
function product(num1, num2=1)
{
    return num1 * num2
}
console.log(product(5));

//Activity - 5 : Enhanced Object Literals
let myName = "Ritesh"
let myAge = 21
let myCountry = "India"
let greeting = function()
{
    return `Hello ${myName}`
};
let ans = {myName,myAge,myCountry,greeting : greeting()};
console.log(ans);
console.log();
let p1 = "name";
let p2 = "age";
let p3 = "City";
let person = {
    [p1] : "Ritesh",
    [p2] : "21",
    [p3] : "Kolkata"
}

console.log(person); // 
console.log(person[p1]); 
console.log(person[p2]);
console.log(person[p3]); 
