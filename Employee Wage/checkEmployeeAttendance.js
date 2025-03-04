// Defining constants for Employee status
const IS_PRESENT = 1;

// Checking employee attendance using Math.random()
function checkEmployeeAttendance() {
    // Generating a random value (0 or 1)
    let attendance = Math.floor(Math.random() * 2); 

    // Checking employee presence
    if (attendance === IS_PRESENT) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}

// Calling the function to check attendance
checkEmployeeAttendance();
