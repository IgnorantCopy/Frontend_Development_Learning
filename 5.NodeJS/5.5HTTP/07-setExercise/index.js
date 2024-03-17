let tds = document.querySelectorAll('td')
tds.forEach(i => {
    i.onclick = function () {
        this.style.background = "#F00"
    }
})