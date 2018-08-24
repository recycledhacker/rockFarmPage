
/**
 * finds the time and date
 * 
 * @returns {string} time and date
 */
function dateGreeting() {
    console.log('dategreeting')

    let today, day, dayNum, month, year;
    let full_Date, full_Time;
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

    today = new Date();
    
    var getToday = (today.getTime() * 24 * 60 * 60 * 1000);
    
    day = dayNames[today.getDay()]
    
    month = monthNames[today.getMonth()];

    dayNum = dayNumbers[today.getDate()];

    year = today.getFullYear();

    full_Time = today.toTimeString();

    full_Date = today.toDateString();

    return 'Today is ' + day + ' ' + month + ' ' + dayNum +', ' + year;

}

//console.log(dateGreeting());
document.write(dateGreeting());
