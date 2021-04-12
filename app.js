// EASY GOING
// 1. Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// GET EVEN
// 1. Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// EXCITED KITTEN
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// const catResponses = [
//   '...human...why you taking pictures of me?...',
//   '...the catnip made me do it...',
//   '...why does the red dot always get away...'
// ];

// for (let i = 0; i < 20; i++) {
//   console.log('Love me, pet me! Hsssssss');

//   if (i % 2 === 0) {
//     const randomIndex = Math.floor(Math.random() * catResponses.length);

//     console.log(catResponses[randomIndex]);
//   }
// }

// FIZZ BUZZ
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// GETTING TO KNOW YOU
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
kenny.shift();
kenny.unshift('Gameboy');

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] = jimClark[1] + 1;

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = 'Gotham City';

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.splice(2, 1);
reuben.splice(2, 0, 'Chicago');

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.splice(2, 1, 'Santiago', 'San Diego', 'Tokyo');

// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
jimHaff.splice(2, 1);

// YELL AT THE NINJA TURTLES
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michelangelo'];

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
// for (let i = 0; i < turtles.length; i++) {
//   console.log(turtles[i].toUpperCase());
// }

// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

// LOOP THROUGH ALL THE TURTLES
for (let i = 0; i < turtles.length; i++) {
  let originalTurtle = turtles[i];
  let updatedTurtle = '';

  // FOR EACH TURTLE LOOP THROUGH EACH LETTER
  for (let j = 0; j < originalTurtle.length; j++) {
    // IF LETTER IS EVEN MAKE IT UPPERCASE
    if (j % 2 === 0) {
      updatedTurtle += originalTurtle[j].toUpperCase();
    // IF LETTER IS ODD MAKE IT LOWERCASE
    } else {
      updatedTurtle += originalTurtle[j].toLowerCase();
    }
  }

  console.log(updatedTurtle);
}

// RETURN OF THE CLOSETS
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1.
// const [ kristynsShoe ] = kristynsCloset.splice(0, 1);
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

// 1. Dress em up
kristynsOutfits = [
  [kristynsCloset[0], kristynsCloset[2], kristynsCloset[4]],
  [kristynsCloset[0], kristynsCloset[3], kristynsCloset[5]],
  [kristynsCloset[1], kristynsCloset[2], kristynsCloset[6]],
];

thomsOutfits = [
  [thomsCloset[0][1], thomsCloset[1][1], thomsCloset[2][1]],
  [thomsCloset[0][2], thomsCloset[1][2], thomsCloset[2][3]],
  [thomsCloset[0][3], thomsCloset[1][2], thomsCloset[2][2]],
];

// Dirty Laundry
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// for (let i = 0; i < kristynsCloset.length; i++) {
//   console.log(`WHRR: Now washing ${kristynsCloset[i]}`);
// }

// Inventory
// 1. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
// for (let i = 0; i < thomsCloset.length; i++) {
//   console.log(thomsCloset[i]);
// }

// MULTIPLES OF 3 and 5
// let sum = 0;

// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// HUNGRY FOR MORE
// 1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument.
// let argument = 7;

// for (let i = 1; i < argument + 1; i++) {
//   console.log('#'.repeat(i));
// }

// 2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument. This is deceptively tricky.
// let argument = 7;

// for (let i = 1; i < argument + 1; i++) {
//   console.log(' '.repeat(argument - i) + '#'.repeat(i));
// }

// 3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.
// let argument = 7;

// for (let i = argument; i > 0; i--) {
//   console.log('#'.repeat(i));
// }

// 4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument. This is also tricky.
// let argument = 7;

// for (let i = argument; i > 0; i--) {
//   console.log(' '.repeat(argument - i) + '#'.repeat(i));
// }

// 5. 

// FIND THE MEDIAN
// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];

// // PSEUDOCODE
// // - SORT THE ARRAY OF NUMBERS FROM SMALLEST TO LARGEST
// // - GET THE LENGTH OF THE ARRAY AND DIVIDE BY 2

// const sortedNums = nums.sort((a, b) => a - b);

// const middleIndex = Math.floor(sortedNums.length / 2);

// console.log(sortedNums[middleIndex]);