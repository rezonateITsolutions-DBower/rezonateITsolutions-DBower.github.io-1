let size = prompt("Enter a height for the pyramind: ");
printPyramid(size);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  for (let i = 0; i < height; i++){
    let output = '';
    for(let j = 0; j < height - i; j++) output += ' ';
    for (let k = 0; k <= i; k++) output += '#';
    console.log(output);
  }

    // TODO #1
    // print that pyramid!

}