// ----------  Easy Going ----------
// 1. Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
   console.log('Easy Going: ' + i);
}


// ---------- Get Even ----------
// 1) Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i++) {
   if (i % 2 === 0) {
      console.log('Get Even: ' + i);
   }
}


// ---------- Excited Kitten ----------
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const cat = 'Love me, pet me! HSSSSSS!';
const stringArray = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
for (let i = 1; i <= 20; i++) {
   console.log('Excited Kitten: ' + i);
   console.log('   ' + cat);
   if (i % 2 === 0) {
      const randomArray = stringArray[Math.floor(Math.random() * stringArray.length)];
      console.log('   ' + randomArray);
   }
}


// ---------- Fizz Buzz ----------
// Write a javascript application that logs all numbers from 1 - 100 AND:
//   1. If a number is divisible by 3 log "Fizz" instead of the number.
//   2. If a number is divisible by 5 log "Buzz" instead of the number.
//   3. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz: ' + 'FizzBuzz');
   }
   if (i % 3 === 0) {
      console.log('Fizz Buzz: ' + 'Fizz');
   }
   if (i % 5 === 0) {
      console.log('Fizz Buzz: ' + 'Buzz');
   } else {
      console.log('Fizz Buzz: ' + i);
   }
}


// ---------- Getting to Know You ----------
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
kenny.splice(0, 1, "Gameboy");
console.log('Getting to Know You (1): ' + kenny);

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] = jimClark[1] + 1;
console.log('Getting to Know You (2): ' + jimClark);

// 3. Ryan is Batman maybe.Or possibly Robin.Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, 'Gotham City');
console.log('Getting to Know You (3): ' + ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago.First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.splice(2, 1);
reuben.push('Chicago');
console.log('Getting to Know You (4): ' + reuben);

// 5. Jim Haff could be literally anywhere in the world.Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.splice(2, 1, 'Boston', 'New York City', 'Bangkok');
console.log('Getting to Know You (5): ' + jimHaff);

// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using.splice()
jimHaff.splice(2, 1);
console.log('Getting to Know You (Bonus): ' + jimHaff);


// ---------- Yell at the Ninja Turtles ----------
// 1. Create an array with the members of the ninja turtles(Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// 2. Use a for loop to call.toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninjaTurtles.length; i++) {
   ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
   console.log('Yell at the Ninja Turtles: ' + (i + 1) + '- ' + ninjaTurtles[i]);
}

// TODO - 3. Bonus: Modify the answer you just wrote.Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.


// ---------- Return of the Closets ----------
const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
];
const thomsCloset = [
   [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
   ], [
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
   ], [
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
   ]
];

// Alien Attire: Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset.splice(0, 1);
thomsCloset[2][3] = kristynsShoe;
console.log('Return of the Closets (1): ' + thomsCloset);

// --- Dress 'em Up: Modify your code to put together 3 separate outfits for Kristyn and Thom.Put the output in a sentence to tell us what we'll be wearing. Mix and match!
console.log('Return of the Closets (2):')
console.log(`  Today Kristyn will wear ${kristynsCloset[0]}, a ${kristynsCloset[2]}, and ${kristynsCloset[4]}.`);
console.log(`  Tomorrow Kristyn will wear ${kristynsCloset[5]}, a ${kristynsCloset[4]}, and a ${kristynsCloset[2]}.`);
console.log(`  The next day Kristyn will wear a ${kristynsCloset[1]}, ${kristynsCloset[0]}, and ${kristynsCloset[3]}.`);
console.log(`  Today Thom will wear a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}.`);
console.log(`  Tomorrow Thom will wear a ${thomsCloset[0][1]}, ${thomsCloset[1][1]}, and a ${thomsCloset[2][2]}.`);
console.log(`  The next day Thom will wear a ${thomsCloset[0][2]}, ${thomsCloset[1][1]}, and a ${thomsCloset[2][3]}.`);


// ---------- Dirty Laundry ----------
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.


// ----- Inventory
// 2. Thom wants to do inventory on his closet.Using bracket notation, log the arrays(not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.


// ----- Multiples of 3 and 5
// Yes, you might have tackled this earlier, but try it again(don't look back at your other code 👀)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// ----- Hungry for more ?
//   Triangles
// 0. declare a variable argument and set it equal to 7.
// 1. Write a loop that console logs a "left isosceles" triangle(SEE BELOW) made of '#' that has the height and length of argument.
/*
   Ex: argument is 7
#
##
###
####
#####
######
#######
*/
// 2. Write a loop that console logs a "right isosceles" triangle(SEE BELOW) made of '#' that has the height and length of argument.This is deceptively tricky.
/*
   Ex: argument is 7

      #
     ##
    ###
   ####
  #####
 ######
#######
*/
// 3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.
/*
   Ex: argument is 7

#######
######
#####
####
###
##
#
*/
// 4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.This is also tricky.
/*
   Ex: argument is 7

#######
 ######
  #####
   ####
    ###
     ##
      #
*/
// 5. Change the value of argument and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.

// ----- Find the Median
// -Find the median number in the following nums array, then console.log that number.
//hint this will likely involve breaking down the problem into a few steps
//hint: Click "Details" below(don't read this unless you've been stuck for a while)
//   Details: if you check the length of the array / 2, you might get not get a whole number.In which case, look into`Math.floor( // something )`
/*
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

Expected output:
=> 15
*/