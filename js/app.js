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

    if(img.src.match("./image/20191215_091110.jpg")){
        img.src = "./image/figo.jpg"
    }else{
        img.src = "./image/20191215_091110.jpg"
    }
}

