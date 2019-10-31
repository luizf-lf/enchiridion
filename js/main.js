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
    var author = `${data.author}`;
    var authorSrch = author.replace(" ", "+")
    document.getElementById('w-text').innerHTML = quote +"<br> <a href='https://www.google.com/search?q=" +authorSrch+ "' target='_blank'><span style='font-size: 32px'>- "+ author + "</span></a>";
    // var t = setTimeout(randomQuote, 10000);
}

//get a random wallpaper from Unsplash in 1440p
function randomWallpaper(){ 
  fetch("https://source.unsplash.com/random/2560x1440").then((response)=> {
    var url = `${response.url}`;
    document.body.style.background = "url('"+ url +"') fixed no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    // set the full image link to a specified 'a' tag
    var minUrl = url.split("?")
    document.getElementById("wpp-source").href = minUrl[0]
  })
 }

 //close the window when the "X" is clicked
 function closeWindow(){
   document.getElementById("window").style.display = "none";
   document.getElementById("unicorn").style.border = "none";
   document.getElementById("unicorn").style.background = "transparent";
 }

 //open the window again when it's icon is clicked on the taskbar
 function showWindow(){
  document.getElementById("window").style.display = "block";
  document.getElementById("unicorn").style.borderBottom = "2px solid #ffffff";
  document.getElementById("unicorn").style.background = "rgba(73, 73, 73, 0.7)";
 }