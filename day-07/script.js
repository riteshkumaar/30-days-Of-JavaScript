// Activity - 1: Object creation and access
let book = {
    name: "Animal Farm",
    author: "George Orwell",
    year: 1982,
    RandomFunction : function()
    {
        return this.name+" "+this.author+" "+this.year
    },
};
console.log(book);
console.log(book.name);
console.log(book.author);

// Activity-2 : Object methods
let kitaab = {
    name: "Animal Farm",
    author: "George Orwell",
    year: 1982,
    myFunction: function(){
        return `${kitaab.name} and ${kitaab.author}`
    },
    myUpdate: function(year)
    {
        kitaab.year = year;
        return `${year}`;
    }
};
console.log(kitaab.myUpdate(2020));
console.log(kitaab.myFunction());
console.log();

// Activity-3 : Nested Objects 
let books = "books";
let library={
    name: "Indian National Library",
    [books]: ["Animal farm", "The Tempest","Gaban","Godaan"]
}
console.log(library);
console.log(library.name);
console.log(library[books]);

// Activity-4: The this keyword
// The function above has been changed
console.log(book.RandomFunction());
console.log();

// Activity-5: Object iteration
for(let property in book)
{
    console.log(`${property}: ${book[property]}`);
}
console.log(Object.keys(book));
console.log(Object.values(book));
