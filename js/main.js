// set the current real time on the html clock section
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('t-clock').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

//get a random quote to be displayed on the main window
async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    var quote = `${data.content}`;
    var auth = `${data.author}`;
    document.getElementById('w-text').innerHTML = quote +"<br> <span style='font-size: 32px'>- "+ auth + "</span>";
    // var t = setTimeout(randomQuote, 10000);
}

//get a random 1080p wallpaper from Unsplash
function randomWallpaper(){
    document.body.style.background = "url('https://source.unsplash.com/random/1920x1080') fixed no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
 }