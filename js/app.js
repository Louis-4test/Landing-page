function changeText(){
    var h1 = document.getElementById("h1")
    if(h1.innerHTML == "Ui/Ux Designer And Web Developer"){
        h1.innerHTML = "Skilled in Design and Web Developement"
    }else{
        h1.innerHTML = "Ui/Ux Designer And Web Developer"
    }
}


let changeImg = ()=>{
    var img = document.getElementById("img")

    if(img.src.match("./image/Capture.PNG")){
        img.src = "./image/F1.png"
    }else{
        img.src = "./image/Capture.PNG"
    }
}


var open = document.getElementById("open")

open.addEventListener("click", function(){
    var overlay = document.getElementById("overlay")
    if(overlay.style.width == "80%"){
        overlay.style.width = "0%"
    }else{
        overlay.style.width = "80%"
    }
})
