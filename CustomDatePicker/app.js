const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const year_element = document.querySelector('.date-picker .dates .year .yr');
const prev_year_element = document.querySelector('.date-picker .dates .year .btn-prev-year');
const next_year_element = document.querySelector('.date-picker .dates .year .btn-next-year');
const months_element = document.querySelector('.date-picker .dates .months');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

// console.log(daysInMonth(2024, 2)); // 29
// console.log(daysInMonth(2023, 7)); // 29
// console.log(daysInMonth(2023, 8)); // 29

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

selected_date_element.textContent = formatDate(date);
populateDates();
populateMonths();

//event listener
next_year_element.addEventListener('click', goToNextYear);
prev_year_element.addEventListener('click', goToPrevYear);


//function

function toggleDatePicker(e) {
    dates_element.classList.toggle('active');
}

function goToNextYear() {
    year++;
    year_element.textContent = year;
    populateDates();
    populateMonths();
}

function goToPrevYear() {
    year--;
    year_element.textContent = year;
    populateDates();
    populateMonths();
}

function populateMonths(e) {
    months_element.innerHTML = '';
    let amount_month = 12;
    for (let i = 0; i < amount_month; i++) {
        const month_element = document.createElement('div');
        month_element.classList.add('month');
        month_element.textContent = months[i];
        if (selectedMonth == (i + 1)) {
            month_element.classList.add('selected');
        }

        month_element.addEventListener('click', function() {
            selectedDate = new Date(year + '-' + (i + 1) + '-' + selectedDay);
            selectedMonth = i + 1;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
            populateMonths();
        });
        months_element.appendChild(month_element);
    }

}

function populateDates(e) {
    days_element.innerHTML = '';

    amount_days = daysInMonth(selectedYear, selectedMonth);

    for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;

        if (selectedDay == (i + 1)) {
            day_element.classList.add('selected');
        }

        day_element.addEventListener('click', function() {
            selectedDate = new Date(year + '-' + selectedMonth + '-' + (i + 1));
            selectedDay = (i + 1);
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
            populateMonths();
        });
        days_element.appendChild(day_element);
    }
}
//helper function

function checkEventPathForClass(path, selector) {
    for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }

    return false;
}

function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }

    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
}