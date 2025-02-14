// function Daate() {
//     let date = new Date()
//     document.querySelector(".dd").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     document.querySelector(".sd").innerHTML = `TUESDAY,FEBRUARY ${date.getDay()},${date.getFullYear()}`
// }
// setInterval(Daate,1000)
// let p = document.querySelector("p")
// let p1 = document.querySelector(".p1")
// let p2 = document.querySelector(".p2")
// let inputs = document.querySelectorAll("input")




    let input2 = document.querySelector("#ss")
    let input3 = document.querySelector("#sf")
    let img1 = document.querySelector(".img1")
    let img2 = document.querySelector(".img2")
    let img3 = document.querySelector(".img3")
    let inputs = document.querySelectorAll("input")
    let buton = document.querySelector("button")
    inputs.forEach(input => {
        buton.addEventListener("click",()=>{
            if (input.value ==""||!input.checkValidity()) {
                buton.nextElementSibling.style.color = "red"
                img1.src="./false.svg"
                img2.src="./false.svg"
                img3.src="./false.svg"
                buton.nextElementSibling.innerHTML = "formda yanlis melumatlar var"
            } else {
                buton.nextElementSibling.style.color = "green"
                img1.src="./true.svg"
                img2.src="./true.svg"
                img3.src="./true.svg"
                buton.nextElementSibling.innerHTML = "qeydiyyat ugurludur"
            }
        })
        
    });  