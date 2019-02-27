//console.log ('test');

function christmasCountdown () {
    
    let today = new Date();
    let currentYear = today.getFullYear();

  //  console.log (today);

    let christmas = new Date (currentYear, 11, 25);

   // console.log (christmas);
    
    let daysChristmas = (christmas - today)/(24*60*60*1000);
 //   console.log (daysChristmas);

    document.getElementById('display_days').innerHTML = ("It is " + Math.ceil(daysChristmas) + " days to Christmas.");

    
}