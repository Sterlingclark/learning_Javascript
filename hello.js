let name = "Bin"; 
let hp = 3;
let gold = 30;
let age = 250;

console.log("Your name is " + name)
console.log("hp: " + hp);
console.log("gold: " + gold);
console.log("You walk in to the local tavern");

if (name == "Bin") {  
    console.log("Welcome back to the Tavern");
} else {
    console.log("Hello and welcome to Sterling's Tavern");
}

if (hp < 5) {
    console.log("You look tired have a free nights stay");
} else {
    gold = gold - 10; 
    console.log("That will be 10 gold");
}
console.log("you spent the night at the inn you have " + gold + " gold in your bag");