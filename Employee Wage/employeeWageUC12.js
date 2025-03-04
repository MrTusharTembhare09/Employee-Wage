// Defining constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Array to store employee daily details as objects
let employeePayrollData = [];

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
 * Function to calculate employee wages and store payroll data with gender and start date
 */
const calculatePayrollData = () => {
    let totalHours = 0;
    let totalDays = 0;
    let genders = ["Male", "Female"]; // Defining gender options

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        let empType = Math.floor(Math.random() * 3); // Generate employee type (0, 1, 2)
        let empHours = getWorkHours(empType); // Get work hours
        let dailyWage = empHours * WAGE_PER_HOUR; // Calculate daily wage

        if (totalHours + empHours > MAX_WORKING_HOURS) {
            empHours = MAX_WORKING_HOURS - totalHours; // Restrict hours to 160
            dailyWage = empHours * WAGE_PER_HOUR; // Adjust wage for remaining hours
        }

        totalHours += empHours;
        totalDays++;

        // Generating random gender and start date
        let gender = genders[Math.floor(Math.random() * genders.length)];
        let startDate = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

        // Storing employee payroll data in an object
        employeePayrollData.push({
            day: totalDays,
            hoursWorked: empHours,
            wageEarned: dailyWage,
            gender: gender,
            startDate: startDate.toDateString()
        });
    }
};

// Call function to calculate payroll data
calculatePayrollData();

// Displaying Employee Payroll Data
console.log("Employee Payroll Data:");
console.table(employeePayrollData);

// a. Calculate total wage and total hours worked using reduce()
const totalWage = employeePayrollData.reduce((total, day) => total + day.wageEarned, 0);
const totalHours = employeePayrollData.reduce((total, day) => total + day.hoursWorked, 0);
console.log(`Total Hours Worked: ${totalHours}, Total Wage: $${totalWage}`);

// b. Show full working days using forEach
console.log("Full Working Days:");
employeePayrollData.forEach((day) => {
    if (day.hoursWorked === FULL_TIME_HOURS) console.log(`Day ${day.day}: ${day.hoursWorked} Hrs, Gender: ${day.gender}, Start Date: ${day.startDate}`);
});

// c. Show Part Working Days using Map by reducing to String Array
const partTimeDays = employeePayrollData
    .filter(day => day.hoursWorked === PART_TIME_HOURS)
    .map(day => `Day ${day.day} (${day.gender}, Start Date: ${day.startDate})`);
console.log("Part Working Days:", partTimeDays.join(", "));

// d. No working days only using Map function
const noWorkDays = employeePayrollData
    .filter(day => day.hoursWorked === 0)
    .map(day => `Day ${day.day} (${day.gender}, Start Date: ${day.startDate})`);
console.log("No Working Days:", noWorkDays.join(", "));
