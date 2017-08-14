
var moment = require('moment');
const chalk = require('chalk');


let testM = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("It is " + chalk.blue(testM) + ".");



let dayYear = moment().dayOfYear();
console.log("It is the " + chalk.red(dayYear + "th" ) + " day of the year.");


let seconds = moment().get('second');
let minutes = moment().get('minute');
let hours = moment().get('hour');
let hoursInSeconds = ((hours * 60) * 60);
let minutesInSeconds = (minutes * 60);
let totalSeconds = ( hoursInSeconds + minutesInSeconds + seconds);

console.log("It is " + chalk.green(totalSeconds) + " seconds into the day.")

// var m = moment(new Date(2011, 2, 12, 5, 0, 0)); // the day before DST in the US
// m.hours(); // 5
// m.add(1, 'days').hours(); // 5
// console.log(m);

function dayLight(){
  let day = moment().dayOfYear();
  if (day < 71 || day > 309){
    return(chalk.green("is not"));
    // console.log("It" + chalk.green("is not") + " daylight savings")
  }
  else{
    return(chalk.green("is"));
    // console.log("It " + chalk.green("is") + " daylight savings")
  }
};

console.log("It " + dayLight() + " daylight savings");
// return(dayLight());


function leapYear(){
  let leap = moment().isLeapYear();
  if (leap){
    return("is")

  }
  else{
    return("is not")
    // console.log("It " + chalk.red("is not") + " a leap year.");
  }

};

console.log("It " + chalk.red(leapYear()) + " a leap year.")

// return(leapYear());


















//
// Combine styled and normal strings
// console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
//
// // Compose multiple styles using the chainable API
// console.log(chalk.blue.bgRed.bold('Hello world!'));
//
// // Pass in multiple arguments
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
//
// // Nest styles
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
//
// // Nest styles of the same type even (color, underline, background)
// console.log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
//
// // ES2015 template literal
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
//
//
//
// // Use RGB colors in terminal emulators that support it.
// console.log(chalk.keyword('orange')('Yay for orange colored text!'));
// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#DEADED').bold('Bold gray!'));
