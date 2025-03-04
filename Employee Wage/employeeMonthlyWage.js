// Defining constants for work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;

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
 * Function to calculate monthly employee wage
 * @returns {number} - Total wage for the month
 */
function calculateMonthlyWage() {
    let totalWage = 0;
    
    for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
        let empType = Math.floor(Math.random() * 3); // Generate employee type (0, 1, 2)
        let empHours = getWorkHours(empType); // Get work hours using the function
        let dailyWage = empHours * WAGE_PER_HOUR; // Calculate daily wage
        totalWage += dailyWage; // Add daily wage to total

        console.log(`Day ${day}: Worked ${empHours} hours, Earned $${dailyWage}`);
    }

    console.log(`\nTotal Employee Wage for ${WORKING_DAYS_IN_MONTH} Days: $${totalWage}`);
    return totalWage;
}

// Calling the function to calculate monthly wage
calculateMonthlyWage();
