// Activity - 1 : For Loop
for(let i=1;i<=10;i++)
    process.stdout.write(i+" ");
console.log();
console.log("Multiplication table of 5");
for(let i= 1;i<=10;i++)
{
    console.log(`5 * ${i} = ${5*i}`);
}
console.log();

// Activity - 2 : While loop
let i = 1;
let s = 0;
while(i<11)
{
    s += i;
    i++;
}
console.log(s);
console.log();
i--;
while(i>0)
{
    process.stdout.write((i--)+" ");
}
i++;
console.log();

// Activity - 3: do-while loop
do
{
    process.stdout.write((i++)+" ");
}   while(i<6);
i--;
let p = 1;
do
{
    p = p * (i--);
}while(i>0);
console.log("The factorial is "+p);
console.log();

// Activity -4 :  Nested loops
for(let a = 1;a<=5 ; a++)
{
    for(let b=1;b<=a;b++)
        process.stdout.write("* ");
    process.stdout.write("\n");
}

// Activity - 5 : Loop-control statements
for(let i=1;i<=10;i++)
{
    if(i==5)
        continue;
    process.stdout.write(i+" ");
}
console.log();
for(let i=1;i<=10;i++)
{
        if(i==7)
            break;
        process.stdout.write(i+" ");
}
