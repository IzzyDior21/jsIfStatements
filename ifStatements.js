// If | else statement is a conditional statment that allows js to make decisions based on your code: GIVES OPTINS

//if (condition) {
//    // CODE FOR CONDITION
//} else {
//    console.log("You are a child")
//}


//let age = 7;
//
//if (age >= 18) {
//    console.log("You are an adult.")
//} else {
//    console.log("You are a child.")
//}


// GRADING SYSTEM

//let grade = 55;
//
//if (grade >= 90) {
//    console.log("You are an A student");    
//} else if (grade >= 80) {
//    console.log("You are a B student")
//}  else if (grade >= 70) {
//    console.log("You are a C student")
//} else {
//    console.log("You are a failing student")
//}

//  COMPAIRING AND LOGICAL OPERATERS 

//> GREATER THAN
//< LESSER THAN
//>= GREATER THAN OR EQUAL To
//<= LESSER THAN OR EQUAL To
//!= DOES NOT EQUAL
//== EQUALITY OPERATER 
//=== STRICT EQUALITY
//&& TRUE 
//|| OR

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn || isAdmin) {
    console.log("Welcome, Admin");    
} else {
    console.log("Access Denied");    
}