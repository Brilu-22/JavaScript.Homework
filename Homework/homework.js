//EXERCISE 1

function addSums(num1, num2, num3, num4){  // defining a function called addSums
    return num1 + num2 + num3 + num4;   //  The addSums function is supposed to add the 4 parameters / arguments presented in the paranthesis and return the result  
}

let sum = addSums( 4 , 8, 3 , 9);  // declaring a variable called sum in which we will be replacing the 4 parameters declared in the function with numbers 
console.log ("The sum of the numbers is: " + sum); //  we then console.log a string with the added values declared in the sum variable 


//EXERCISE 2

const myconcat = (arr1, arr2) => arr1.concat(arr2); // we declare the variable called myconcat and  the variable myconcat is assigned an arrow function that takes two arguments (arr1 and arr2) and concatenates them using the concat method.
console.log(myconcat([1,2],[3,4,5])); // that the result of invoking the myconcat function with two arrays ([1,2] and [3,4,5]) is logged to the console.

//EXERCISE 3


// Define a function named greet that takes two parameters: name (a string) and callback (a function)
function greet(name, callback) {
    // Print a greeting message using the provided name
    console.log('Hi' + " " + name);
    // Call the callback function provided as an argument
    callback();
}

// Define a function named callme
function callme() {
    // Print a message welcoming back
    console.log("Welcome Back");
}

// Call the greet function with "Brilu" as the name and callme function as the callback
greet("Brilu", callme);

//EXERCISE 4

// Define a function named getData that returns a Promise
function getData() {
    return new Promise(function(resolve, reject) { // Create a new Promise using the Promise constructor
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
            // Reject the Promise with an error message after 100 milliseconds
            reject("Something is Wrong !");
        }, 100);
    });
}

// Define an async function named start
async function start() {
    try {
        // Await the result of the getData function
        const result = await getData();
         
    } catch(error) {
        // If an error occurs during the execution of getData, catch and handle it here
       console.log("ERROR : " + error );
    }
}

// Call the start function to begin the asynchronous operation
start();

//EXERCISE 5
                    
function isItReal() {  // we define a function named isItReal that returns a Promise
    
    return new Promise(function(resolve, reject) {   // Create a new Promise with a callback function that takes two parameters: resolve and reject
       
        setTimeout(() => {  // Use setTimeout to create an asynchronous operation (e.g., fetching data from a server in the case of an API)
           
            const data = "Beautiful people rule the world";   /* Inside the setTimeout callback, create a variable data with a string value
            if the variable data were to be a reject the string would say "Technology rules the world"*/ 
            
            resolve(data); // Resolve the Promise with the data variable
        }, 100); // Wait 2 seconds
    });
}

// Define a function named onSuccess that will be called when the Promise resolves successfully
function onSuccess(data) {
    // Log a success message along with the resolved data
    console.log("Data Successful:", data);
}

// Define a function named onFailure that will be called when the Promise is rejected
function onFailure(error) {
    // Log an error message along with the rejection reason
    console.log("Data Unsuccessful:", error);
}

// Call the fetchData function, which returns a Promise
isItReal()
    // if the promise is fulfilled we us the then(). method and we pass through the onSuccess function
    .then(onSuccess)
    // if the promise is rejected we us the catch(). method and we pass through the onFailure function
    .catch(onFailure);
   
   
//EXERCISE 6
    
function multiplyAll(arr) {
    // Initialize a variable to hold the product of all elements
    var product = 1;
    
    // Outer loop: iterate over each row of the array
    for (var i = 0; i < arr.length; i++) {
        // Inner loop: iterate over each element in the current row
        for (var j = 0; j < arr[i].length; j++) {
            // Multiply the current element with the product
            product *= arr[i][j];
        }
    }
    // Return the final product after iterating through all elements
    return product;
} 

// Call the multiplyAll function with a nested array as input
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

// Log the result to the console
console.log(product);


//EXERCISE 7

// Define a function to check a score and print a message based on its value
function checkScore(num) {
    // Check if the score is greater than 5
    if (num > 5) {
        // If the score is greater than 5, print a message indicating it's more than 5
        console.log("Mhmm!! at least it's more than 5");
    } 
    // If the score is not greater than 5, check if it's greater than 0
    else if (num > 0) {
        // If the score is greater than 0 but not greater than 5, print a message indicating it's aight
        console.log("I mean it's aight");
    } 
    // If the score is not greater than 0, check if it's less than 0
    else if (num < 0) {
        // If the score is less than 0, print a message indicating it's chai and advise to start praying
        console.log("Ehh poi, it's chai start praying!");
    } 
    // If the score is neither greater than 5, nor greater than 0, nor less than 0, it must be 0
    else {
        // If the score is 0, print a message indicating it's zero
        console.log("It's just Zero");
    }
}

// Call the checkScore function with a score of -3 and log the result to the console
checkScore(-3);
