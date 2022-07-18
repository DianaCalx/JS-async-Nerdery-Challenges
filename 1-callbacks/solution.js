/*
INSTRUCTIONS

1. create an array that contains 5 names, include 1 or more of the allowed usernames located in validate-user.js
2. iterate the array, keep an eye on performance, and validate every username with the function exported in validate-user.js
3. process and format every result, so that the program console.log the success results in a group, and the failure results in a group

Example:

Success

id:1
name: John

id:2
name: Mary

Failure

User Michael not allowed
User Benjamin not allowed

4. if you want to challenge yourself, add the needed logic so the program can read the array of names from the terminal
** check about node.js process.argv **

Example:

node solution.js name1,name2,name3, or
node solution.js name1 name2 name3

5. another challenge is: after you solve the challenge using callback style, in another file promisify the callback and solve it again
** give a look to node.js util.promisify, avoid to alter the validate-user.file **
*/

const validator = require('./validate-user');

function solution() {
    // YOUR SOLUTION GOES HERE

    // you get your 5 names here
    const vars = process.argv.slice(2).length ? [...process.argv.slice(2)] : ['John', 'Diana', 'Jose', 'Stacy', 'Mary'];
    let splitNames = [];
    if (vars[0]?.includes(',')) {
      splitNames = vars[0].split(',');
    }
    const names = splitNames.length ? [...splitNames] : [...vars];

    const failures = [];
    const success = [];

    let counter = 0;

    const callback = (error, data) => {
      if(error?.message){
        failures.push(error.message);

      } else if (data){
        success.push(data);
      }

      counter++;
      // log the final result
      if(counter === names.length){

        console.log(`\nArray: ${JSON.stringify(names)}\n`);

        if(success.length > 0){
          console.log("Success\n");
          success.forEach(s => {
            console.log(`id: ${s.id}`);
            console.log(`name: ${s.name}\n`);
          });
        }
    
        if(failures.length > 0){
          console.log("Failure\n");
          failures.forEach(f => console.log(f));
        }

        console.log('');
      }
    }
    
    // iterate the names array and validate them with the method
}

solution();
