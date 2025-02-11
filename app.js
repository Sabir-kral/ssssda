function Daate() {
    let date = new Date()
    document.querySelector(".dd").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    document.querySelector(".sd").innerHTML = `TUESDAY,FEBRUARY ${date.getDay()},${date.getFullYear()}`
}
setInterval(Daate,1000)