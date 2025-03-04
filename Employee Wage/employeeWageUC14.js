// Defining constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Array to store employee payroll data
let employeePayrollData = [];

/**
 * Function to validate employee ID
 * @param {number} id - Employee ID
 * @throws Will throw an error if ID is invalid
 */
const validateEmployeeID = (id) => {
    if (!Number.isInteger(id) || id <= 0) {
        throw new Error(`Invalid Employee ID: ${id}. It must be a non-zero positive number.`);
    }
    return id;
};

/**
 * Function to validate employee salary
 * @param {number} salary - Employee salary
 * @throws Will throw an error if salary is invalid
 */
const validateSalary = (salary) => {
    if (isNaN(salary) || salary <= 0) {
        throw new Error(`Invalid Salary: ${salary}. It must be a non-zero positive number.`);
    }
    return salary;
};

/**
 * Function to validate employee name using Regex
 * @param {string} name - Employee name to validate
 * @throws Will throw an error if name is invalid
 */
const validateName = (name) => {
    let nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, at least 3 letters
    if (!nameRegex.test(name)) {
        throw new Error(`Invalid Name: ${name}. Name must start with a capital letter and have at least 3 characters.`);
    }
    return name;
};

/**
 * Function to validate gender
 * @param {string} gender - Employee gender (M or F)
 * @throws Will throw an error if gender is invalid
 */
const validateGender = (gender) => {
    if (!/^(M|F)$/.test(gender)) {
        throw new Error(`Invalid Gender: ${gender}. It must be 'M' or 'F'.`);
    }
    return gender;
};

/**
 * Function to validate start date
 * @param {Date} date - Employee start date
 * @throws Will throw an error if date is in the future
 */
const validateStartDate = (date) => {
    let currentDate = new Date();
    if (date > currentDate) {
        throw new Error(`Invalid Start Date: ${date.toDateString()}. It cannot be a future date.`);
    }
    return date;
};

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
 * Function to calculate employee wages and store payroll data with validation
 */
const calculatePayrollData = () => {
    let totalHours = 0;
    let totalDays = 0;
    let employeeID = 1001; // Starting Employee ID
    let genders = ["M", "F"]; // Valid genders
    let names = ["John", "Alice", "mike", "robert", "Steve", "Ja"]; // Names for testing

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

        // Getting a random employee name
        let empName = names[Math.floor(Math.random() * names.length)];

        try {
            let validID = validateEmployeeID(employeeID);
            let validSalary = validateSalary(dailyWage);
            let validName = validateName(empName);
            let validGender = validateGender(gender);
            let validDate = validateStartDate(startDate);

            // Storing validated employee payroll data in an object
            employeePayrollData.push({
                id: validID,
                name: validName,
                day: totalDays,
                hoursWorked: empHours,
                wageEarned: validSalary,
                gender: validGender,
                startDate: validDate.toDateString(),
            });

            employeeID++; // Increment ID for the next employee
        } catch (error) {
            console.error(error.message);
            continue; // Skip this employee if any validation fails
        }
    }
};

// Call function to calculate payroll data
calculatePayrollData();

// Displaying Employee Payroll Data
console.log("Employee Payroll Data:");
console.table(employeePayrollData);
