// functions to be called when the DOM is loaded
$(document).ready(function () {
  startTime();
  randomQuote();
  randomWallpaper();
  $("#icon-telegram").click(randomQuote);
  $("#icon-photos").click(randomWallpaper);
  $("#w-close").click(closeWindow);
  $("#unicorn").click(showWindow);
});

// set the current real time on the html clock section
function startTime() {
  var dToday = new Date();
  var h = dToday.getHours();
  var m = dToday.getMinutes();
  m = checkTime(m);
  h = checkTime(h);
  $("#t-clock").html(h + ":" + m);
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//get a random quote to be displayed on the main window
async function randomQuote() {
  $("#w-text").fadeOut();
  const response = await fetch("https://api.quotable.io/random");
  const aData = await response.json();
  var cQuote = `${aData.content}`;
  var cAuthor = `${aData.author}`;
  var cAuthorSrch = cAuthor.replace(" ", "+");
  $("#w-text").css("transform", "translate(30px, 0)");
  setTimeout(() => {
    $("#w-text").html(cQuote + "<br> <a href='https://www.google.com/search?q=" + cAuthorSrch + "' target='_blank'><span style='font-size: 32px'>- " + cAuthor + "</span></a>");
    $("#w-text").fadeIn();
    $("#w-text").css("transform", "translate(0, 0)");
  }, 1000);
  // var t = setTimeout(randomQuote, 8000);
}

//get a random wallpaper from Unsplash in 1440p
function randomWallpaper() {
  fetch("https://source.unsplash.com/2560x1440").then(response => {
    cUrl = `${response.url}`;
    if (cUrl == "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"){
      cUrl = "https://images.unsplash.com/photo-1474232486628-6e493521fd7d?w=2560&h=1440&q=80";
    }
    $("body").css("background", "url('" + cUrl + "') fixed no-repeat");
    $("body").css("background-size", "cover");
    $("body").css("background-position", "center");
    var aMinUrl = cUrl.split("?");
    $("#wpp-source").attr("href", aMinUrl[0]);
  });
}

//close the window when the "X" is clicked
function closeWindow() {
  $("#window").css("transform", "scale(0.9)");
  $("#window").fadeOut();
  $("#unicorn").css("border", "none");
  $("#unicorn").css("background", "transparent");
}

//open the window again when it's icon is clicked on the taskbar
function showWindow() {
  $("#window").fadeIn();
  $("#window").css("transform", "scale(1)");
  $("#unicorn").css("border-bottom", "2px solid #ffffff");
  $("#unicorn").css("background", "rgba(73, 73, 73, 0.7)");
}
