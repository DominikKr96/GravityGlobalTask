let clicked = 0;

function initAll() {
    const btn = document.querySelector(".btn");
    const btn2 = document.querySelector(".btn-close");
    btn.onclick = showPop;
    btn2.onclick = closeAlert;
}

function showPop() {
    document.querySelector(".popup").style.display = "block";
    let memory = localStorage.getItem('clicked')
    clicked++;
    if(memory === undefined){
        localStorage.setItem('clicked', clicked.toString())
    }else{
        localStorage.setItem('clicked', clicked.toString())
        memory = localStorage.getItem('clicked');
        clicked = Number(memory);
        console.log(clicked);
    }

    if(clicked >= 5){
        document.querySelector(".alert").style.display = "block";
        setX(clicked);
    }
}

function setX(arg){
    const x = document.querySelector('.x');
    x.innerHTML = arg;
}

function closePop(){
    document.querySelector(".popup").style.display = "none";

}


function closeAlert(){
    document.querySelector(".alert").style.display = "none";
    console.log('works')
}

document.addEventListener("mouseup", closePop)
document.addEventListener("DOMContentLoaded", initAll)
