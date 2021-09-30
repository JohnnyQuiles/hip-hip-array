/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.

console.log(' Challenge 1 ! ');

const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]); 
}

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.

console.log(' Challenge 2 ! ');

const grades = [100, 80, 110, 75, 83, 64];

console.log('for'); 

for (let i = 0; i = grades.length - 1; i >=0; i = i - 1) {
  const value = grades[i];
  console.log('i:', i, ', value:', value);
}


// Challenge 3
// Console.log out only the even numbers in the following array.

console.log(' Challenge 3 ! ');

const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i <= positiveNumbers.length - 1; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]); 
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.

console.log(' Challenge 4 ! ');

const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
  if(mixedSignNumbers[i] % 2 === 0 || mixedSignNumbers[i] % 2 === 0 && mixedSignNumbers[i] <= 0) {
    console.log('index:', i, 'number:', mixedSignNumbers[i]); 
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.

console.log(' Challenge 5 ! ');

const symmetricalCapitals = ['I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i]);
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.

console.log(' Challenge 6 ! ');

const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

for(const number of fibonacciNumbers) {
  console.log(number); 
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

console.log(' Challenge 7 ! ');

const array = [5, 4, 3, 2, 1];

for (let i = 0; i < array.length; i++) {
  const value = array[i];
  console.log(value);

}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

console.log(' Challenge 8 ! ');

const challenge8 = [];

challenge.push(1);
challenge.push(2);
challenge.push(3);
challenge.unshift(4);
challenge.unshift(5);

for (let i = 0; i < challenge8.length; i++) {
  const value = challenge8[i];
  console.log(value); 
}



// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

console.log(' Challenge 9 ! ');

for (let i = 3; i <= 10; i++) {
  console.log(students[i]);
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

console.log(' Challenge 10 ! ');

const studentsCopy = []

for (let i = 3; i < 10; i++) {
  const value = students[i];
  studentsCopy.push(value);
}

for (let l of studentsCopy) {
  console.log(1);
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

console.log(' Challenge 11 ! ');

const studentsSlice = students.slice(3, 10);
console.log(studentsSlice);
console.log(students);

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.

console.log(' Challenge 12 ! ');

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

const spliceValues = dinosaurs.splice(4, 3);

console.log('Spliced Version');
for (const value of spliceValues) {
    console.log(value);
} 
console.log('Original Version'); 
for (const value of dinosaurs) {
    console.log(value);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

console.log(' Challenge 13 ! ');

const dinoString = dinosaurs.join('*');
console.log(dinoString);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

console.log(' Challenge 14 ! ');

dinosaurs.reverse();
console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.

console.log(' Challenge 15 ! ');

const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const third = primaries.concat(secondaries);

for (let i = 0; i < third.length; i++) {
  const value = third[i];
  console.log(value);
}

console.log(primaries);
console.log(secondaries);