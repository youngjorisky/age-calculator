document.getElementById('calculateBtn').addEventListener('click', function() {
    const dayInput = document.getElementById("day-value");
    const monthInput = document.getElementById("month-value");
    const yearInput = document.getElementById("year-value");
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const errorMessage1 = document.getElementById('error-message1');
    const errorMessage2 = document.getElementById('error-message2');
    const errorMessage3 = document.getElementById('error-message3');
    const givered1 = document.getElementById("givered1");
    const givered2 = document.getElementById("givered2");
    const givered3 = document.getElementById("givered3");

   errorMessage1.textContent = '';
   errorMessage2.textContent = '';
   errorMessage3.textContent = '';

    dayInput.style.border = '';   
    monthInput.style.border = ''; 
    yearInput.style.border = '';

   let isValid = true;

   if(dayInput.value === '' && monthInput.value === '' && yearInput.value === ''){
    errorMessage1.textContent += "This field is required";
    errorMessage2.textContent += "This field is required";
    errorMessage3.textContent += "This field is required";
    (errorMessage1 && errorMessage2 && errorMessage3).classList.add('errormessage');
    givered1.style.color = "#FA3940";
    givered2.style.color = "#FA3940";
    givered3.style.color = "#FA3940";
    dayInput.style.border = "1px solid red";
    monthInput.style.border = "1px solid red";
    yearInput.style.border = "1px solid red";
    isValid = false;
    }
    else if((isNaN(day) || day < 1 || day > new Date(year, month, 0).getDate())) {
        errorMessage1.textContent += "Must be a valid date";
        (errorMessage1 && errorMessage2 && errorMessage3).classList.add('errormessage');
        givered1.style.color = "#FA3940";
        givered2.style.color = "#FA3940";
        givered3.style.color = "#FA3940";
        dayInput.style.border = "1px solid red";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
        isValid = false;
    }else if((isNaN(day) || day < 1 || day > 31) || 
    (isNaN(month) || month < 1 || month > 12) || 
    (isNaN(year) || year < 1900 || year > new Date().getFullYear())){
        errorMessage1.textContent += "Must be a valid day";
        errorMessage2.textContent += "Must be a valid month";
        errorMessage3.textContent += "Must be a valid year";
        (errorMessage1 && errorMessage2 && errorMessage3).classList.add('errormessage');
        givered1.style.color = "#FA3940";
        givered2.style.color = "#FA3940";
        givered3.style.color = "#FA3940";
        dayInput.style.border = "1px solid red";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
        isValid = false;
    }
    else {
        givered1.style.color = "#716f6f";
        givered2.style.color = "#716f6f";
        givered3.style.color = "#716f6f";
    }

    if (!isValid) {
        return; 
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(year, month, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
});
