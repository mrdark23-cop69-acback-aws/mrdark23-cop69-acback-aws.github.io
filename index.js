let Ar1 = document.getElementById("ar1")
let Ar2 = document.getElementById("ar2")
let Ar3 = document.getElementById("ar3")
let Ar4 = document.getElementById("ar4")

let Ar1f = document.querySelector("#mob1")
let Ar2f = document.querySelector("#mob2")
let Ar3f = document.querySelector("#mob3")
let Ar4f = document.querySelector("#mob4")

let Arrow1 = document.querySelector("#are1")
let Arrow2 = document.querySelector("#are2")
let Arrow3 = document.querySelector("#are3")
let Arrow4 = document.querySelector("#are4")

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

window.addEventListener("load", function(){
    Ar1f.style.display = "none"
    Ar2f.style.display = "none"
    Ar3f.style.display = "none"
    Ar4f.style.display = "none"
})

Ar1.addEventListener("click", function(){
    if(count1 === 0){
        Ar1f.style.display = "flex"
        Arrow1.style.transform = 'rotate(90deg)';
        count1++
    }else{
        Ar1f.style.display = "none"
        Arrow1.style.transform = 'rotate(0deg)';
        count1 = 0
    }
})
Ar2.addEventListener("click", function(){
    if(count2 === 0){
        Ar2f.style.display = "flex"
        Arrow2.style.transform = 'rotate(90deg)';
        count2++
    }else{
        Ar2f.style.display = "none"
        Arrow2.style.transform = 'rotate(0deg)';
        count2 = 0
    }
})
Ar3.addEventListener("click", function(){
    if(count3 === 0){
        Ar3f.style.display = "flex"
        Arrow3.style.transform = 'rotate(90deg)';
        count3++
    }else{
        Ar3f.style.display = "none"
        Arrow3.style.transform = 'rotate(0deg)';
        count3 = 0
    }
})
Ar4.addEventListener("click", function(){
    if(count4 === 0){
        Ar4f.style.display = "flex"
        Arrow4.style.transform = 'rotate(90deg)';
        count4++
    }else{
        Ar4f.style.display = "none"
        Arrow4.style.transform = 'rotate(0deg)';
        count4 = 0
    }
})