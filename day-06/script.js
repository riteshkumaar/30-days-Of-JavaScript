// Activity - 1: Array Creation and access
let arr = [ 1 , 2 , 3 , 4 , 5]
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length-1]);

// Activity - 2 : Array methods - Basic
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(10)
console.log(arr);
console.log();

// Activity - 3 : Array methods - Intermediate
let ar = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const m1 = ar.map((x) => x * 2)
console.log(m1);
const fil = ar.filter((x) => (x%2==0))
console.log(fil);
const initialValue = 0;
const sum = ar.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sum);

// Activity - 4 : Array Iteration 

ar = [ 0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
for(let i=0;i<ar.length;i++)
    process.stdout.write(ar[i]+" ")
console.log();
ar.forEach((element) => process.stdout.write(element+" "));
console.log();

// Activity - 5 : Multidimensional Arrays
let array = [
    [1 ,2 , 3 ],
    [4 , 5 , 6 , 7], 
    [8 , 9 , 10, 11, 12]]
console.log(array);
console.log(array[0][2]);
