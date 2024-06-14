//Find Next Number
document.getElementById("out").hidden = true
function getNextNum() {
    let val = document.getElementById("int").value
    console.log(parseInt(val) + 1)
    let next = parseInt(val) + 1
        document.getElementById("out").hidden = false
        document.getElementById("n").innerHTML = val
        document.getElementById("o").innerHTML = next
}

//Area Of Triangle
document.getElementById("out2").hidden = true
function calArea() {
    let base = document.getElementById("base").value
    let height = document.getElementById("height").value
    let area = 0.5 * parseInt(base) * parseInt(height)
        document.getElementById("out2").hidden = false
        document.getElementById("res").innerHTML = area
}

// //Find Days Between Dates
// document.getElementById("out3").hidden = true
// function calDays() {
//     let dob = document.getElementById("dob").value
//     console.log(dob)
//     let time1 = new Date(dob).getTime()
//     let time2 = new Date().getTime()
//     // console.log(time1, time2)
//     let diff = Math.abs(time2 - time1)
//     let days = Math.ceil(diff / (1000 * 60 * 60 * 24))
   
//         document.getElementById("out3").hidden = false
//         // console.log(days)
//         let year = Math.floor(days/365)    //Find Year  22 before floor 22.5369863014 
//         let month = Math.floor(((days/365) % 1) * 12)
//         let remDays = ((((days/365) % 1) * 12)*1) * 30
//         console.log(year,month,remDays)
//         document.getElementById("result").value = days   
// }



//Find Your Age
document.getElementById("out3").hidden = true;
function calDays() {
    let dob = document.getElementById("dob").value;
    let startDate = new Date(dob);
    let endDate = new Date();

    let diff = Math.abs(endDate - startDate);
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("out3").hidden = false;

    // Calculate years, months, and days
    let years = Math.floor(days / 365);
    days -= years * 365;

    let months = Math.floor(days / 30);
    days -= months * 30;

    let remDays = days;

    console.log(years, months, remDays);

    document.getElementById("result").innerHTML = `You are <b>${years}</b> Years, <b>${months}</b> Months and <b>${remDays}</b> Days Old.`;
}
