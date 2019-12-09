

window.onload= setTimeout(()=>{
    let loader= document.querySelector(".loader");
    loader.className += " hidden";
}, 3000)



function Dropdown(y){

    var x= document.querySelector("#left .links");
    var y= document.querySelector(".mobileHeader .fa-bars");
    
    if(x.style.height==="0px"){
        x.style.height="198px";
        y.classList.toggle("fa-window-close");
        console.log(y);
    }else{
        x.style.height="0px";
    }
}

document.querySelector(".mobileHeader .fa-bars").addEventListener("click", ()=>{
    Dropdown(this);
});



let Navbar= document.querySelector(".mobileHeader");
let sticky= Navbar.offsetTop;


function ScrollMe(){
    if(window.pageYOffset>= sticky){
        Navbar.classList.add("sticky");
    }else{
        Navbar.classList.remove("sticky");
    }
}

window.onscroll= ()=>{
    ScrollMe();
}


