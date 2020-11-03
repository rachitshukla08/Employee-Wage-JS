//UC1 Check employee present or absent
{
    const IS_ABSENT = 0;

    let empCheck = Math.floor(Math.random()*10)%2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is absent. Exiting the program");
        return;
    }
    else {
        console.log("Employee is present");
    }
}

//UC2 Switch case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%2 +1;
console.log(empCheck);
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Employee wage = "+empWage);


