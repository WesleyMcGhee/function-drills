let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE
function theEliminator (contestants, loser){
  for (let i in contestants){
    if (contestants[i] === loser){
      contestants.splice(i, 1);
    }
  }
  return contestants
}
console.log(theEliminator(contestants, loser));