// Defining constants for work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Map to store daily wages
let dayWiseWageMap = new Map();

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
 * Function to calculate employee wage and store daily wages in a Map
 */
function calculateWageWithMap() {
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

        dayWiseWageMap.set(totalDays, dailyWage); // Store day-wise wage in Map
    }

    return totalWage;
}

// Call function to calculate wages and store values
let totalWage = calculateWageWithMap();

/**
 * Compute total wage using the Map with reduce or forEach
 */
let computedTotalWage = Array.from(dayWiseWageMap.values()).reduce((acc, wage) => acc + wage, 0);
console.log("Total Wage Computed from Map:", computedTotalWage);

/**
 * Display the Day-wise Wage stored in the Map
 */
console.log("Day-wise Wage Details:");
dayWiseWageMap.forEach((wage, day) => console.log(`Day ${day}: $${wage}`));
