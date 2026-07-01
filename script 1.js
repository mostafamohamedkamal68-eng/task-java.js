// واحد
function checkNumber(num){                            
 if (num < 100) {
        console.log("number is less than 100");
    } else
         if (num === 100) {
        console.log("number is exactly 100");
    } else {
        console.log("number is greater than 100");
    }
}
checkNumber(80);
checkNumber(100);
checkNumber(150);

// واحد 

function checkNumber(num){        
    if( num <= 100){              
    console.log("number is less than equal 100");
    } else
         if (num === 100) {
        console.log("number is greater than 100");
    }
}
checkNumber(80);
checkNumber(150);
  
// التاني
function checkNumber(num) {
    if (num > 100) {
        console.log("The string is long");
    } else {
        console.log("The string is short");
    }
}
checkNumber(80);
checkNumber(150);

// التالت
function checkPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password is valid");
    } else {
        console.log("Password is not valid");
    }
}

checkPassword("1234", "1234");
checkPassword("12345", "12345");

// رابع
function checkDay(day) {
    if (day === "Saturday") {
        console.log("Its weekend");
    } else {
        console.log("Work day");
    }
}
checkDay("Saturday");
checkDay("Monday");
 
// خامسا
function checkNumber(num) {
    if ( num > 0 ) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
checkNumber(10);
checkNumber(-5);
// سادسا
function checkGrade(grade) {
    if (grade < 50) {
        console.log("F");
    } else if (grade < 60) {
        console.log("D");
    } else if (grade < 70) {
        console.log("C");
    } else if (grade < 80) {
        console.log("B");
    } else {
        console.log("A");
    }
}
checkGrade(45);
checkGrade(55);
checkGrade(65);
checkGrade(75);
checkGrade(90);
// سابعا
function checkTemperature(temp) {
    if (temp > 30) {
        console.log("It's hot");
    } else {
        console.log("It's cold");
    }
}
checkTemperature(35);
checkTemperature(20);
// ثامنا
function checkNumber(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkNumber(10);
checkNumber(7);
// تاسعا
function checkAge(age) {
    if (age > 20) {
        console.log("You can enter the university");
    } else {
        console.log("You can't enter");
    }
}
checkAge(25);
checkAge(18);