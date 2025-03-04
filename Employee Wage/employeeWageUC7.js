// Defining constants for work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Array to store daily wages and work hours
let dailyWages = [];
let dailyHours = [];

/**
 * Function to get work hours based on employee type
 * @param {number} empType - The type of employee (Absent, Part-Time, or Full-Time)
 * @returns {number} - Number of hours worked
 */
function getWorkHours(empType) {
    switch (empType) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

/**
 * Function to calculate employee wage and store daily wages & work hours
 */
function calculateWageWithArrayOperations() {
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        let empType = Math.floor(Math.random() * 3); // Generate employee type (0, 1, 2)
        let empHours = getWorkHours(empType); // Get work hours
        let dailyWage = empHours * WAGE_PER_HOUR; // Calculate daily wage

        if (totalHours + empHours > MAX_WORKING_HOURS) {
            empHours = MAX_WORKING_HOURS - totalHours; // Restrict hours to 160
            dailyWage = empHours * WAGE_PER_HOUR; // Adjust wage for remaining hours
        }

        totalHours += empHours;
        totalWage += dailyWage;
        totalDays++;

        dailyWages.push(dailyWage); // Store daily wage in array
        dailyHours.push(empHours); // Store daily hours in array
    }

    return { totalWage, totalHours, totalDays };
}

// Call function to calculate wages and store values
const { totalWage, totalHours, totalDays } = calculateWageWithArrayOperations();

/**
 * a. Calculate total Wage using forEach or reduce method
 */
let totalWageUsingReduce = dailyWages.reduce((acc, wage) => acc + wage, 0);
console.log(`Total Wage using Reduce: $${totalWageUsingReduce}`);

/**
 * b. Show the Day along with Daily Wage using map function
 */
let dailyWageMap = dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Daily Wage Log:", dailyWageMap);

/**
 * c. Show Days when Full Time wage (8 hrs * $20 = $160) was earned using filter
 */
let fullTimeDays = dailyWages
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter(entry => entry.wage === 160)
    .map(entry => entry.day);
console.log("Days with Full-Time Wage of $160:", fullTimeDays);

/**
 * d. Find the first occurrence when Full Time Wage was earned using find function
 */
let firstFullTimeDay = dailyWages.find(wage => wage === 160);
console.log("First occurrence of Full-Time Wage:", firstFullTimeDay ? `$${firstFullTimeDay}` : "Never Earned Full Time Wage");

/**
 * e. Check if Every Element of Full Time Wage is truly holding Full time wage using every function
 */
let allFullTime = dailyWages.every(wage => wage === 160);
console.log("Did Employee Earn Only Full-Time Wage Every Day?:", allFullTime);

/**
 * f. Check if there is any Part Time Wage using some function
 */
let anyPartTime = dailyWages.some(wage => wage === 80);
console.log("Did Employee Earn Any Part-Time Wage?:", anyPartTime);

/**
 * g. Find the number of days the Employee Worked (i.e., where wage > 0)
 */
let totalWorkingDays = dailyWages.filter(wage => wage > 0).length;
console.log("Total Days Employee Worked:", totalWorkingDays);
