// Defining constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Array to store daily wages
let dailyWageArray = [];

// Object to store daily wages mapped to days
let dailyWageMap = new Map();

/**
 * Function to get work hours based on employee type
 * @param {number} empType - The type of employee (Absent, Part-Time, or Full-Time)
 * @returns {number} - Number of hours worked
 */
const getWorkHours = (empType) => {
    return empType === IS_PART_TIME ? PART_TIME_HOURS :
           empType === IS_FULL_TIME ? FULL_TIME_HOURS : 0;
};

/**
 * Function to calculate daily wage
 * @param {number} empHours - Number of hours worked
 * @returns {number} - Daily wage calculated
 */
const calculateDailyWage = (empHours) => empHours * WAGE_PER_HOUR;

/**
 * Function to calculate payroll data
 */
const calculatePayrollData = () => {
    let totalHours = 0;
    let totalDays = 0;

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        let empType = Math.floor(Math.random() * 3); // Generate employee type (0, 1, 2)
        let empHours = getWorkHours(empType); // Get work hours

        if (totalHours + empHours > MAX_WORKING_HOURS) {
            empHours = MAX_WORKING_HOURS - totalHours; // Restrict hours to max limit
        }

        let dailyWage = calculateDailyWage(empHours);
        totalHours += empHours;
        totalDays++;

        // Store daily wage in array and map
        dailyWageArray.push(dailyWage);
        dailyWageMap.set(totalDays, dailyWage);
    }

    return { totalHours, totalDays };
};

// Call function to calculate payroll data
let payrollData = calculatePayrollData();

console.log("\n🔹 **Employee Wage Calculation Using Arrow Functions & Helper Functions** 🔹\n");

// (a) **Calculate Total Wage**
const totalWage = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`🔹 Total Wage Earned: ₹${totalWage}`);

// (b) **Show Day along with Daily Wage using Map**
console.log("\n🔹 **Day-wise Wages:**");
dailyWageMap.forEach((wage, day) => console.log(`Day ${day}: ₹${wage}`));

// (c) **Show Days when Full-Time Wage of ₹160 was earned**
const fullTimeWageDays = [...dailyWageMap.entries()]
    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(([day, wage]) => `Day ${day}`);
console.log(`\n🔹 Days with Full-Time Wage (₹160): ${fullTimeWageDays.join(", ")}`);

// (d) **Find First Occurrence of Full-Time Wage**
const firstFullTimeDay = [...dailyWageMap.entries()]
    .find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\n🔹 First Full-Time Wage Earned on: Day ${firstFullTimeDay ? firstFullTimeDay[0] : "None"}`);

// (e) **Check if Every Element of Full-Time Wage is truly holding Full-Time Wage**
const allFullTime = fullTimeWageDays.length === dailyWageArray.filter(wage => wage === 160).length;
console.log(`\n🔹 All Full-Time Wages Valid: ${allFullTime ? "✅ Yes" : "❌ No"}`);

// (f) **Check if There’s Any Part-Time Wage**
const hasPartTimeWage = dailyWageArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\n🔹 Is there any Part-Time Wage? ${hasPartTimeWage ? "✅ Yes" : "❌ No"}`);

// (g) **Find Number of Days the Employee Worked**
const numDaysWorked = dailyWageArray.filter(wage => wage > 0).length;
console.log(`\n🔹 Total Number of Days Worked: ${numDaysWorked}`);
