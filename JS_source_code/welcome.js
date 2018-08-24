/*Function welcome.js take no arguments and returns a greeting statement*/
/*  This function greets a visitor to the home page with a Hello and Good ...
*/

let today = new Date();  //today is set by the built in Date() function
let hourNow = today.getHours(); //hourNow converts the date to the current hour
var greeting; // The return variable is global


/**
 * Returns a greeting
 * 
 * @returns {string} greeting like 'Good Morning
 */
function greeting() {

    if (hourNow > 18) { // If after 6PM
        greeting = 'Good evening!';

    } else if (hourNow >= 12) {  // If after Noon
        greeting = 'Good afternoon!';

    } else if (hourNow >= 0) {  // If after Midnight
        greeting = 'Good morning!';

    } else { // Final else statement if 
        greeting = 'Welcome!';
    }
    return 'Hello and ' +  greeting;
}
//Use DOM manipulation to put the greeting in the web page 
document.write(greeting());

