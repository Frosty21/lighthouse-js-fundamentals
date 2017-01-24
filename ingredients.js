var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i = 0;
console.log("Kitchen stuff to pack:");
While (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("Kitchen stuff to pack:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Kitchen stuff to pack:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[ingredients.length-(i+1)]);
}
