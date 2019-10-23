var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if (this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById('dm-title').innerHTML = "Light Mode"
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById('dm-title').innerHTML = "Dark Mode"
    }
 })

let trans = () =>{
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}