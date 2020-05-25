const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?\n`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})
readline.question(`How old are you?\n` , (age) => {
    console.log(`You're only ${age}!`)
    readline.close()
})


// If you go to file > open and open the folder named Development,
// Then anytime you open a terminal the terminal will be in Documents/Development by default
// You can tell what directory a terminal is in by looking to the left of your cursor

// Any other questions?
// I updated the file to put a newline when it asks, so it feels more usable