async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    var quote = `${data.content}`
    var auth = `${data.author}`
    document.getElementById('w-text').innerHTML = quote +"<br> <span style='font-size: 32px'> -"+ auth + "</span>"
    // var t = setTimeout(randomQuote, 10000);
  }