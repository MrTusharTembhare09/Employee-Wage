// Defining constants for work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Maps to store daily wages and work hours
let dayWiseWageMap = new Map();
let dayWiseHourMap = new Map();

/**
 * Function to get work hours based on employee type
 * @param {number} empType - The type of employee (Absent, Part-Time, or Full-Time)
 * @returns {number} - Number of hours worked
 */
const getWorkHours = (empType) => {
    switch (empType) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

/**
 * Function to calculate employee wages and store daily wages/hours in Maps
 */
const calculateWageWithMap = () => {
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

        dayWiseWageMap.set(totalDays, dailyWage); // Store in Wage Map
        dayWiseHourMap.set(totalDays, empHours); // Store in Hour Map
    }

    return { totalWage, totalHours };
};

// Call function to calculate wages and store values
let { totalWage, totalHours } = calculateWageWithMap();

/**
 * 🏆 Using Arrow Functions to Perform Operations
 */

// (a) Calculate Total Wage and Total Hours Worked
const computedTotalWage = Array.from(dayWiseWageMap.values()).reduce((acc, wage) => acc + wage, 0);
const computedTotalHours = Array.from(dayWiseHourMap.values()).reduce((acc, hours) => acc + hours, 0);
console.log("Total Wage Computed:", computedTotalWage);
console.log("Total Hours Computed:", computedTotalHours);

// (b) Classify Full Working, Part-Time, and No Work Days
const fullWorkingDays = [...dayWiseHourMap].filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => day);
const partWorkingDays = [...dayWiseHourMap].filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => day);
const noWorkingDays = [...dayWiseHourMap].filter(([day, hours]) => hours === 0).map(([day]) => day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part-Time Working Days:", partWorkingDays);
console.log("No Work Days:", noWorkingDays);
