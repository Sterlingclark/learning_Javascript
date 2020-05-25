let myName = "Sterling";
let partyMembers = [];
let john = {
    name: "John",
    age: 20,
    hp: 10,
    gold: 10,
    ap: 1,
    def: 1
};

let jane = {
    name: "Jane",
    age: 21,
    hp: 2,
    gold: 12,
    ap: 2,
    def: 2
};

partyMembers.push(john);
partyMembers.push(jane);

console.log("Welcome to person quest. You have", partyMembers.length, "in your party.");

function runTurn(){
    console.log("Player list:");
    for (let i = 0; i < partyMembers.length; i++) {
        let member = partyMembers[i];
        console.log("Party member name is " + member.name);
        console.log("hp: " + member.hp);
        console.log("gold: " + member.gold);
        if (member.hp < 3) {
            console.log(member.name, "IS CRITICALLY HURT!")
        }
        console.log("----------------------\n")
    }        
}

for (let turnCount = 1; turnCount <= 3; turnCount ++) {
    console.log("\nCurrently on turn", turnCount);
    runTurn();
}
