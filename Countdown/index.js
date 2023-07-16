
// dynamically assigning the dates on index
const enddate = "01 August 2024 12:00 PM"
document.getElementById('end-date').innerText = enddate;
const inputs = document.querySelectorAll('input')

// function for get current and ending time
function time() {
    const end = new Date(enddate)
    const now = new Date()
    const diffrence = end - now;

    if(diffrence < 0)
    {
        return;  //prohibitting minus values in text boxes after time limit exeeds
    }

    inputs[0].value = Math.floor(diffrence / (1000 * 3600 * 24));
    inputs[1].value = Math.floor((diffrence % (1000 * 3600 * 24)) / (1000 * 3600));
    inputs[2].value = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    inputs[3].value = Math.floor((diffrence % (1000 * 60)) / 1000);
}

// innitial call to time function
time()

// refreshes the seconds in output
setInterval(() => { 
    time()
},1000);