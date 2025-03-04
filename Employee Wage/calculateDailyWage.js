// Defining constants for work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to calculate daily wage
function calculateDailyWage() {
    // Generating random work type (0: Absent, 1: Part-Time, 2: Full-Time)
    let empType = Math.floor(Math.random() * 3);

    // Variable to store working hours
    let empHours = 0;

    // Determining working hours using switch-case
    switch (empType) {
        case IS_PART_TIME:
            empHours = PART_TIME_HOURS;
            console.log("Employee is working Part-Time.");
            break;
        case IS_FULL_TIME:
            empHours = FULL_TIME_HOURS;
            console.log("Employee is working Full-Time.");
            break;
        default:
            empHours = 0;
            console.log("Employee is Absent.");
    }

    // Calculating daily wage
    let dailyWage = empHours * WAGE_PER_HOUR;
    console.log(`Daily Employee Wage: $${dailyWage}`);
}

// Calling the function to calculate daily wage
calculateDailyWage();
