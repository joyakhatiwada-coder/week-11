
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   ======================================== */

// PART 1: TIME-BASED GREETING

let userName = prompt("What is your name?");
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// PART 2: AGE AND DAYS LIVED VERIFICATION

let birthYear = Number(prompt("What year were you born?"));
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;
let daysLived = age * 365;

console.log(
    "You have lived for approximately " + daysLived + " days!"
);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// ========================================
// WEEK 11: DOM & DYNAMIC EVENT HANDLING
// ========================================

// PART 3: DARK MODE TOGGLE

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}
